import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 flex flex-col items-center")}>
      <div className="flex w-full justify-between">
        <div>
          <div className="flex items-center gap-1 text-xl font-semibold leading-[1.2]">
            Ход:
            <ZeroIcon width="20" height="20" />
          </div>
          <div className="flex items-center text-xs leading-[1.2] gap-1 text-slate-400">
            Следующий:
            <CrossIcon />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <UiButton className="flex items-center" size="md" variant="primary">
            Ничья
          </UiButton>
          <UiButton className="flex items-center" size="md" variant="outline">
            Сдаться
          </UiButton>
        </div>
      </div>
      <div className="grid mt-3 grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pt-px pl-px">
          {cells.map((_, i) => (
            <button key={i} className="flex items-center justify-center border border-slate-200 -ml-px -mt-px ">
              <CrossIcon width='20' height='20' />
            </button>
          ))}
        </div>
    </div>
  );
}
