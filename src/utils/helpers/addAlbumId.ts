import { IAlbum } from "interfaces/album";

export const addAlbumId = (fullAlbums: IAlbum[]) => {
  fullAlbums.forEach((album: IAlbum) => {
    album.albumId = album.raw.basic.albumRelease[0].additionalProperty[0].value;
  });

  return fullAlbums;
};
