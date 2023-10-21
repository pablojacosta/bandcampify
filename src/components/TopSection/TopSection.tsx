import styles from "./TopSection.module.scss";
import Loader from "@components/shared/Loader";
import AlbumsList from "@components/TopSection/components/AlbumsList";
import { useLoaderStore } from "@store/useLoaderStore";
import { ITopSection } from "interfaces/topSection";
import { useFoundResultsStore } from "@store/useFoundResultsStore";
import SearchSection from "./components/SearchSection";
import FoundResults from "./components/FoundResults";
import { useSearchStore } from "@store/useSearchStore";

const TopSection = ({
  showTrackList,
  handleSearchChange,
  onKeyDown,
  showFoundResults,
  showAlbumsList,
}: ITopSection) => {
  const { showLoader } = useLoaderStore();
  const { foundResults } = useFoundResultsStore();
  const { search } = useSearchStore();

  return (
    <div className={styles.topSection}>
      {!showTrackList && !showAlbumsList && (
        <SearchSection
          handleSearchChange={handleSearchChange}
          search={search}
          onKeyDown={onKeyDown}
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
