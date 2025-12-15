export function GameLayout({ backLink, title, gameInfo, playersList }) {
  return (
    <>
      <div>
        <div className="pl-2 flex-col">
          {backLink}
          {title}
          {gameInfo}
        </div>
      </div>
      <div
        className=" mt-4 flex flex-wrap gap-3 justify-between bg-white rounded-2xl shadow-md px-8 py-4"
      >
        {playersList}
      </div>
    </>
  );
}
