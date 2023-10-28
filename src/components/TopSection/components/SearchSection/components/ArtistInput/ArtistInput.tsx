import { IArtistInput } from "interfaces/artistInput";
import styles from "./ArtistInput.module.scss";
import SearchIcon from "@components/elements/Icons/SearchIcon";

const ArtistInput = ({
  handleSearchChange,
  search,
  onKeyDown,
}: IArtistInput) => {
  return (
    <div className={styles.artistInput}>
      <input
        onChange={handleSearchChange}
        value={search}
        placeholder="Search music in Bandcamp"
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
