import { HTMLAttributes } from "react";
import styles from "./PrevArrow.module.scss";
import LeftArrow from "@components/elements/Icons/LeftArrow";

const PrevArrow = ({ onClick }: HTMLAttributes<HTMLDivElement>) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <LeftArrow />
  </div>
);
export default PrevArrow;
