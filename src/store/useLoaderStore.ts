import { create } from "zustand";

interface ILoaderStore {
  showLoader: boolean;
  setShowLoader: (showLoader: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  showLoader: false,
};

export const useLoaderStore = create<ILoaderStore>()((set) => ({
  ...initialState,
  setShowLoader: (showLoader: boolean) =>
    set((state) => ({
      ...state,
      showLoader,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
