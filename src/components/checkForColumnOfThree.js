import width from "../App";
import setScoreDisplay from "../App";
import currentColorArrangement from "../App ";
import blank from "./Candy/blank";

const checkForColumnOfThree = () => {
  for (let i = 0; i <= 47; i++) {
    const columnOfThree = [i, i + width, i + width * 2];
    const decidedColor = currentColorArrangement[i];
    const isBlank = currentColorArrangement[i] === blank;

    if (
      columnOfThree.every(
        (square) => currentColorArrangement[square] === decidedColor && !isBlank
      )
    ) {
      setScoreDisplay((score) => score + 3);
      columnOfThree.forEach(
        (square) => (currentColorArrangement[square] = blank)
      );
      return true;
    }
  }
};

export default checkForColumnOfThree;
