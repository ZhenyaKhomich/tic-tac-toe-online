import styles from "../../styles/game.module.scss";
import { SIMBOL_O, SIMBOL_X } from "../constans";
export function GameSimbol({ value }) {
  const getCurrentStepColor = (value) => {
    return value === SIMBOL_O
      ? "simbol--o"
      : value === SIMBOL_X
        ? "simbol--x"
        : "";
  };

  return value ? (
    <span
      className={`${styles["simbol"]} ${styles[getCurrentStepColor(value)]}`}
    >
      {value}
    </span>
  ) : null;
}
