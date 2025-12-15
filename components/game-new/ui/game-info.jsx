import { HistoryIcon } from "./icons/history-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";

export function GameInfo({playersCount, isRatingGame=true, timeMode}) {
  return (
    <div className="flex gap-3 items-center text-xs text-slate-400 h-3 mt-0.5">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon /> {timeMode}
      </div>
    </div>
  )
}
