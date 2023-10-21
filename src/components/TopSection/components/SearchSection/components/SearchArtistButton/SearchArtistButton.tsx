import { ISearchArtistButton } from "interfaces/searchArtistButton";
import styles from "./SearchArtistButton.module.scss";

const SearchArtistButton = ({ getSearchData }: ISearchArtistButton) => {
  return (
    <button onClick={getSearchData} className={styles.searchArtistButton}>
      Search
    </button>
  );
};

export default SearchArtistButton;
