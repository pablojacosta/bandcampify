/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./SearchSection.module.scss";
import ArtistInput from "@components/SearchSection/components/ArtistInput";
import SearchArtistButton from "@components/SearchSection/components/SearchArtistButton";

interface ISearchSection {
  handleArtistFilterChange: (event: any) => void;
  filteredArtist: string;
  onKeyDown: (event: any) => void;
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
