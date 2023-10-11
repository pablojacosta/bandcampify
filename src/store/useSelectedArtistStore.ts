/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface ISelectedArtistStore {
  artistUrl: string;
  albums: any[];
  setArtistUrl: (artistUrl: string) => void;
  setAlbums: (albums: any[]) => void;
  clearStore: () => void;
}

const initialState = {
  artistUrl: "",
  albums: [],
};

export const useSelectedArtistStore = create<ISelectedArtistStore>()((set) => ({
  ...initialState,
  setArtistUrl: (artistUrl: string) =>
    set((state) => ({
      ...state,
      artistUrl,
    })),
  setAlbums: (albums: any[]) =>
    set((state) => ({
      ...state,
      albums,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
