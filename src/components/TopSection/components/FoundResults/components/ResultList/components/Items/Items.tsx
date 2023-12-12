import { IItems } from "interfaces/items";
import { TFoundItem } from "types/foundItem";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import useGetAlbum from "@hooks/useGetAlbum";
import useGetTrack from "@hooks/useGetTrack";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { Link } from "react-router-dom";
import { TRACKS } from "@constants/routes";
import ListedElement from "@components/shared/ListedElement";
import { EListType, EListedElementTypes } from "@constants/enums";

const Items = ({ items, type }: IItems) => {
  const listedElementType =
    type === EListType.ALBUMS
      ? EListedElementTypes.ALBUM
      : EListedElementTypes.TRACK;
  const { setShowTracks, setAlbumUrl, setHideAlbums, setIsAlbum } =
    useSelectedAlbumStore();
  const { getAlbum } = useGetAlbum();
  const { getTrack } = useGetTrack();
  const { setIsTrack } = useSelectedTrackStore();
  const { setFetchArtist } = useSelectedArtistStore();

  return (
    <>
      {items.map((item: TFoundItem) => {
        const handleAlbumOnClick = () => {
          setFetchArtist(true);
          getAlbum(item.url);
          setShowTracks(true);
          setAlbumUrl(item.url);
          setHideAlbums(true);
          setIsAlbum(true);
        };

        const handleSongOnClick = () => {
          setFetchArtist(true);
          getTrack(item.url);
          setShowTracks(true);
          setHideAlbums(true);
          setIsTrack(true);
        };

        return (
          <Link to={TRACKS} key={`${item.url}`}>
            <ListedElement
              key={`${item.url}`}
              onClick={
                listedElementType === EListedElementTypes.ALBUM
                  ? () => handleAlbumOnClick()
                  : () => handleSongOnClick()
              }
              image={item.imageUrl}
              name={item.name}
              artist={item.artist}
              type={listedElementType}
            />
          </Link>
        );
      })}
    </>
  );
};

export default Items;
