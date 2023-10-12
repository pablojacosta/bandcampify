import { EListedElementTypes } from "@constants/enums";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IListedElement {
  key: string;
  onClick: any;
  image: string;
  name: string;
  type: EListedElementTypes;
}
