import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TringleIcon } from "./icons/tringle-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { GAME_SIMBOLS } from "./constants";

export function GameSimbol({ simbol, width = "12", height = "12" }) {
  const Icon = {
    [GAME_SIMBOLS.CROSS]: CrossIcon,
    [GAME_SIMBOLS.ZERO]: ZeroIcon,
    [GAME_SIMBOLS.SQUARE]: SquareIcon,
    [GAME_SIMBOLS.TRINGLE]: TringleIcon,
  }[simbol] ?? CrossIcon;

  return <Icon width={width} height={height} />
}
