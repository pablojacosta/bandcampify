/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITrack } from "./track";

export interface IAlbum {
  name: string;
  url: string;
  image: string;
  id: string;
  artist: string;
  tracks: ITrack[];
}
