import { IArtist } from "interfaces/artist";
import { create } from "zustand";

interface IFoundResultsStore {
  foundResults: IArtist[] | null;
  setFoundResults: (foundResults: IArtist[]) => void;
  clearStore: () => void;
}

const initialState = {
  foundResults: null,
};

export const useFoundResultsStore = create<IFoundResultsStore>()((set) => ({
  ...initialState,
  setFoundResults: (foundResults: IArtist[]) =>
    set((state) => ({
      ...state,
      foundResults,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
