import styles from "./TopSection.module.scss";
import Loader from "@components/shared/Loader";
import AlbumsList from "@components/TopSection/components/AlbumsList";
import useGetSearchData from "@hooks/useGetSearchData";
import { useLoaderStore } from "@store/useLoaderStore";
import { ITopSection } from "interfaces/topSection";
import { useFoundArtistsStore } from "@store/useFoundArtistsStore";
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
  const { getSearchData } = useGetSearchData(filteredArtist);
  const { showLoader } = useLoaderStore();
  const { foundArtists } = useFoundArtistsStore();

  return (
    <div className={styles.topSection}>
      {!showTrackList && (
        <SearchSection
          handleArtistFilterChange={handleArtistFilterChange}
          filteredArtist={filteredArtist}
          onKeyDown={onKeyDown}
          getSearchData={getSearchData}
        />
      )}
      {showLoader && <Loader />}
      {showFoundArtists && foundArtists && (
        <FoundArtists foundArtists={foundArtists} />
      )}
      {showAlbumsList && <AlbumsList />}
    </div>
  );
};

export default TopSection;
