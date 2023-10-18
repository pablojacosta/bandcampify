export const formatAlbumTotalDuration = (totalDuration: string) => {
  const splitted = totalDuration.split(":");

  return `${splitted[0]} min ${splitted[1]} s`;
};
