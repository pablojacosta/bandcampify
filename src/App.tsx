/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import FoundArtists from "@components/FoundArtists";
import { IArtist } from "interfaces/artist";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import styles from "./App.module.scss";
import Container from "@components/elements/Container";
import AlbumsList from "@components/AlbumsList";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import TrackList from "@components/TrackList";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import SongsList from "@components/SongsList";

const App = () => {
  const [filteredArtist, setFilteredArtist] = useState("");
  const [foundArtists, setFoundArtists] = useState<IArtist[]>([]);
  const { albums, hideArtists } = useSelectedArtistStore();
  const {
    showTracks,
    tracks,
    albumArtist,
    albumId,
    albumName,
    albumUrl,
    hideAlbums,
    albumImage,
  } = useSelectedAlbumStore();
  const [artistError, setArtistError] = useState(false);
  const [showTrackList, setShowTrackList] = useState(false);
  const showAlbumsList = hideArtists && !hideAlbums;
  const isReadyForTrackList =
    showTracks && tracks && albumArtist && albumId && albumName && albumUrl;

  const handleArtistFilterChange = (event: any) => {
    setFilteredArtist(event.target.value);
  };

  const getArtistDataOptions: AxiosRequestConfig<any> = {
    method: "GET",
    url: "http://localhost:3001/artist",
    params: { artist: filteredArtist },
  };

  const getArtistData = () => {
    axios
      .request(getArtistDataOptions)
      .then((response): any => {
        if (typeof response.data === "string") {
          setArtistError(true);
          console.log("Error: ", artistError);
        }
        setFoundArtists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      getArtistData();
    }
  };

  useEffect(() => {
    if (isReadyForTrackList) {
      setShowTrackList(true);
    }
  }, [isReadyForTrackList]);

  console.log("albums", albums);

  return (
    <Container>
      <div className={styles.app}>
        <h1>Bandcampify</h1>
        {!showTrackList && (
          <SearchSection
            handleArtistFilterChange={handleArtistFilterChange}
            filteredArtist={filteredArtist}
            onKeyDown={onKeyDown}
            getArtistData={getArtistData}
          />
        )}
        {!hideArtists && <FoundArtists foundArtists={foundArtists} />}
        {showAlbumsList && <AlbumsList returnedArtistData={albums} />}
        <SongsList returnedArtistData={albums} />
        {showTrackList && tracks && (
          <TrackList
            tracks={tracks}
            artist={albumArtist}
            albumId={albumId}
            albumName={albumName}
            albumUrl={albumUrl}
            albumImage={albumImage}
          />
        )}
      </div>
    </Container>
  );
};

export default App;
