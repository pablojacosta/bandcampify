import { ChangeEvent, KeyboardEvent, useEffect } from "react";
import "@styles/globals.scss";
import Container from "@components/elements/Container";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import TrackList from "@components/TrackList";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import useGetSearchData from "@hooks/useGetSearchData";
import { useFoundResultsStore } from "@store/useFoundResultsStore";
import { Routes, Route, Link } from "react-router-dom";
import TopSection from "@components/TopSection";
import styles from "./App.module.scss";
import Footer from "@components/shared/Footer";
import { useSearchStore } from "@store/useSearchStore";
import AlbumsList from "@components/TopSection/components/AlbumsList";
import { ALBUMS, HOME, SHARE, TRACKS } from "@constants/routes";
import TrackPlayer from "@components/shared/TrackPlayer";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";

const App = () => {
  const { getSearchData } = useGetSearchData();
  const { foundResults } = useFoundResultsStore();
  const { hideArtists, artistInfo, setHideArtists } = useSelectedArtistStore();
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
    setHideAlbums,
  } = useSelectedAlbumStore();
  const albums = artistInfo?.albums;
  const { showPlayer } = useSelectedAlbumStore();
  const { setIsTrack, setTrack } = useSelectedTrackStore();

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

  const restore = () => {
    setHideAlbums(true);
    setHasAlbums(false);
    setHideArtists(true);
    setShowTrackList(false);
    setIsTrack(false);
    setTrack(null);
    setSearch("");
  };

  return (
    <div className={styles.app}>
      <Link to={HOME} onClick={restore} className={styles.headerContainer}>
        <h1 className={styles.header}>Bandcampify</h1>
      </Link>
      <Container>
        <Routes>
          <Route
            path={HOME}
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
          <Route path={ALBUMS} element={<AlbumsList />} />
          <Route path={TRACKS} element={<TrackList />} />
          <Route path={`${SHARE}/:sharedAlbumUrl`} element={<TrackList />} />
        </Routes>
      </Container>
      {showPlayer && <TrackPlayer />}
      <div className={styles.footerSpace} />
      <Footer />
    </div>
  );
};

export default App;
