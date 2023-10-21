import { IArtist } from "interfaces/artist";
import { create } from "zustand";

interface IFoundResultsStore {
  foundArtists: IArtist[] | null;
  setFoundResults: (foundArtists: IArtist[]) => void;
  clearStore: () => void;
}

const initialState = {
  foundArtists: null,
};

export const useFoundResultsStore = create<IFoundResultsStore>()((set) => ({
  ...initialState,
  setFoundResults: (foundArtists: IArtist[]) =>
    set((state) => ({
      ...state,
      foundArtists,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
