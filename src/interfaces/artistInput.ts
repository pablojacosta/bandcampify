import { ChangeEvent, KeyboardEvent } from "react";

export interface IArtistInput {
  handleArtistFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredArtist: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}
