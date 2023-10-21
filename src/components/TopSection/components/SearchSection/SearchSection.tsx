import styles from "./SearchSection.module.scss";
import Container from "@components/elements/Container";
import { ChangeEvent, KeyboardEvent } from "react";
import ArtistInput from "./components/ArtistInput";
import SearchArtistButton from "./components/SearchArtistButton";

interface ISearchSection {
  handleArtistFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredArtist: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  getSearchData: () => void;
}

const SearchSection = ({
  handleArtistFilterChange,
  filteredArtist,
  onKeyDown,
  getSearchData,
}: ISearchSection) => {
  return (
    <Container>
      <div className={styles.searchSection}>
        <ArtistInput
          handleArtistFilterChange={handleArtistFilterChange}
          filteredArtist={filteredArtist}
          onKeyDown={onKeyDown}
        />
        <SearchArtistButton getSearchData={getSearchData} />
      </div>
    </Container>
  );
};

export default SearchSection;
