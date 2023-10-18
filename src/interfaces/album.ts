import { IAlbumProperty } from "./albumProperty";
import { IAlbumRelease } from "./albumRelease";
import { IAlbumTrack } from "./albumTrack";
import { IRawAlbumRelease } from "./rawAlbumRelease";

export interface IAlbum {
  type: string;
  name: string;
  url: string;
  numTracks: number;
  keywords: string[];
  description: string;
  releaseDate: string;
  artist: { name: string; url: string };
  releases: IAlbumRelease[];
  tracks: IAlbumTrack[];
  imageUrl: string;
  publisher: {
    name: string;
    url: string;
    description: string;
    imageUrl: string;
  };
  raw: {
    basic: {
      albumRelease: IRawAlbumRelease[];
      additionalProperty: IAlbumProperty[];
    };
  };
  albumId?: number;
}
