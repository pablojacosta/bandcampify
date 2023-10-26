import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import useGetAlbum from "@hooks/useGetAlbum";
import useGetTrack from "@hooks/useGetTrack";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { Link } from "react-router-dom";
import { TRACKS } from "@constants/routes";
import ListedElement from "@components/shared/ListedElement";
import { EListType, EListedElementTypes } from "@constants/enums";
import { IAlbumMinInfo } from "interfaces/albumMinInfo";
import { IListItems } from "interfaces/listItems";

const ListItems = ({ items, type }: IListItems) => {
  const listedElementType =
    type === EListType.ALBUMS
      ? EListedElementTypes.ALBUM
      : EListedElementTypes.TRACK;
  const { setShowTracks, setAlbumUrl, setHideAlbums } = useSelectedAlbumStore();
  const { artistInfo } = useSelectedArtistStore();
  const { getAlbum } = useGetAlbum();
  const { getTrack } = useGetTrack();
  const { setIsTrack } = useSelectedTrackStore();

  return (
    <>
      {items.map((item: IAlbumMinInfo) => {
        const handleAlbumOnClick = () => {
          getAlbum(item.url);
          setShowTracks(true);
          setAlbumUrl(item.url);
          setHideAlbums(true);
        };

        const handleSongOnClick = () => {
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
              image={item.coverImage}
              name={item.title}
              artist={artistInfo?.name}
              type={listedElementType}
            />
          </Link>
        );
      })}
    </>
  );
};

export default ListItems;
