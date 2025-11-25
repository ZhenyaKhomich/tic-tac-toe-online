import { GameField, GameInfo, GameTitle } from "../components/game";
import { CrossIcon } from "../components/game/icons/cross-icon";
import {Header} from '../components/header';

export default function HomePage() {
  return (
    <>
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <main className="pt-6 mx-auto max-w-[632px]">
        <GameTitle />
        <GameInfo className='mt-4' component={CrossIcon} />
        <GameField className="mt-6" />
      </main>
    </div>
    </>
  );
}
