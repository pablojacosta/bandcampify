import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import { formatSharedAlbumUrl } from "@utils/helpers/formatSharedAlbumUrl";
import useGetAlbum from "@hooks/useGetAlbum";
import { useNavigate } from "react-router-dom";
import { TRACKS } from "@constants/routes";
import useGetArtistData from "@hooks/useGetArtistData";
import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import Loader from "@components/shared/Loader";
import styles from "./SharedAlbum.module.scss";
import { IAlbum } from "interfaces/album";

const SharedAlbum = () => {
  const { sharedAlbumUrl } = useParams();
  const { getAlbum } = useGetAlbum();
  const { getArtistData } = useGetArtistData();
  const navigate = useNavigate();
  const { setAlbumUrl, album } = useSelectedAlbumStore();
  const { getAlbums } = useGetArtistAlbums();
  const [albumForHelmet, setAlbumForHelmet] = useState<IAlbum>();

  useEffect(() => {
    if (!sharedAlbumUrl) {
      return;
    }

    const artistName = sharedAlbumUrl.substring(
      0,
      sharedAlbumUrl?.indexOf("---")
    );
    const formattedAlbumUrl = formatSharedAlbumUrl(sharedAlbumUrl);
    const artistUrl = `https://${artistName}.bandcamp.com`;
    getArtistData(artistUrl).then(() =>
      getAlbum(formattedAlbumUrl).then(() => {
        setAlbumUrl(formattedAlbumUrl);
        getAlbums(artistUrl);
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sharedAlbumUrl]);

  useEffect(() => {
    if (!album) {
      return;
    }

    setAlbumForHelmet(album);

    if (albumForHelmet) {
      setTimeout(() => navigate(TRACKS), 100);
    }
  }, [album, navigate, albumForHelmet]);

  return (
    <div className={styles.sharedAlbum}>
      {albumForHelmet && (
        <Helmet>
          <meta
            property="og:title"
            content={`${albumForHelmet.name}, by ${albumForHelmet.artist.name}`}
          />
          <meta
            property="og:description"
            content={`${albumForHelmet.tracks.length} track album`}
          />
          <meta property="og:image" content={albumForHelmet.imageUrl} />
        </Helmet>
      )}
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
};

export default SharedAlbum;
