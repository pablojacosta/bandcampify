import { facebookUrl, githubUrl } from "constants/socials";
import githubIcon from "@images/github-icon.svg";
import facebookIcon from "@images/facebook-icon.svg";
import styles from "./SocialIcons.module.scss";
import HeartIcon from "@components/elements/Icons/HeartIcon";
import useGetLikes from "@hooks/useGetLikes";
import useSetLikes from "@hooks/useSetLikes";
import { useLikesStore } from "@store/useLikesStore";
import CoffeButton from "../CoffeButton";

const FACEBOOK_ICON_SIZE = "52";
const GITHUB_ICON_SIZE = "42";

interface ISocialIcons {
  className?: string;
}

const SocialIcons = ({ className }: ISocialIcons) => {
  const { likes } = useGetLikes();
  const { addLike } = useSetLikes();
  const { hasAlreadyLiked } = useLikesStore();

  return (
    <div className={`${styles.socialIcons} ${className}`}>
      <CoffeButton />
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <picture>
          <img
            src={githubIcon}
            alt="Github Icon"
            className={styles.githubIcon}
            width={GITHUB_ICON_SIZE}
            height={GITHUB_ICON_SIZE}
          />
        </picture>
      </a>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <picture>
          <img
            src={facebookIcon}
            alt="Facebook Icon"
            className={styles.facebookIcon}
            width={FACEBOOK_ICON_SIZE}
            height={FACEBOOK_ICON_SIZE}
          />
        </picture>
      </a>
      <div
        className={`${styles.likes} ${
          hasAlreadyLiked ? styles.alreadyLiked : ""
        }`}
      >
        <button onClick={addLike}>
          <HeartIcon />
        </button>
        <span>{likes}</span>
      </div>
    </div>
  );
};

export default SocialIcons;
