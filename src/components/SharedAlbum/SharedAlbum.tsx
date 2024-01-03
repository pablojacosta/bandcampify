import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { useEffect } from "react";
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

const SharedAlbum = () => {
  const { sharedAlbumUrl } = useParams();
  const { getAlbum } = useGetAlbum();
  const { getArtistData } = useGetArtistData();
  const navigate = useNavigate();
  const { setAlbumUrl, album } = useSelectedAlbumStore();
  const { getAlbums } = useGetArtistAlbums();

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
      getAlbum(formattedAlbumUrl)
        .then(() => navigate(TRACKS))
        .finally(() => {
          setAlbumUrl(formattedAlbumUrl);
          getAlbums(artistUrl);
        })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sharedAlbumUrl]);

  return (
    <div className={styles.sharedAlbum}>
      <Helmet>
        <title>Bandcampify</title>
        <meta name="description" content={album?.artist.name} />
        <meta property="og:title" content={album?.name} />
        <meta property="og:description" content={album?.artist.name} />
        <meta property="og:image" content={album?.imageUrl} />
      </Helmet>
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
};

export default SharedAlbum;
