import { ChangeEvent, KeyboardEvent } from "react";

export interface IArtistInput {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  search: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}
