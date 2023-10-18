import { IAlbum } from "interfaces/album";
import { IArtistInfo } from "interfaces/artistInfo";
import { create } from "zustand";

interface ISelectedArtistStore {
  artistUrl: string;
  albums: IAlbum[];
  hideArtists: boolean;
  artistImage: string;
  artistInfo: IArtistInfo | null;
  setArtistUrl: (artistUrl: string) => void;
  setAlbums: (albums: IAlbum[]) => void;
  setHideArtists: (hideArtists: boolean) => void;
  setArtistImage: (artistImage: string) => void;
  setArtistInfo: (artistInfo: IArtistInfo) => void;
  clearStore: () => void;
}

const initialState = {
  artistUrl: "",
  albums: [],
  hideArtists: false,
  artistImage: "",
  artistInfo: null,
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
  setArtistImage: (artistImage: string) =>
    set((state) => ({
      ...state,
      artistImage,
    })),
  setArtistInfo: (artistInfo: IArtistInfo) =>
    set((state) => ({
      ...state,
      artistInfo,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
