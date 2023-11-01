import { create } from "zustand";

interface IAutoPlayStore {
  isAutoPlay: boolean;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  isAutoPlay: false,
};

export const useAutoPlayStore = create<IAutoPlayStore>()((set) => ({
  ...initialState,
  setIsAutoPlay: (isAutoPlay: boolean) =>
    set((state) => ({
      ...state,
      isAutoPlay,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
