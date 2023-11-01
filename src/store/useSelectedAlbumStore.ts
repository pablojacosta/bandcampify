import { IAlbum } from "interfaces/album";
import { IAlbumTrack } from "interfaces/albumTrack";
import { IPlaylistSrc } from "interfaces/playlistSrc";
import { create } from "zustand";

interface ISelectedAlbumStore {
  tracks: IAlbumTrack[] | null;
  showTracks: boolean;
  albumUrl: string;
  hideAlbums: boolean;
  showPlayer: boolean;
  trackId: string;
  hasAlbums: boolean;
  album: IAlbum | null;
  albumId: number;
  showTrackList: boolean;
  isAlbum: boolean;
  albumStreamUrls: string[];
  trackIndex: number;
  playList: IPlaylistSrc[];
  setTracks: (trackList: IAlbumTrack[]) => void;
  setShowTracks: (showTracks: boolean) => void;
  setAlbumUrl: (albumUrl: string) => void;
  setHideAlbums: (hideAlbums: boolean) => void;
  setShowPlayer: (showPlayer: boolean) => void;
  setTrackId: (trackId: string) => void;
  setHasAlbums: (hasAlbums: boolean) => void;
  setShowTrackList: (showTrackList: boolean) => void;
  setAlbum: (album: IAlbum) => void;
  setAlbumId: (albumId: number) => void;
  setIsAlbum: (isAlbum: boolean) => void;
  setAlbumStreamUrls: (albumStreamUrls: string[]) => void;
  setTrackIndex: (trackIndex: number) => void;
  setPlaylist: (playList: IPlaylistSrc[]) => void;
  clearStore: () => void;
}

const initialState = {
  tracks: null,
  showTracks: false,
  albumUrl: "",
  hideAlbums: false,
  showPlayer: false,
  trackId: "",
  hasAlbums: false,
  releaseDate: "",
  showTrackList: false,
  album: null,
  albumId: 0,
  isAlbum: false,
  albumStreamUrls: [],
  trackIndex: 0,
  playList: [],
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
  setAlbumId: (albumId: number) =>
    set((state) => ({
      ...state,
      albumId,
    })),
  setIsAlbum: (isAlbum: boolean) =>
    set((state) => ({
      ...state,
      isAlbum,
    })),
  setAlbumStreamUrls: (albumStreamUrls: string[]) =>
    set((state) => ({
      ...state,
      albumStreamUrls,
    })),
  setTrackIndex: (trackIndex: number) =>
    set((state) => ({
      ...state,
      trackIndex,
    })),
  setPlaylist: (playList: IPlaylistSrc[]) =>
    set((state) => ({
      ...state,
      playList,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
