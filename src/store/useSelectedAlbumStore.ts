import { IFilteredTrack } from "interfaces/filteredTrack";
import { create } from "zustand";

interface ISelectedAlbumStore {
  tracks: IFilteredTrack[] | null;
  showTracks: boolean;
  albumUrl: string;
  albumId: string;
  albumArtist: string;
  albumName: string;
  hideAlbums: boolean;
  albumImage: string;
  showPlayer: boolean;
  trackId: string;
  setTracks: (trackList: IFilteredTrack[]) => void;
  setShowTracks: (showTracks: boolean) => void;
  setAlbumUrl: (albumUrl: string) => void;
  setAlbumId: (albumId: string) => void;
  setAlbumArtist: (albumArtist: string) => void;
  setAlbumName: (albumName: string) => void;
  setHideAlbums: (hideAlbums: boolean) => void;
  setAlbumImage: (albumImage: string) => void;
  setShowPlayer: (showPlayer: boolean) => void;
  setTrackId: (trackId: string) => void;
  clearStore: () => void;
}

const initialState = {
  tracks: null,
  showTracks: false,
  albumUrl: "",
  albumId: "",
  albumArtist: "",
  albumName: "",
  hideAlbums: false,
  albumImage: "",
  showPlayer: false,
  trackId: "",
};

export const useSelectedAlbumStore = create<ISelectedAlbumStore>()((set) => ({
  ...initialState,
  setTracks: (tracks: IFilteredTrack[]) =>
    set((state) => ({
      ...state,
      tracks,
    })),
  setShowTracks: (showTracks: boolean) =>
    set((state) => ({
      ...state,
      showTracks,
    })),
  setAlbumUrl: (albumUrl: string) =>
    set((state) => ({
      ...state,
      albumUrl,
    })),
  setAlbumId: (albumId: string) =>
    set((state) => ({
      ...state,
      albumId,
    })),
  setAlbumArtist: (albumArtist: string) =>
    set((state) => ({
      ...state,
      albumArtist,
    })),
  setAlbumName: (albumName: string) =>
    set((state) => ({
      ...state,
      albumName,
    })),
  setHideAlbums: (hideAlbums: boolean) =>
    set((state) => ({
      ...state,
      hideAlbums,
    })),
  setAlbumImage: (albumImage: string) =>
    set((state) => ({
      ...state,
      albumImage,
    })),
  setShowPlayer: (showPlayer: boolean) =>
    set((state) => ({
      ...state,
      showPlayer,
    })),
  setTrackId: (trackId: string) =>
    set((state) => ({
      ...state,
      trackId,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
