import { ISearchArtistButton } from "../../../../interfaces/searchArtistButton";

const SearchArtistButton = ({ getArtistData }: ISearchArtistButton) => {
  return <button onClick={getArtistData}>Search!</button>;
};

export default SearchArtistButton;
