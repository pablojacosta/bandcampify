export const formatSharedAlbumUrl = (albumUrl: string) => {
  return "https://" + albumUrl.replace("---", ".bandcamp.com/album/");
};
