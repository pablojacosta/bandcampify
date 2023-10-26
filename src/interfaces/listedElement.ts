import { EListedElementTypes } from "@constants/enums";
import { MouseEvent } from "react";

export interface IListedElement {
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
  image: string;
  name: string;
  type: EListedElementTypes;
  artist?: string;
  album?: string;
}
