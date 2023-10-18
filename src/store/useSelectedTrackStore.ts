import { ITrackInfo } from "interfaces/trackInfo";
import { create } from "zustand";

interface ISelectedTrackStore {
  track: ITrackInfo | null;
  setTrack: (track: ITrackInfo) => void;
  clearStore: () => void;
}

const initialState = {
  track: null,
};

export const useSelectedTrackStore = create<ISelectedTrackStore>()((set) => ({
  ...initialState,
  setTrack: (track: ITrackInfo) =>
    set((state) => ({
      ...state,
      track,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
