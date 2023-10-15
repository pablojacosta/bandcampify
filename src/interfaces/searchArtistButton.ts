import { MouseEvent } from "react";

export interface ISearchArtistButton {
  getArtistData: (event: MouseEvent<HTMLButtonElement>) => void;
}
