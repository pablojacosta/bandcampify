import { EListType } from "@constants/enums";
import { IFoundAlbum } from "./foundAlbum";
import { IFoundArtist } from "./foundArtist";
import { IFoundTrack } from "./foundTrack";

export interface IResultList {
  items: IFoundAlbum[] | IFoundArtist[] | IFoundTrack[];
  type: EListType;
}
