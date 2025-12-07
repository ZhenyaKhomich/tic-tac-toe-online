import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSimbol } from "./game-simbol";


export function GameField({ className, cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol}) {
  
  const actions = (
    <>
      <UiButton className="flex items-center" size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton className="flex items-center" size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo actions={actions} currentMove={currentMove} nextMove={nextMove}></GameMoveInfo>
      <GameGrid>
        {cells &&
          cells.map((simbol, index) => (
            <GameCell
            isWinner={winnerSequence?.includes(index)}
              onClick={() => {
                handleCellClick(index);
              }}
              key={index}
              disabled={!!winnerSymbol}
            >
              {simbol && <GameSimbol simbol={simbol} width="20" height="20"></GameSimbol>}
            </GameCell>
          ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 flex flex-col items-center")}>
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex w-full justify-between">
      <div>
        <div className="flex items-center gap-1 text-xl font-semibold leading-[1.2]">
          Ход:
          <GameSimbol simbol={currentMove} width="20" height="20"></GameSimbol>
        </div>
        <div className="flex items-center text-xs leading-[1.2] gap-1 text-slate-400">
          Следующий:
          <GameSimbol simbol={nextMove}></GameSimbol>
        </div>
      </div>
      <div className="flex items-center gap-3">{actions}</div>
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid mt-3 grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pt-px pl-px">{children}</div>
  );
}

function GameCell({ children, onClick, isWinner, disabled}) {
  return (
    <button onClick={onClick} className={clsx(isWinner && 'bg-green-400',"flex items-center justify-center border border-slate-200 -ml-px -mt-px cursor-pointer")} disabled={disabled}>
      {children}
    </button>
  );
}
