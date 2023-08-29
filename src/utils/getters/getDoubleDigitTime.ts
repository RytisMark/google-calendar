export const getDoubleDigitTime = (time: number) =>
  time.toString().padStart(2, "0");
