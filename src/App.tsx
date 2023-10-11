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
  } = useSelectedAlbumStore();
  const [artistError, setArtistError] = useState(false);
  const [showTrackList, setShowTrackList] = useState(false);
  const showAlbumsList = hideArtists && !hideAlbums;
  // const [showPlayer, setShowPlayer] = useState(false);
  // const [loading, setLoading] = useState(false);

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
    if (
      showTracks &&
      tracks &&
      albumArtist &&
      albumId &&
      albumName &&
      albumUrl
    ) {
      setShowTrackList(true);
    }
  }, [albumArtist, albumId, albumName, albumUrl, showTracks, tracks]);

  console.log("showTrackList", showTrackList);
  console.log(" tracks", tracks);

  return (
    <Container>
      <div className={styles.app}>
        <h1>Bandcampify</h1>
        <SearchSection
          handleArtistFilterChange={handleArtistFilterChange}
          filteredArtist={filteredArtist}
          onKeyDown={onKeyDown}
          getArtistData={getArtistData}
        />
        {!hideArtists && <FoundArtists foundArtists={foundArtists} />}
        {showAlbumsList && <AlbumsList returnedArtistData={albums} />}
        {showTrackList && tracks && (
          <TrackList
            tracks={tracks}
            handleTrackPlayClick={undefined}
            artist={albumArtist}
            albumId={albumId}
            albumName={albumName}
            albumUrl={albumUrl}
          />
        )}
      </div>
    </Container>
  );
};

export default App;
