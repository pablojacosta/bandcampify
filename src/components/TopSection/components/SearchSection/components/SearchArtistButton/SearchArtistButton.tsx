import { useSearchStore } from "@store/useSearchStore";
import styles from "./SearchArtistButton.module.scss";
import useGetSearchData from "@hooks/useGetSearchData";

const SearchArtistButton = () => {
  const { search } = useSearchStore();
  const { getSearchData } = useGetSearchData();

  return (
    <button
      onClick={() => getSearchData(search)}
      className={styles.searchArtistButton}
    >
      Search
    </button>
  );
};

export default SearchArtistButton;
