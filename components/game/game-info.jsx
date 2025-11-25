import { Profile } from "../profile";
import { clsx } from "clsx";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className, component: Component }) {
  return (
    <div
      className={clsx(
        className,
        "flex gap-3 items-center justify-between bg-white rounded-2xl shadow-md px-8 py-4",
      )}
    >
      <div className="relative">
        <Profile className="w-[124px]" />
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <Component />
          {/* <CrossIcon /> */}
        </div>
      </div>
      <div className="h-6 w-px bg-slate-200"></div>
      <div className="text-lg font-semibold">01:08</div>

      <div className="text-orange-600 text-lg font-semibold">00:08</div>
      <div className="h-6 w-px bg-slate-200"></div>
      <div className="relative">
        <Profile className="w-[124px]" />
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <Component />
          {/* <CrossIcon /> */}
        </div>
      </div>
    </div>
  );
}
