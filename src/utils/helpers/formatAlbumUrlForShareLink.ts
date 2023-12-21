export const formatAlbumUrlForShareLink = (albumUrl: string) => {
  return albumUrl.replace("https://", "").replace("/album/", "-");
};
