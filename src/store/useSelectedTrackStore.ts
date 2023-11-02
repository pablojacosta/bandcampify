import { ITrackInfo } from "interfaces/trackInfo";
import { create } from "zustand";

interface ISelectedTrackStore {
  track: ITrackInfo | null;
  isTrack: boolean;
  streamUrl: string;
  setTrack: (track: ITrackInfo | null) => void;
  setIsTrack: (isTrack: boolean) => void;
  setStreamUrl: (streamUrl: string) => void;
  clearStore: () => void;
}

const initialState = {
  track: null,
  isTrack: false,
  streamUrl: "",
};

export const useSelectedTrackStore = create<ISelectedTrackStore>()((set) => ({
  ...initialState,
  setTrack: (track: ITrackInfo | null) =>
    set((state) => ({
      ...state,
      track,
    })),
  setIsTrack: (isTrack: boolean) =>
    set((state) => ({
      ...state,
      isTrack,
    })),
  setStreamUrl: (streamUrl: string) =>
    set((state) => ({
      ...state,
      streamUrl,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
