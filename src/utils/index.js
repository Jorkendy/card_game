export * from "./styles";
export * from "./constant";

export const generateMatrix = numberOfElements => {
  const alphabet = [...Array(26)].map((e, i) =>
    (i + 10).toString(36).toUpperCase()
  );
  const numbers = Array.from(new Array(10)).map((item, _i) => _i);

  const dataSet = [...alphabet, ...numbers];
  const shuffled = shuffle(dataSet, numberOfElements / 2);
  return [...shuffled, ...shuffled].sort(() => 0.5 - Math.random());
};

const shuffle = (array, numberOfElements) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfElements);
};

export const parseSecondsToTime = seconds => {
  const minute = Math.floor(seconds / 60);
  const second = seconds - minute * 60;
  return (minute < 10 ? `0${minute}` : minute) + ":" + (second < 10 ? `0${second}` : second);
};
