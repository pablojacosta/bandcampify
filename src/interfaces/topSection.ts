import { ChangeEvent, KeyboardEvent } from "react";

export interface ITopSection {
  showTrackList: boolean;
  handleArtistFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredArtist: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  showFoundArtists: boolean | null;
  showAlbumsList: boolean;
}
