import width from "../App";
import currentColorArrangement from "../App";
import blank from "./Candy/blank.png";
import candyColors from "../App";

const moveIntoSquareBelow = () => {
  for (let i = 0; i <= 55; i++) {
    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
    const isFirstRow = firstRow.includes(i);

    if (isFirstRow && currentColorArrangement[i] === blank) {
      let randomNumber = Math.floor(Math.random() * candyColors.length);
      currentColorArrangement[i] = candyColors[randomNumber];
    }

    if (currentColorArrangement[i + width] === blank) {
      currentColorArrangement[i + width] = currentColorArrangement[i];
      currentColorArrangement[i] = blank;
    }
  }
};

export default moveIntoSquareBelow;
