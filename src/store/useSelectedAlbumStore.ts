import { ITrack } from "interfaces/track";
import { create } from "zustand";

interface ISelectedAlbumStore {
  tracks: ITrack[] | null;
  showTracks: boolean;
  albumUrl: string;
  albumId: number | null;
  albumArtist: string;
  albumName: string;
  setTracks: (trackList: ITrack[]) => void;
  setShowTracks: (showTracks: boolean) => void;
  setAlbumUrl: (albumUrl: string) => void;
  setAlbumId: (albumId: number) => void;
  setAlbumArtist: (albumArtist: string) => void;
  setAlbumName: (albumName: string) => void;
  clearStore: () => void;
}

const initialState = {
  tracks: null,
  showTracks: false,
  albumUrl: "",
  albumId: null,
  albumArtist: "",
  albumName: "",
};

export const useSelectedAlbumStore = create<ISelectedAlbumStore>()((set) => ({
  ...initialState,
  setTracks: (tracks: ITrack[]) =>
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
  setAlbumId: (albumId: number) =>
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
  clearStore: () => set(() => ({ ...initialState })),
}));
