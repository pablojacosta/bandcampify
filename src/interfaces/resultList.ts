import { EListType } from "@constants/enums";
// import { IFoundAlbum } from "./foundAlbum";
// import { IFoundTrack } from "./foundTrack";

export interface IResultList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any;
  type: EListType;
}
