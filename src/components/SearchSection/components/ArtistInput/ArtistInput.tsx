import { IArtistInput } from "interfaces/artistInput";
import styles from "./ArtistInput.module.scss";

const ArtistInput = ({
  handleArtistFilterChange,
  filteredArtist,
  onKeyDown,
}: IArtistInput) => {
  return (
    <input
      onChange={handleArtistFilterChange}
      value={filteredArtist}
      placeholder="Search Artist/Band"
      onKeyDown={onKeyDown}
      className={styles.artistInput}
    />
  );
};

export default ArtistInput;
