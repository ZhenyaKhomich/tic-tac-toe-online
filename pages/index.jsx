import { useState } from "react";
import { GameField, GameInfo, GameTitle, useGameState } from "../components/game";
import {Header} from '../components/header';
import { GameSimbol } from "../components/game/game-simbol";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {cells, currentMove, nextMove, handleCellClick, handlePlayerTimeOver, winnerSequence, winnerSymbol} = useGameState(playersCount);

  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <main className="pt-6 mx-auto max-w-[632px]">
        <GameTitle playersCount={playersCount} />
        <GameInfo 
        className='mt-4' 
        playersCount={playersCount}  
        currentMove={currentMove}
        isWinner={!!winnerSymbol}
        onPlayerTimeOver = {handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="mt-4" ><GameSimbol symbol={winnerSymbol}/></div>
        )}
        <GameField 
        className="mt-6" 
        currentMove={currentMove} 
        cells={cells}  
        nextMove={nextMove} 
        handleCellClick={handleCellClick} 
        winnerSequence={winnerSequence} 
        winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
