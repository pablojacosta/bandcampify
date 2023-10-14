/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "@styles/globals.scss";
import Container from "@components/elements/Container";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import TrackList from "@components/TrackList";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import useGetArtistData from "@hooks/useGetArtistData";
import { useFoundArtistsStore } from "@store/useFoundArtistsStore";
import { Routes, Route } from "react-router-dom";
import TopSection from "@components/TopSection";

const App = () => {
  const [filteredArtist, setFilteredArtist] = useState("");
  const { getArtistData } = useGetArtistData(filteredArtist);
  const { foundArtists } = useFoundArtistsStore();
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
    hasAlbums,
    setHasAlbums,
    setShowTrackList,
    showTrackList,
  } = useSelectedAlbumStore();
  const showAlbumsList = hasAlbums && !hideAlbums;
  const showFoundArtists =
    !hideArtists && foundArtists && foundArtists.length > 0;
  const isReadyForTrackList =
    showTracks && tracks && albumArtist && albumName && albumUrl;

  const handleArtistFilterChange = (event: any) => {
    setFilteredArtist(event.target.value);
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
  }, [isReadyForTrackList, setShowTrackList]);

  useEffect(() => {
    if (albums.length) {
      setHasAlbums(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albums]);

  return (
    <Container>
      <h1>Bandcampify</h1>
      <Routes>
        <Route
          path="/"
          element={
            <TopSection
              showTrackList={showTrackList}
              handleArtistFilterChange={handleArtistFilterChange}
              filteredArtist={filteredArtist}
              onKeyDown={onKeyDown}
              showFoundArtists={showFoundArtists}
              showAlbumsList={showAlbumsList}
            />
          }
        />
        <Route
          path="/tracks"
          element={
            <TrackList
              tracks={tracks!}
              artist={albumArtist}
              albumId={albumId}
              albumName={albumName}
              albumUrl={albumUrl}
              albumImage={albumImage}
            />
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
