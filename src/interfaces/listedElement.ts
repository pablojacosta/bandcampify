import { EListedElementTypes } from "@constants/enums";
import { MouseEvent } from "react";

export interface IListedElement {
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
  image: string;
  name: string;
  type: EListedElementTypes;
  artist?: string;
  album?: string;
  isFoundResults?: boolean;
  isList?: boolean;
  noSlider?: boolean;
  handleAlbumOnClick: () => void;
  handleSongOnClick: () => void;
}
