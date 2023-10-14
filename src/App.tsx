/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import FoundArtists from "@components/FoundArtists";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import styles from "./App.module.scss";
import Container from "@components/elements/Container";
import AlbumsList from "@components/AlbumsList";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import TrackList from "@components/TrackList";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import Loader from "@components/shared/Loader";
import { useLoaderStore } from "@store/useLoaderStore";
import useGetArtistData from "@hooks/useGetArtistData";
import { useFoundArtistsStore } from "@store/useFoundArtistsStore";

const App = () => {
  const { showLoader } = useLoaderStore();
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
  } = useSelectedAlbumStore();
  const [showTrackList, setShowTrackList] = useState(false);
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
  }, [isReadyForTrackList]);

  useEffect(() => {
    if (albums.length) {
      setHasAlbums(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albums]);

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
        {showLoader && <Loader />}
        {showFoundArtists && <FoundArtists foundArtists={foundArtists} />}
        {showAlbumsList && <AlbumsList albums={albums} />}
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
