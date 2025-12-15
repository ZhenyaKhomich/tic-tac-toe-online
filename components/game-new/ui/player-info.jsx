import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import Image from "next/image";

export function PlayearInfo({isRight, name, rating, avatar, symbol, isTimerRunning, seconds}) {

  const minuteString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if(isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900'
    }
  }
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>

        <div className="flex items-center gap-2 text-teal-600 w-44">
          <Image className="w-12 rounded-[50px]" src={avatar} width={40} height={40} alt="avatar" />
          <div className={"flex flex-col text-left overflow-hidden"}>
            <div className="text-lg leading-[1.2] truncate">{name}</div>
            <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
          </div>
        </div>

        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={symbol}></GameSymbol>
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          !isTimerRunning && "text-slate-300",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minuteString}:{secondsString}
      </div>
    </div>
  );
}
