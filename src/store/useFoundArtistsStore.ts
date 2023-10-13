import { IArtist } from "interfaces/artist";
import { create } from "zustand";

interface IFoundArtistsStore {
  foundArtists: IArtist[] | null;
  setFoundArtists: (foundArtists: IArtist[]) => void;
  clearStore: () => void;
}

const initialState = {
  foundArtists: null,
};

export const useFoundArtistsStore = create<IFoundArtistsStore>()((set) => ({
  ...initialState,
  setFoundArtists: (foundArtists: IArtist[]) =>
    set((state) => ({
      ...state,
      foundArtists,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
