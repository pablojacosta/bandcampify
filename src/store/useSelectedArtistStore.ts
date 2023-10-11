import { create } from "zustand";

interface ISelectedArtistStore {
  artistUrl: string;
  albumsUrls: string[];
  setArtistUrl: (artistUrl: string) => void;
  setAlbumsUrls: (albumsUrls: string[]) => void;
  clearStore: () => void;
}

const initialState = {
  artistUrl: "",
  albumsUrls: [],
};

export const useSelectedArtistStore = create<ISelectedArtistStore>()((set) => ({
  ...initialState,
  setArtistUrl: (artistUrl: string) =>
    set((state) => ({
      ...state,
      artistUrl,
    })),
  setAlbumsUrls: (albumsUrls: string[]) =>
    set((state) => ({
      ...state,
      albumsUrls,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
