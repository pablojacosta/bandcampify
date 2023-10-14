import { IAlbumTrack } from "./albumTrack";

export interface ITrackList {
  tracks: IAlbumTrack[];
  artist: string;
  albumId: string;
  albumName: string;
  albumUrl: string;
  albumImage: string;
}
