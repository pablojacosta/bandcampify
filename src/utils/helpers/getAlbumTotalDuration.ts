import { IAlbumTrack } from "interfaces/albumTrack";

export const getAlbumTotalDuration = (tracks: IAlbumTrack[]) => {
  const initialValue = 0;
  return tracks.reduce(
    (accumulator, object) => accumulator + object.duration,
    initialValue
  );
};
