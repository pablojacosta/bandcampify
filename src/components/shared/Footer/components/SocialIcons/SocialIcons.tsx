import { githubUrl, linkedinUrl } from "constants/socials";
import githubIcon from "@images/github-icon.svg";
import linkedinIcon from "@images/linkedin-icon.svg";
import styles from "./SocialIcons.module.scss";

const LINKEDIN_ICON_SIZE = "50";
const GITHUB_ICON_SIZE = "42";

interface ISocialIcons {
  className?: string;
}

const SocialIcons = ({ className }: ISocialIcons) => {
  return (
    <div className={`${styles.socialIcons} ${className}`}>
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
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <picture>
          <img
            src={linkedinIcon}
            alt="Linkedin Icon"
            className={styles.linkedinIcon}
            width={LINKEDIN_ICON_SIZE}
            height={LINKEDIN_ICON_SIZE}
          />
        </picture>
      </a>
    </div>
  );
};

export default SocialIcons;
