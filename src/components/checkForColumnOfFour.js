import blank from "./Candy/blank.png";
import currentColorArrangement from "../App";
import width from "../App";
import setScoreDisplay from "../App";

const checkForColumnOfFour = () => {
  for (let i = 0; i <= 39; i++) {
    const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
    const decidedColor = currentColorArrangement[i];
    const isBlank = currentColorArrangement[i] === blank;

    if (
      columnOfFour.every(
        (square) => currentColorArrangement[square] === decidedColor && !isBlank
      )
    ) {
      setScoreDisplay((score) => score + 4);
      columnOfFour.forEach(
        (square) => (currentColorArrangement[square] = blank)
      );
      return true;
    }
  }
};

export default checkForColumnOfFour;
