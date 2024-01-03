import { CopyToClipboard } from "react-copy-to-clipboard";
import { formatAlbumUrlForShareLink } from "@utils/helpers/formatAlbumUrlForShareLink";
import ShareIcon from "@components/elements/Icons/ShareIcon";
import styles from "./ShareAlbum.module.scss";
import { IShareAlbum } from "interfaces/shareAlbum";

const ShareAlbum = ({ albumUrl }: IShareAlbum) => {
  return (
    <div className={styles.shareAlbum}>
      <CopyToClipboard text={formatAlbumUrlForShareLink(albumUrl)}>
        <span className={styles.shareIcon}>
          <ShareIcon />
        </span>
      </CopyToClipboard>{" "}
    </div>
  );
};

export default ShareAlbum;
