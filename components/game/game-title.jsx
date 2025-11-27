import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export function GameTitle({playersCount}) {
  return (
    <>
    <div className="pl-2 flex-col">
      <Link className="flex items-center gap-2  text-teal-600 text-xs -mb-0.5" href="#">
       <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl leading-[1.2]" >Крестики нолики</h1>
      <div className="flex gap-3 items-center text-xs text-slate-400 h-3 mt-0.5">
        <StarIcon />
        <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />
          1 мин на ход
        </div>
      </div>
    </div>
    </>
  );
}
