import { IAlbum } from "interfaces/album";
import { ITrack } from "interfaces/track";
import { create } from "zustand";

interface ITrackPlayerStore {
  album: IAlbum | null;
  track: ITrack | null;
  setAlbum: (album: IAlbum) => void;
  setTrack: (track: ITrack) => void;
  clearStore: () => void;
}

const initialState = {
  album: null,
  track: null,
};

export const useTrackPlayerStore = create<ITrackPlayerStore>()((set) => ({
  ...initialState,
  setAlbum: (album: IAlbum) =>
    set((state) => ({
      ...state,
      album,
    })),
  setTrack: (track: ITrack) =>
    set((state) => ({
      ...state,
      track,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
