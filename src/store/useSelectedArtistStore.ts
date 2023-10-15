import { IAlbum } from "interfaces/album";
import { create } from "zustand";

interface ISelectedArtistStore {
  artistUrl: string;
  albums: IAlbum[];
  hideArtists: boolean;
  setArtistUrl: (artistUrl: string) => void;
  setAlbums: (albums: IAlbum[]) => void;
  setHideArtists: (hideArtists: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  artistUrl: "",
  albums: [],
  hideArtists: false,
};

export const useSelectedArtistStore = create<ISelectedArtistStore>()((set) => ({
  ...initialState,
  setArtistUrl: (artistUrl: string) =>
    set((state) => ({
      ...state,
      artistUrl,
    })),
  setAlbums: (albums: IAlbum[]) =>
    set((state) => ({
      ...state,
      albums,
    })),
  setHideArtists: (hideArtists: boolean) =>
    set((state) => ({
      ...state,
      hideArtists,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
