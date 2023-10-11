import { IArtistInput } from "../../interfaces/artistInput";

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
    />
  );
};

export default ArtistInput;
