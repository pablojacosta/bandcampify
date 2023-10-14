export const getTrackId = (streamUrl: string) => {
  const regex = /.*mp3-128\/(.*)\?/;
  const regexResult = regex.exec(streamUrl);
  return regexResult![1];
};
