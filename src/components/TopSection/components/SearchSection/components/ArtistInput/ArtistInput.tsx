import { IArtistInput } from "interfaces/artistInput";
import styles from "./ArtistInput.module.scss";
import SearchIcon from "@components/elements/Icons/SearchIcon";
import useMediaQuery from "@hooks/useMediaQuery";

const ArtistInput = ({
  handleSearchChange,
  search,
  onKeyDown,
}: IArtistInput) => {
  const isMobileBreakpoint = useMediaQuery(563);
  const isMobileSmallBreakpoint = useMediaQuery(423);
  const placeholder =
    isMobileBreakpoint && !isMobileSmallBreakpoint
      ? "Search for music in Bandcamp"
      : isMobileBreakpoint && isMobileSmallBreakpoint
      ? "Search in Bandcamp"
      : "Search for artists/albums/songs in Bandcamp";

  return (
    <div className={styles.artistInput}>
      <input
        onChange={handleSearchChange}
        value={search}
        placeholder={placeholder}
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
