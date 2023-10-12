import { create } from "zustand";

interface ISongsStore {
  hasSongs: boolean;
  setHasSongs: (hasSongs: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  hasSongs: false,
};

export const useSongsStore = create<ISongsStore>()((set) => ({
  ...initialState,
  setHasSongs: (hasSongs: boolean) =>
    set((state) => ({
      ...state,
      hasSongs,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
