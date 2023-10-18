import { EListType } from "@constants/enums";
import { IAlbumMinInfo } from "./albumMinInfo";

export interface IList {
  items: IAlbumMinInfo[];
  type: EListType;
}
