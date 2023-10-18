import { IAlbumMinInfo } from "./albumMinInfo";
import { IBandLinks } from "./bandLinks";
import { IShows } from "./shows";

export interface IArtistInfo {
  albums: IAlbumMinInfo[];
  bandLinks: IBandLinks[];
  coverImage: string;
  description: string;
  location: string;
  name: string;
  shows: IShows[];
}
