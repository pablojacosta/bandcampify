import { create } from "zustand";

interface ISongsStore {
  hasSongs: boolean;
  showPlayer: boolean;
  songId: number;
  setHasSongs: (hasSongs: boolean) => void;
  setShowPlayer: (showPlayer: boolean) => void;
  setSongId: (songId: number) => void;
  clearStore: () => void;
}

const initialState = {
  hasSongs: false,
  showPlayer: false,
  songId: 0,
};

export const useSongsStore = create<ISongsStore>()((set) => ({
  ...initialState,
  setHasSongs: (hasSongs: boolean) =>
    set((state) => ({
      ...state,
      hasSongs,
    })),
  setShowPlayer: (showPlayer: boolean) =>
    set((state) => ({
      ...state,
      showPlayer,
    })),
  setSongId: (songId: number) =>
    set((state) => ({
      ...state,
      songId,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
