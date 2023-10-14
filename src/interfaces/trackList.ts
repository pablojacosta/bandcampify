/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAlbumTrack } from "./album";
// import { IFilteredTrack } from "./filteredTrack";

export interface ITrackList {
  tracks: IAlbumTrack[];
  artist: string;
  albumId: string;
  albumName: string;
  albumUrl: string;
  albumImage: string;
}
