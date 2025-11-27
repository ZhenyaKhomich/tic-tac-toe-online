import { Profile } from "../profile";
import { clsx } from "clsx";
import { CrossIcon } from "./icons/cross-icon";
import { GameSimbol } from "./game-simbol";
import { GAME_SIMBOLS } from "./constants";
import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";
import avatar4 from "./images/avatar4.png";

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatar1,
    simbol: GAME_SIMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereInteddfdfdfdfdfdf",
    rating: 850,
    avatar: avatar2,
    simbol: GAME_SIMBOLS.ZERO,
  },
  {
    id: 2,
    name: "Lara",
    rating: 1400,
    avatar: avatar3,
    simbol: GAME_SIMBOLS.TRINGLE,
  },
  {
    id: 2,
    name: "Додик",
    rating: 1760,
    avatar: avatar4,
    simbol: GAME_SIMBOLS.SQUARE,
  },
];

export function GameInfo({ className, playersCount }) {
  return (
    <div className={clsx(className, "flex flex-wrap gap-3 justify-between bg-white rounded-2xl shadow-md px-8 py-4")}>
      {players.slice(0, playersCount).map((player, index) => {
        return <PlayerInfo key={player.id} playerInfo={player} isRight={index % 2 === 1}></PlayerInfo>;
      })}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight = false }) {
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-[124px]"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        ></Profile>
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <GameSimbol simbol={playerInfo.simbol}></GameSimbol>
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}></div>
      <div className={clsx("text-lg font-semibold", isRight && "order-1")}>01:08</div>
    </div>
  );
}
