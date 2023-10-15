import { ISearchArtistButton } from "interfaces/searchArtistButton";
import styles from "./SearchArtistButton.module.scss";

const SearchArtistButton = ({ getArtistData }: ISearchArtistButton) => {
  return (
    <button onClick={getArtistData} className={styles.searchArtistButton}>
      Search!
    </button>
  );
};

export default SearchArtistButton;
