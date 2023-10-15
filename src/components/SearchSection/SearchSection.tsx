import styles from "./SearchSection.module.scss";
import ArtistInput from "@components/SearchSection/components/ArtistInput";
import SearchArtistButton from "@components/SearchSection/components/SearchArtistButton";
import { ChangeEvent, KeyboardEvent } from "react";

interface ISearchSection {
  handleArtistFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredArtist: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  getArtistData: () => void;
}

const SearchSection = ({
  handleArtistFilterChange,
  filteredArtist,
  onKeyDown,
  getArtistData,
}: ISearchSection) => {
  return (
    <div className={styles.searchSection}>
      <ArtistInput
        handleArtistFilterChange={handleArtistFilterChange}
        filteredArtist={filteredArtist}
        onKeyDown={onKeyDown}
      />
      <SearchArtistButton getArtistData={getArtistData} />
    </div>
  );
};

export default SearchSection;
