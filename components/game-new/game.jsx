import { PLAYERS } from "./constants";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayearInfo } from "./ui/player-info";

export function Game() {
  return <GameLayout 
      backLink={<BackLink />} 
      title={<GameTitle />} 
      gameInfo={
        <GameInfo 
          playersCount={4} 
          isRatingGame 
          timeMode={'1 мин. на ход'} />
      }
      playersList={
        PLAYERS.map((player, index) => (
          <PlayearInfo
          key={player.id}
          avatar={player.avatar}
          name={player.name}
          rating={player.rating}
          seconds={60}
          symbol={player.symbol}
          isRight={index % 2 === 1}
          />)
        )}
      >
  </GameLayout>;
}
