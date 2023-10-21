import { create } from "zustand";

interface ISearchStore {
  search: string;
  setSearch: (search: string) => void;
  clearStore: () => void;
}

const initialState = {
  search: "",
};

export const useSearchStore = create<ISearchStore>()((set) => ({
  ...initialState,
  setSearch: (search: string) =>
    set((state) => ({
      ...state,
      search,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
