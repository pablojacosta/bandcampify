import { create } from "zustand";

interface IAutoPlayStore {
  isAutoPlay: boolean;
  isPlaying: boolean;
  playedTrackIndex: number;
  playedTrackSrc: string;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
  setIsPlaying: (
    isPlaying: boolean,
    playedTrackIndex: number,
    playedTrackSrc: string
  ) => void;
  clearStore: () => void;
}

const initialState = {
  isAutoPlay: false,
  isPlaying: false,
  playedTrackIndex: 0,
  playedTrackSrc: "",
};

export const useAutoPlayStore = create<IAutoPlayStore>()((set) => ({
  ...initialState,
  setIsAutoPlay: (isAutoPlay: boolean) =>
    set((state) => ({
      ...state,
      isAutoPlay,
    })),
  setIsPlaying: (
    isPlaying: boolean,
    playedTrackIndex: number,
    playedTrackSrc: string
  ) =>
    set((state) => ({
      ...state,
      isPlaying,
      playedTrackIndex,
      playedTrackSrc,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
