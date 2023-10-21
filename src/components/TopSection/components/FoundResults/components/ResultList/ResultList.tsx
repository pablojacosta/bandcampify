import { IResultList } from "interfaces/resultList";
import styles from "./ResultList.module.scss";
import { EListType, EListedElementTypes } from "@constants/enums";
import ListedElement from "@components/shared/ListedElement";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { Link } from "react-router-dom";
import useGetAlbum from "@hooks/useGetAlbum";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import useGetTrack from "@hooks/useGetTrack";
import { TFoundItem } from "types/foundItem";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";

const ResultList = ({ items, type }: IResultList) => {
  const listedElementType =
    type === EListType.ALBUMS
      ? EListedElementTypes.ALBUM
      : EListedElementTypes.TRACK;
  const { setShowTracks, setAlbumUrl, setHideAlbums } = useSelectedAlbumStore();
  const { getAlbum } = useGetAlbum();
  const { getTrack } = useGetTrack();
  const { setIsTrack } = useSelectedTrackStore();
  const { setFetchArtist } = useSelectedArtistStore();

  return (
    <div className={styles.list}>
      <h2>{type}</h2>
      <ul>
        {items.map((item: TFoundItem) => {
          const handleAlbumOnClick = () => {
            setFetchArtist(true);
            getAlbum(item.url);
            setShowTracks(true);
            setAlbumUrl(item.url);
            setHideAlbums(true);
          };

          const handleSongOnClick = () => {
            setFetchArtist(true);
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
