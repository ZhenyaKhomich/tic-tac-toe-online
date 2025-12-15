import { Profile } from "../profile";
import { clsx } from "clsx";
import { GameSymbol } from "./game-symbol";
import { GAME_SIMBOLS } from "./constants";
import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";
import avatar4 from "./images/avatar4.png";
import { useEffect, useState } from "react";

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

export function GameInfo({ className, playersCount, currentMove, isWinner, onPlayerTimeOver }) {
  return (
    <div className={clsx(className, "flex flex-wrap gap-3 justify-between bg-white rounded-2xl shadow-md px-8 py-4")}>
      {players.slice(0, playersCount).map((player, index) => {
        return (
          <PlayerInfo
            key={player.id + index}
            playerInfo={player}
            isRight={index % 2 === 1}
            onTimeOver={() => {
              onPlayerTimeOver(player.simbol);
            }}
            isTimerRunning={currentMove === player.simbol && !isWinner}
          ></PlayerInfo>
        );
      })}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight = false, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(10);

  const minuteString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((lastSeconds) => Math.max((lastSeconds -= 1), 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

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
          <GameSymbol simbol={playerInfo.simbol}></GameSymbol>
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          !isTimerRunning && "text-slate-300",
          isRight && "order-1",
          isDanger && "text-orange-600",
        )}
      >
        {minuteString}:{secondsString}
      </div>
    </div>
  );
}
