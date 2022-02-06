import setScoreDisplay from "../App";
import currentColorArrangement from "../App ";
import blank from "./Candy/blank.png";

const checkForRowOfThree = () => {
  for (let i = 0; i < 64; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const decidedColor = currentColorArrangement[i];
    const notValid = [
      6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
    ];
    const isBlank = currentColorArrangement[i] === blank;

    if (notValid.includes(i)) continue;

    if (
      rowOfThree.every(
        (square) => currentColorArrangement[square] === decidedColor && !isBlank
      )
    ) {
      setScoreDisplay((score) => score + 3);
      rowOfThree.forEach((square) => (currentColorArrangement[square] = blank));
      return true;
    }
  }
};

export default checkForRowOfThree;
