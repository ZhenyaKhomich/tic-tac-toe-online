import styles from "../../styles/game.module.scss";
import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import { useGameState } from "./use-game-state";

export function GameTable() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleClick,
    restartGame,
    isDrow,
  } = useGameState();

  return (
    // <div className="flex flex-col items-center w-40 mx-auto my-24 px-5 py-5 border border-black">
    <div className={styles["game"]}>
      <GameInfo
        isDrow={isDrow}
        winnerSequence={winnerSequence}
        cells={cells}
        currentStep={currentStep}
      />
      <div className={styles["game-field"]}>
        {cells.map((cell, i) => {
          const isWinner = winnerSequence?.includes(i);
          return (
            <GameCell
              isWinner={isWinner}
              key={i}
              onClick={handleClick}
              i={i}
              cell={cell}
            />
          );
        })}
      </div>
      <button className={styles["btn"]} onClick={restartGame}>
        Сбросить
      </button>
    </div>
  );
}
