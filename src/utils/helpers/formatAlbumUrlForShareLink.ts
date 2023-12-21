import { BASE_URL, SHARE } from "@constants/routes";

export const formatAlbumUrlForShareLink = (albumUrl: string) => {
  return `${BASE_URL}${SHARE}/${albumUrl
    .replace("https://", "")
    .replace(".bandcamp.com/album/", "---")}`;
};
