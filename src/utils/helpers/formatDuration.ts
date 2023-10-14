export const formatDuration = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};
