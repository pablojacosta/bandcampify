/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITrack } from "./track";

export interface ITrackList {
  tracks: ITrack[];
  artist: string;
  albumId: string;
  albumName: string;
  albumUrl: string;
  albumImage: string;
}
