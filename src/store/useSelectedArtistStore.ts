/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITrack } from "interfaces/track";
import { create } from "zustand";

interface ISelectedArtistStore {
  artistUrl: string;
  albums: any[];
  hideArtists: boolean;
  tracks: ITrack[] | null;
  showTracks: boolean;
  setArtistUrl: (artistUrl: string) => void;
  setAlbums: (albums: any[]) => void;
  setHideArtists: (hideArtists: boolean) => void;
  setTracks: (trackList: ITrack[]) => void;
  setShowTracks: (showTracks: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  artistUrl: "",
  albums: [],
  hideArtists: false,
  tracks: null,
  showTracks: false,
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
  setHideArtists: (hideArtists: boolean) =>
    set((state) => ({
      ...state,
      hideArtists,
    })),
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
  clearStore: () => set(() => ({ ...initialState })),
}));
