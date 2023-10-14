/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITopSection {
  showTrackList: boolean;
  handleArtistFilterChange: (e: any) => void;
  filteredArtist: string;
  onKeyDown: (e: any) => void;
  showFoundArtists: boolean | null;
  showAlbumsList: boolean;
}
