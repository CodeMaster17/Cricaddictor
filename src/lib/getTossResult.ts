import { generateRandomNumber } from "./generateRandomNumber";

// get toss result through generated random number and return it
export const getTossResult = (selectedSide: string) => {
  const randomSide = generateRandomNumber() < 0.5 ? "tails" : "heads";
  return selectedSide === randomSide ? "EVENT_TOSS_WIN" : "EVENT_TOSS_LOSS";
};
