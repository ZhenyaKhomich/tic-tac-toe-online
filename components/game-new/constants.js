import avatar1 from "./ui/images/avatar1.png";
import avatar2 from "./ui/images/avatar2.png";
import avatar3 from "./ui/images/avatar3.png";
import avatar4 from "./ui/images/avatar4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRINGLE: "tringle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS, 
  GAME_SYMBOLS.ZERO, 
  GAME_SYMBOLS.TRINGLE, 
  GAME_SYMBOLS.SQUARE
];

export const PLAYERS = [
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntegggfff",
    rating: 850,
    avatar: avatar2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 2,
    name: "Lara",
    rating: 1400,
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: 2,
    name: "Додик",
    rating: 1760,
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];