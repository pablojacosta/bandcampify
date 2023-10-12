/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFilteredTrack } from "./filteredTrack";

export interface IAlbum {
  name: string;
  url: string;
  image: string;
  id: number;
  artist: string;
  tracks: IFilteredTrack[] | [];
}
