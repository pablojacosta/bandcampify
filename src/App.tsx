import { ChangeEvent, KeyboardEvent, useEffect } from "react";
import "@styles/globals.scss";
import Container from "@components/elements/Container";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import TrackList from "@components/TrackList";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import useGetSearchData from "@hooks/useGetSearchData";
import { useFoundResultsStore } from "@store/useFoundResultsStore";
import { Routes, Route } from "react-router-dom";
import TopSection from "@components/TopSection";
import styles from "./App.module.scss";
import Footer from "@components/shared/Footer";
import useWakeRenderServerUp from "@hooks/useWakeRenderServerUp";
import { useSearchStore } from "@store/useSearchStore";
import AlbumsList from "@components/TopSection/components/AlbumsList";

const App = () => {
  const { wakeServer } = useWakeRenderServerUp();
  const { getSearchData } = useGetSearchData();
  const { foundResults } = useFoundResultsStore();
  const { hideArtists, artistInfo } = useSelectedArtistStore();
  const { search, setSearch } = useSearchStore();
  const {
    showTracks,
    tracks,
    albumUrl,
    hideAlbums,
    hasAlbums,
    setHasAlbums,
    setShowTrackList,
    showTrackList,
  } = useSelectedAlbumStore();
  const albums = artistInfo?.albums;

  const showAlbumsList = hasAlbums && !hideAlbums;
  const showFoundResults =
    !hideArtists && foundResults && foundResults.length > 0;
  const isReadyForTrackList = showTracks && tracks && albumUrl;

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      getSearchData(search);
    }
  };

  useEffect(() => {
    if (isReadyForTrackList) {
      setShowTrackList(true);
    }
  }, [isReadyForTrackList, setShowTrackList]);

  useEffect(() => {
    if (albums && albums.length) {
      setHasAlbums(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albums]);

  useEffect(() => {
    wakeServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Bandcampify</h1>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <TopSection
                showTrackList={showTrackList}
                handleSearchChange={handleSearchChange}
                search={search}
                onKeyDown={onKeyDown}
                showFoundResults={showFoundResults}
                showAlbumsList={showAlbumsList}
              />
            }
          />
          <Route path="/albums" element={<AlbumsList />} />
          <Route path="/tracks" element={<TrackList />} />
        </Routes>
      </Container>
      <div className={styles.footerSpace} />
      <Footer />
    </div>
  );
};

export default App;
