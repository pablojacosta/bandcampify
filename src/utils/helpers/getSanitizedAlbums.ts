/* eslint-disable @typescript-eslint/no-explicit-any */
import { IReturnedData } from "interfaces/returnedData";

export const getSanitizedAlbums = (data: IReturnedData[]) => {
  const filteredAlbums = data.filter(
    (album: IReturnedData) => album.tracks.length !== 0
  );

  const filteredTracks = data
    .filter((track: IReturnedData) => track.tracks.length === 0)
    .map((track: IReturnedData) => ({
      name: track.name,
      id: track.id,
      image: track.image,
      artist: track.artist,
    }));

  console.log("filteredAlbums", filteredAlbums);

  const filteredUniqueTracks: any[] = filteredTracks.filter(
    (obj: any, index: number) => {
      return (
        index === filteredTracks.findLastIndex((o: any) => obj.id === o.id)
      );
    }
  );

  for (const track of filteredUniqueTracks) {
    for (let i = 0; i < filteredAlbums.length; i++) {
      for (let j = 0; j < filteredAlbums[i].tracks.length; j++) {
        if (filteredAlbums[i].tracks[j].name.localeCompare(track.name) === 0) {
          filteredAlbums[i].tracks[j].id = track.id;
        }
      }
    }
  }

  return { filteredAlbums, filteredUniqueTracks };
};
