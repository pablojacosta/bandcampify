import { IAlbum } from "interfaces/album";

export const emptyAlbum: IAlbum = {
  type: "album",
  name: "",
  url: "",
  numTracks: 0,
  keywords: [""],
  description: "",
  releaseDate: "",
  artist: { name: "", url: "" },
  releases: [
    {
      name: "",
      format: "",
      description: "",
      url: "",
      imageUrl: "",
    },
  ],
  tracks: [
    {
      name: "",
      duration: 0,
      streamUrl: "",
      position: 0,
      url: "",
    },
  ],
  imageUrl: "",
  publisher: {
    name: "",
    url: "",
    description: "",
    imageUrl: "",
  },
  raw: {
    basic: {
      albumRelease: [
        {
          additionalProperty: [
            {
              name: "",
              value: 0,
            },
          ],
        },
      ],
    },
  },
  albumId: 0,
};
