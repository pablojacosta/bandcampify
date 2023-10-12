import { IFilteredTrack } from "./filteredTrack";

export interface IReturnedData {
  artist: string;
  id: number;
  image: string;
  name: string;
  tracks: IFilteredTrack[] | [];
  url: string;
}
