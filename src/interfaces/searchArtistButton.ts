import { MouseEvent } from "react";

export interface ISearchArtistButton {
  getSearchData: (event: MouseEvent<HTMLButtonElement>) => void;
}
