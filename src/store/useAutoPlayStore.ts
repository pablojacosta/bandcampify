import { create } from "zustand";

interface IAutoPlayStore {
  isAutoPlay: boolean;
  isPlaying: boolean;
  playedTrackIndex: number;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
  setIsPlaying: (isPlaying: boolean, playedTrackIndex: number) => void;
  clearStore: () => void;
}

const initialState = {
  isAutoPlay: false,
  isPlaying: false,
  playedTrackIndex: 0,
};

export const useAutoPlayStore = create<IAutoPlayStore>()((set) => ({
  ...initialState,
  setIsAutoPlay: (isAutoPlay: boolean) =>
    set((state) => ({
      ...state,
      isAutoPlay,
    })),
  setIsPlaying: (isPlaying: boolean, playedTrackIndex: number) =>
    set((state) => ({
      ...state,
      isPlaying,
      playedTrackIndex,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
