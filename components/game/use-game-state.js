import { useState } from "react";
import { SIMBOL_O, SIMBOL_X } from "../constans";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export const useGameState = () => {
  const [currentStep, setCurrentStep] = useState(SIMBOL_O);
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [winnerSequence, setWinnerSequence] = useState();

  const handleClick = (index) => {
    if (cells[index] || winnerSequence) return;
    const copyCells = [...cells];
    copyCells[index] = currentStep;

    const winner = computeWinner(copyCells);

    setCells(copyCells);
    setCurrentStep(currentStep === SIMBOL_O ? SIMBOL_X : SIMBOL_O);
    setWinnerSequence(winner);
  };

  const restartGame = () => {
    setCurrentStep(SIMBOL_O);
    setCells([null, null, null, null, null, null, null, null, null]);
    setWinnerSequence();
  };

  const isDrow = !winnerSequence && cells.filter((value) => value).length === 9;

  return {
    cells,
    currentStep,
    winnerSequence,
    handleClick,
    restartGame,
    isDrow,
  };
};
