export interface ITrackInfo {
  type: string;
  name: string;
  url: string;
  imageUrl: string;
  releaseDate: string;
  streamUrl: string;
  artist: { name: string; url: string };
  publisher: {
    name: string;
    url: string;
    description: string;
    imageUrl: string;
  };
  label: { name: string; url: string };
}
