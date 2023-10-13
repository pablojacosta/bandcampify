import { EListedElementTypes } from "@constants/enums";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IListedElement {
  onClick: any;
  image: string;
  name: string;
  type: EListedElementTypes;
  artist?: string;
}
