/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITrack } from "./track";

export interface IAlbum {
  name: string;
  url: string;
  image: string;
  id: number;
  artist: string;
  tracks: ITrack[];
  handlePlayClick: any;
  handleTrackPlayClick: any;
  handleAlbumPlusClick: any;
  handleAlbumMinusClick: any;
  showTracks: boolean;
  albumNameToShowTracks: string;
}
