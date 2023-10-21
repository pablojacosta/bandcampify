import { IResultList } from "interfaces/resultList";
import styles from "./ResultList.module.scss";
import { EListType, EListedElementTypes } from "@constants/enums";
import ListedElement from "@components/shared/ListedElement";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { Link } from "react-router-dom";
// import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import useGetAlbum from "@hooks/useGetAlbum";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import useGetTrack from "@hooks/useGetTrack";
import { TFoundItem } from "types/foundItem";

const ResultList = ({ items, type }: IResultList) => {
  const listedElementType =
    type === EListType.ALBUMS
      ? EListedElementTypes.ALBUM
      : EListedElementTypes.TRACK;
  const { setShowTracks, setAlbumUrl, setHideAlbums } = useSelectedAlbumStore();
  // const { artistInfo } = useSelectedArtistStore();
  const { getAlbum } = useGetAlbum();
  const { getTrack } = useGetTrack();
  const { setIsTrack } = useSelectedTrackStore();

  return (
    <div className={styles.list}>
      <h2>{type}</h2>
      <ul>
        {items.map((item: TFoundItem) => {
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
            <Link to="/tracks" key={`${item.url}`}>
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
      </ul>
    </div>
  );
};

export default ResultList;
