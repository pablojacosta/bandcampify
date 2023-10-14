import { EListType } from "@constants/enums";
import { IAlbum } from "./album";

export interface IList {
  items: IAlbum[];
  type: EListType;
}
