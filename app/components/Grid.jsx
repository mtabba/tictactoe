import Square from './Square';

const Grid = ({ gameState, onSquareClick, resetGame }) => {
  return (
    <div className="bg-lime-500 w-full min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
      <h1 className="text-zinc-900 text-center mb-10 text-[18px]">
        TIC TAC TOE GAME
      </h1>
      <div className="flex flex-col">
        {[0, 1, 2].map((i) => (
          <div className="flex flex-row" key={i}>
            {[0, 1, 2].map((j) => (
              <Square
                key={i * 3 + j}
                index={i * 3 + j}
                className={`text-[64px] text-center text-[rgb(255,217,0)] font-extrabold p-[30px] ${
                  j < 2 ? 'border-r-[15px] border-r-[rgb(255,217,0)]' : ''
                } ${i < 2 ? 'border-b-[15px] border-b-[rgb(255,217,0)]' : ''}`}
                state={gameState.board[i * 3 + j]}
                onClick={() => onSquareClick(i * 3 + j)}
              />
            ))}
          </div>
        ))}
      </div>
      <br />
      <div className="text-zinc-900 text-center text-[18px] mb-3 gap-8">
        <p>
          {gameState.playerX} vs {gameState.playerO}
        </p>
        <p>
          Score X : {gameState.scoreX} | Score O : {gameState.scoreO}
        </p>
      </div>
      <br />
      <button
        onClick={resetGame}
        className="flex items-center justify-center bg-gradient-to-br from-[#ff1818] via-[#02ff17] to-[#fffb03] border-0 rounded-lg shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] text-white text-[20px] font-[Phantomsans,sans-serif] p-[3px] box-border cursor-pointer mt-[10px] select-none touch-manipulation whitespace-nowrap max-w-full min-w-[100px] transition-all duration-300 hover:brightness-100 active:outline-none"
      >
        <span className="bg-[#000000] px-[15px] py-[7px] rounded-lg w-full h-full transition-colors duration-300 hover:bg-transparent hover:text-black">
          Start Again
        </span>
      </button>
    </div>
  );
};

export default Grid;
