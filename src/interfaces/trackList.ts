/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFilteredTrack } from "./filteredTrack";

export interface ITrackList {
  tracks: IFilteredTrack[];
  artist: string;
  albumId: string;
  albumName: string;
  albumUrl: string;
  albumImage: string;
}
