import { ChangeEvent, KeyboardEvent } from "react";

export interface ITopSection {
  showTrackList: boolean;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  search: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  showFoundResults: boolean | null;
  showAlbumsList: boolean;
}
