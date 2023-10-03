/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITrack } from "./track";

export interface ITrackList {
  tracks: ITrack[];
  handleTrackPlayClick: any;
  artist: string;
  albumId: number;
  albumName: string;
  albumUrl: string;
}
