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
  handleSearchChange,
  search,
  onKeyDown,
  showFoundResults,
  showAlbumsList,
}: ITopSection) => {
  const { getSearchData } = useGetSearchData(search);
  const { showLoader } = useLoaderStore();
  const { foundResults } = useFoundResultsStore();

  return (
    <div className={styles.topSection}>
      {!showTrackList && (
        <SearchSection
          handleSearchChange={handleSearchChange}
          search={search}
          onKeyDown={onKeyDown}
          getSearchData={getSearchData}
        />
      )}
      {showLoader && <Loader />}
      {showFoundResults && foundResults && (
        <FoundResults foundResults={foundResults} />
      )}
      {showAlbumsList && <AlbumsList />}
    </div>
  );
};

export default TopSection;
