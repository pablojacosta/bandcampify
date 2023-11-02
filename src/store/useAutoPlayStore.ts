import { create } from "zustand";

interface IAutoPlayStore {
  isAutoPlay: boolean;
  isPlaying: boolean;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  isAutoPlay: false,
  isPlaying: false,
};

export const useAutoPlayStore = create<IAutoPlayStore>()((set) => ({
  ...initialState,
  setIsAutoPlay: (isAutoPlay: boolean) =>
    set((state) => ({
      ...state,
      isAutoPlay,
    })),
  setIsPlaying: (isPlaying: boolean) =>
    set((state) => ({
      ...state,
      isPlaying,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
