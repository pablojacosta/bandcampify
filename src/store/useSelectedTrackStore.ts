import { ITrackInfo } from "interfaces/trackInfo";
import { create } from "zustand";

interface ISelectedTrackStore {
  track: ITrackInfo | null;
  isTrack: boolean;
  setTrack: (track: ITrackInfo | null) => void;
  setIsTrack: (isTrack: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  track: null,
  isTrack: false,
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
  clearStore: () => set(() => ({ ...initialState })),
}));
