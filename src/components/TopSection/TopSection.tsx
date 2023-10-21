import styles from "./TopSection.module.scss";
import Loader from "@components/shared/Loader";
import AlbumsList from "@components/TopSection/components/AlbumsList";
import useGetSearchData from "@hooks/useGetSearchData";
import { useLoaderStore } from "@store/useLoaderStore";
import { ITopSection } from "interfaces/topSection";
import { useFoundResultsStore } from "@store/useFoundResultsStore";
import SearchSection from "./components/SearchSection";
import FoundResults from "./components/FoundResults";

const TopSection = ({
  showTrackList,
  handleArtistFilterChange,
  filteredArtist,
  onKeyDown,
  showFoundResults,
  showAlbumsList,
}: ITopSection) => {
  const { getSearchData } = useGetSearchData(filteredArtist);
  const { showLoader } = useLoaderStore();
  const { foundArtists } = useFoundResultsStore();

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
      {showFoundResults && foundArtists && (
        <FoundResults foundArtists={foundArtists} />
      )}
      {showAlbumsList && <AlbumsList />}
    </div>
  );
};

export default TopSection;
