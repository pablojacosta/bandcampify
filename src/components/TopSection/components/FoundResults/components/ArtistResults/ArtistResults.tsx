import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes } from "@constants/enums";
import { ALBUMS } from "@constants/routes";
import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import { IArtistResults } from "interfaces/artistResults";
import { Link } from "react-router-dom";

const ArtistResults = ({ artists }: IArtistResults) => {
  const { getAlbums } = useGetArtistAlbums();

  return (
    <>
      {artists.map((artist, index) => (
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
