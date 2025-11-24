import styles from "../../styles/game.module.scss";
import { GameSimbol } from "./game-simbol";

export function GameInfo({ isDrow, winnerSequence, cells, currentStep }) {
  return (
    <div className={styles["game-info"]}>
      {isDrow && <div>Ничья</div>}
      {!isDrow && (
        <>
          {winnerSequence ? "Победитель:" : "Ход:"}
          <GameSimbol value={cells[winnerSequence?.[0]] ?? currentStep} />
        </>
      )}
    </div>
  );
}
