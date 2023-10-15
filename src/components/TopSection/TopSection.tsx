import styles from "./TopSection.module.scss";
import Loader from "@components/shared/Loader";
import AlbumsList from "@components/TopSection/components/AlbumsList";
import useGetArtistData from "@hooks/useGetArtistData";
import { useLoaderStore } from "@store/useLoaderStore";
import { ITopSection } from "interfaces/topSection";
import { useFoundArtistsStore } from "@store/useFoundArtistsStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import SearchSection from "./components/SearchSection";
import FoundArtists from "./components/FoundArtists";

const TopSection = ({
  showTrackList,
  handleArtistFilterChange,
  filteredArtist,
  onKeyDown,
  showFoundArtists,
  showAlbumsList,
}: ITopSection) => {
  const { getArtistData } = useGetArtistData(filteredArtist);
  const { showLoader } = useLoaderStore();
  const { foundArtists } = useFoundArtistsStore();
  const { albums } = useSelectedArtistStore();

  return (
    <div className={styles.topSection}>
      {!showTrackList && (
        <SearchSection
          handleArtistFilterChange={handleArtistFilterChange}
          filteredArtist={filteredArtist}
          onKeyDown={onKeyDown}
          getArtistData={getArtistData}
        />
      )}
      {showLoader && <Loader />}
      {showFoundArtists && foundArtists && (
        <FoundArtists foundArtists={foundArtists} />
      )}
      {showAlbumsList && <AlbumsList albums={albums} />}
    </div>
  );
};

export default TopSection;