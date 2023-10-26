import { HTMLAttributes } from "react";
import styles from "./NextArrow.module.scss";
import RightArrow from "@components/elements/Icons/RightArrow";

const NextArrow = ({ onClick }: HTMLAttributes<HTMLDivElement>) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <RightArrow />
  </div>
);

export default NextArrow;
