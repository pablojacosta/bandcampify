/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import FoundArtists from "@components/FoundArtists";
import { IArtist } from "interfaces/artist";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import styles from "./App.module.scss";
import Container from "@components/elements/Container";

const App = () => {
  const [filteredArtist, setFilteredArtist] = useState("");
  const [foundArtists, setFoundArtists] = useState<IArtist[]>([]);
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
        <FoundArtists foundArtists={foundArtists} />
      </div>
    </Container>
  );
};

export default App;
