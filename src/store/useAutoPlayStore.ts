import { create } from "zustand";

interface IAutoPlayStore {
  isAutoPlay: boolean;
  isPlaying: boolean;
  playedTrackIndex: number;
  playedTrackSrc: string;
  pauseTrack: boolean;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
  setIsPlaying: (
    isPlaying: boolean,
    playedTrackIndex: number,
    playedTrackSrc: string
  ) => void;
  setPauseTrack: (pauseTrack: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  isAutoPlay: false,
  isPlaying: false,
  playedTrackIndex: 0,
  playedTrackSrc: "",
  pauseTrack: false,
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
  setPauseTrack: (pauseTrack: boolean) =>
    set((state) => ({
      ...state,
      pauseTrack,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
