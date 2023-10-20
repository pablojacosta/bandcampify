import { LIKES_STORE } from "@constants/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ILoaderStore {
  hasAlreadyLiked: boolean;
  setHasAlreadyLiked: (hasAlreadyLiked: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  hasAlreadyLiked: false,
};

export const useLikesStore = create<ILoaderStore>()(
  persist(
    (set) => ({
      ...initialState,
      setHasAlreadyLiked: (hasAlreadyLiked: boolean) =>
        set((state) => ({
          ...state,
          hasAlreadyLiked,
        })),
      clearStore: () => set(() => ({ ...initialState })),
    }),
    {
      name: LIKES_STORE,
    }
  )
);
