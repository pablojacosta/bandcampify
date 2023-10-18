import { emptyAlbum } from "@utils/mocks/emptyAlbum";
import { IAlbum } from "interfaces/album";
import { IAlbumTrack } from "interfaces/albumTrack";
import { create } from "zustand";

interface ISelectedAlbumStore {
  tracks: IAlbumTrack[] | null;
  showTracks: boolean;
  albumUrl: string;
  albumName: string;
  hideAlbums: boolean;
  showPlayer: boolean;
  trackId: string;
  hasAlbums: boolean;
  releaseDate: string;
  album: IAlbum;
  showTrackList: boolean;
  setTracks: (trackList: IAlbumTrack[]) => void;
  setShowTracks: (showTracks: boolean) => void;
  setAlbumUrl: (albumUrl: string) => void;
  setAlbumName: (albumName: string) => void;
  setHideAlbums: (hideAlbums: boolean) => void;
  setShowPlayer: (showPlayer: boolean) => void;
  setTrackId: (trackId: string) => void;
  setHasAlbums: (hasAlbums: boolean) => void;
  setReleaseDate: (releaseDate: string) => void;
  setShowTrackList: (showTrackList: boolean) => void;
  setAlbum: (album: IAlbum) => void;
  clearStore: () => void;
}

const initialState = {
  tracks: null,
  showTracks: false,
  albumUrl: "",
  albumName: "",
  hideAlbums: false,
  showPlayer: false,
  trackId: "",
  hasAlbums: false,
  releaseDate: "",
  showTrackList: false,
  album: emptyAlbum,
};

export const useSelectedAlbumStore = create<ISelectedAlbumStore>()((set) => ({
  ...initialState,
  setTracks: (tracks: IAlbumTrack[]) =>
    set((state) => ({
      ...state,
      tracks,
    })),
  setShowTracks: (showTracks: boolean) =>
    set((state) => ({
      ...state,
      showTracks,
    })),
  setAlbumUrl: (albumUrl: string) =>
    set((state) => ({
      ...state,
      albumUrl,
    })),
  setAlbumName: (albumName: string) =>
    set((state) => ({
      ...state,
      albumName,
    })),
  setHideAlbums: (hideAlbums: boolean) =>
    set((state) => ({
      ...state,
      hideAlbums,
    })),
  setShowPlayer: (showPlayer: boolean) =>
    set((state) => ({
      ...state,
      showPlayer,
    })),
  setTrackId: (trackId: string) =>
    set((state) => ({
      ...state,
      trackId,
    })),
  setHasAlbums: (hasAlbums: boolean) =>
    set((state) => ({
      ...state,
      hasAlbums,
    })),
  setReleaseDate: (releaseDate: string) =>
    set((state) => ({
      ...state,
      releaseDate,
    })),
  setShowTrackList: (showTrackList: boolean) =>
    set((state) => ({
      ...state,
      showTrackList,
    })),
  setAlbum: (album: IAlbum) =>
    set((state) => ({
      ...state,
      album,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
