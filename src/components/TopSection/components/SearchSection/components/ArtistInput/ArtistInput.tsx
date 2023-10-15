import { IArtistInput } from "interfaces/artistInput";
import styles from "./ArtistInput.module.scss";
import SearchIcon from "@components/elements/Icons/SearchIcon";

const ArtistInput = ({
  handleArtistFilterChange,
  filteredArtist,
  onKeyDown,
}: IArtistInput) => {
  return (
    <div className={styles.artistInput}>
      <input
        onChange={handleArtistFilterChange}
        value={filteredArtist}
        placeholder="Search Artist/Band"
        onKeyDown={onKeyDown}
        spellCheck="false"
      />
      <span className={styles.search}>
        <SearchIcon />
      </span>
    </div>
  );
};

export default ArtistInput;
