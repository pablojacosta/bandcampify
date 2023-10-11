/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
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

const App = () => {
  const [filteredArtist, setFilteredArtist] = useState("");
  const [foundArtists, setFoundArtists] = useState<IArtist[]>([]);
  const { albums, hideArtists, showTracks, tracks } = useSelectedArtistStore();
  // const [showPlayer, setShowPlayer] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const [selectedAlbumArtist, setSelectedAlbumArtist] = useState("");
  // const [selectedAlbumId, setSelectedAlbumId] = useState<number>();
  // const [selectedAlbumUrl, setSelectedAlbumUrl] = useState("");
  // const [selectedAlbumName, setSelectedAlbumName] = useState("");
  // const [selectedTrackId, setSelectedTrackId] = useState("");
  const [artistError, setArtistError] = useState(false);

  // const [showTracks, setShowTracks] = useState(false);
  // const [albumNameToShowTracks, setalbumNameToShowTracks] = useState("");
  // const [plusToggle, setPlusToggle] = useState(false);

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
        {hideArtists && <AlbumsList returnedArtistData={albums} />}
        {showTracks && tracks && (
          <TrackList
            tracks={tracks}
            handleTrackPlayClick={undefined}
            artist={""}
            albumId={0}
            albumName={""}
            albumUrl={""}
          />
        )}
      </div>
    </Container>
  );
};

export default App;

{
  /* <TrackList
tracks={tracks}
handleTrackPlayClick={handleTrackPlayClick}
artist={artist}
albumId={id}
albumName={name}
albumUrl={url}
/> */
}
