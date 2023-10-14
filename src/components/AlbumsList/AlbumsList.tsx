/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAlbum } from "interfaces/album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";
// import { getSanitizedAlbums } from "@utils/helpers/getSanitizedAlbums";
import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes } from "@constants/enums";
import useGetOneAlbumData from "@hooks/useGetOneAlbumData";
// import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const AlbumsList = ({ albums }: IAlbumsList) => {
  const { getOneAlbum } = useGetOneAlbumData();
  // const {
  //   setTracks,
  //   setShowTracks,
  //   setAlbumArtist,
  //   // setAlbumId,
  //   setAlbumName,
  //   setAlbumUrl,
  //   setHideAlbums,
  //   setAlbumImage,
  // } = useSelectedAlbumStore();
  // const hasAlbums = albums.length > 0;

  console.log("albums", albums);

  return (
    <div className={styles.albumsList}>
      <h2>Albums</h2>
      <ul>
        {albums.map((album: IAlbum) => {
          // const handleAlbumOnClick = () => {
          //   setTracks(album.tracks);
          //   setShowTracks(true);
          //   setAlbumArtist(album.artist.name);
          //   // setAlbumId(album.id.toString());
          //   setAlbumName(album.name);
          //   setAlbumUrl(album.url);
          //   setHideAlbums(true);
          //   setAlbumImage(album.imageUrl);
          // };

          return (
            <ListedElement
              key={`${album.name}`}
              onClick={() => getOneAlbum(album.url)}
              image={album.imageUrl}
              name={album.name}
              type={EListedElementTypes.ALBUM}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AlbumsList;
