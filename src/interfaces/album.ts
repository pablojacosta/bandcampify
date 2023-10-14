export interface IAlbumTrack {
  name: string;
  duration: number;
  streamUrl: string;
  position: number;
  url: string;
}

export interface IAlbumRelease {
  name: string;
  format: string;
  description: string;
  url: string;
  imageUrl: string;
}

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
}
