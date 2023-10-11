import { HTMLAttributes } from "react";
import styles from "./Separator.module.scss";

interface ISeparator extends HTMLAttributes<HTMLDivElement> {
  color: "white";
}

const colorMap = {
  white: styles.white,
};

const Separator = ({ color, className, ...props }: ISeparator) => (
  <div
    className={`${styles.separator} ${colorMap[color]} ${className}`}
    {...props}
  />
);

export default Separator;
