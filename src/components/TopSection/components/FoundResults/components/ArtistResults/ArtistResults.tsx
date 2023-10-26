import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes, ESearchResultTypes } from "@constants/enums";
import { ALBUMS } from "@constants/routes";
import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import { IArtistResults } from "interfaces/artistResults";
import { Link } from "react-router-dom";

const ArtistResults = ({ foundResults }: IArtistResults) => {
  const { getAlbums } = useGetArtistAlbums();

  return (
    <>
      {foundResults
        .filter((result) => result.type === ESearchResultTypes.ARTIST)
        .map((artist, index) => (
          <Link to={ALBUMS} key={`${artist.url}_${index}`}>
            <ListedElement
              key={`${artist.name}_${artist.genre}`}
              onClick={() => getAlbums(artist.url, artist.imageUrl)}
              image={artist.imageUrl}
              name={artist.name}
              type={EListedElementTypes.ARTIST}
            />
          </Link>
        ))}
    </>
  );
};

export default ArtistResults;
