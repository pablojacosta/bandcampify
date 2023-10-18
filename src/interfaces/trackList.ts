import { IAlbumTrack } from "./albumTrack";

export interface ITrackList {
  tracks: IAlbumTrack[];
  artist: string;
  albumId: number;
  albumName: string;
  albumUrl: string;
  albumImage: string;
}
