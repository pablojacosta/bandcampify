import { EListType } from "@constants/enums";

export interface IResultList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any;
  type: EListType;
}
