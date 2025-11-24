import styles from "../../styles/game.module.scss";
import { GameSimbol } from "./game-simbol";

export function GameCell({ isWinner, onClick, i, cell }) {
  return (
    <button
      className={`${styles["cell"]} ${isWinner ? styles["cell-win"] : ""}`}
      onClick={() => onClick(i)}
      key={i}
    >
      <GameSimbol value={cell} />
    </button>
  );
}
