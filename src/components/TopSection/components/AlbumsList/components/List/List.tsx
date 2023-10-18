import { IList } from "interfaces/list";
import styles from "./List.module.scss";
// import { IAlbum } from "interfaces/album";
import { EListType, EListedElementTypes } from "@constants/enums";
import ListedElement from "@components/shared/ListedElement";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { Link } from "react-router-dom";
import { IAlbumMinInfo } from "interfaces/albumMinInfo";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import useGetAlbum from "@hooks/useGetAlbum";

const List = ({ items, type }: IList) => {
  const listedElementType =
    type === EListType.ALBUMS
      ? EListedElementTypes.ALBUM
      : EListedElementTypes.TRACK;
  const { setShowTracks, setAlbumUrl, setHideAlbums } = useSelectedAlbumStore();
  const { artistInfo } = useSelectedArtistStore();
  const { getAlbum } = useGetAlbum();

  return (
    <div className={styles.list}>
      <h2>{type}</h2>
      <ul>
        {items.map((item: IAlbumMinInfo) => {
          const handleAlbumOnClick = () => {
            getAlbum(item.url);
            setShowTracks(true);
            setAlbumUrl(item.url);
            setHideAlbums(true);
          };

          return (
            <Link to="/tracks" key={`${item.title}`}>
              <ListedElement
                key={`${item.title}`}
                onClick={() => handleAlbumOnClick()}
                image={item.coverImage}
                name={item.title}
                artist={artistInfo?.name}
                type={listedElementType}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
