import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TringleIcon } from "./icons/tringle-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { GAME_SYMBOLS } from "../constants";


export function GameSymbol({ simbol, width = "12", height = "12" }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
      [GAME_SYMBOLS.TRINGLE]: TringleIcon,
    }[simbol] ?? CrossIcon;

  return <Icon width={width} height={height} />;
}
