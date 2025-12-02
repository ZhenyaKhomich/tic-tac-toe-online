import { useState } from "react";
import { GameField, GameInfo, GameTitle, useGameState } from "../components/game";
import {Header} from '../components/header';

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(2);
  const {cells, currentMove, nextMove, handleCellClick, winnerSequence} = useGameState(playersCount);

  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <main className="pt-6 mx-auto max-w-[632px]">
        <GameTitle playersCount={playersCount} />
        <GameInfo className='mt-4' playersCount={playersCount}  currentMove={currentMove}/>
        <GameField className="mt-6" currentMove={currentMove} cells={cells}  nextMove={nextMove} handleCellClick={handleCellClick} winnerSequence={winnerSequence}/>
      </main>
    </div>
  );
}
