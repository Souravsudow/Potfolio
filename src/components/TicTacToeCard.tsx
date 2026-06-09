import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ConfettiOverlay from './ConfettiOverlay';

type Player = 'X' | 'O';
type Square = Player | null;

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function calculateWinner(board: Square[]): { winner: Player | 'draw' | null; line: number[] | null } {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, line: [a, b, c] };
    }
  }
  return { winner: board.every((s) => s !== null) ? 'draw' : null, line: null };
}

function getEmptySquares(board: Square[]): number[] {
  return board.reduce<number[]>((acc, cell, i) => {
    if (cell === null) acc.push(i);
    return acc;
  }, []);
}

function minimax(board: Square[], depth: number, isMaximizing: boolean): number {
  const { winner } = calculateWinner(board);
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (winner === 'draw') return 0;

  const empty = getEmptySquares(board);
  if (isMaximizing) {
    let best = -Infinity;
    for (const i of empty) {
      board[i] = 'O';
      const score = minimax(board, depth + 1, false);
      board[i] = null;
      best = Math.max(score, best);
    }
    return best;
  } else {
    let best = Infinity;
    for (const i of empty) {
      board[i] = 'X';
      const score = minimax(board, depth + 1, true);
      board[i] = null;
      best = Math.min(score, best);
    }
    return best;
  }
}

function getBestMove(board: Square[]): number {
  let bestScore = -Infinity;
  let bestMove = getEmptySquares(board)[0];
  const boardCopy = [...board];

  for (const i of getEmptySquares(boardCopy)) {
    boardCopy[i] = 'O';
    const score = minimax(boardCopy, 0, false);
    boardCopy[i] = null;
    if (score > bestScore) {
      bestScore = score;
      bestMove = i;
    }
  }
  return bestMove;
}

interface TicTacToeCardProps {
  delay?: number;
}

const TicTacToeCard = ({ delay = 0.3 }: TicTacToeCardProps) => {
  const [board, setBoard] = useState<Square[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<Player | 'draw' | null>(null);
  const [winningCells, setWinningCells] = useState<number[]>([]);
  const timeoutRef = useRef<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const loseSoundRef = useRef<HTMLAudioElement | null>(null);

  // Play sound when AI wins or draw
  useEffect(() => {
    if (winner === 'O' || winner === 'draw') {
      // Create and play audio on user interaction
      const audio = new Audio('/sounds/fahhh_KcgAXfs.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {});
      loseSoundRef.current = audio;
    }
    return () => {
      loseSoundRef.current?.pause();
    };
  }, [winner]);

  const handleClick = (index: number) => {
    const currentBoard = board;
    if (currentBoard[index] || winner || timeoutRef.current !== null) return;

    const afterPlayer = [...currentBoard];
    afterPlayer[index] = 'X';
    setBoard(afterPlayer);

    const { winner: playerWinner, line: playerLine } = calculateWinner(afterPlayer);
    if (playerWinner) {
      setWinner(playerWinner);
      if (playerLine) setWinningCells(playerLine);
      if (playerWinner === 'X') setShowConfetti(true);
      return;
    }

    const empty = getEmptySquares(afterPlayer);
    if (empty.length === 0) return;

    timeoutRef.current = window.setTimeout(() => {
      const aiMove = getBestMove(afterPlayer);
      const afterAi = [...afterPlayer];
      afterAi[aiMove] = 'O';
      setBoard(afterAi);

      const { winner: aiWinner, line: aiLine } = calculateWinner(afterAi);
      if (aiWinner) {
        setWinner(aiWinner);
        if (aiLine) setWinningCells(aiLine);
      }
      timeoutRef.current = null;
    }, 300);
  };

  const resetGame = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningCells([]);
    setShowConfetti(false);
  };

  const isDraw = winner === 'draw';
  const isXWin = winner === 'X';
  const isOWin = winner === 'O';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 h-full bg-white dark:bg-black">
        {/* Board */}
        <div className="aspect-video flex items-center justify-center bg-white dark:bg-black relative select-none">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            {/* Confetti overlay */}
            <ConfettiOverlay show={showConfetti} />

            {/* Grid lines - absolute positioned behind cells */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical lines */}
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 -translate-x-1/2" />
              <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 -translate-x-1/2" />
              {/* Horizontal lines */}
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-300 dark:bg-gray-600 -translate-y-1/2" />
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-300 dark:bg-gray-600 -translate-y-1/2" />
            </div>

            {/* Cells */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
              {board.map((cell, index) => {
                const isWinCell = (isXWin || isOWin) && winningCells.includes(index);
                return (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    disabled={cell !== null || winner !== null}
                    aria-label={cell ? `${cell} at square ${index + 1}` : `Empty square ${index + 1}`}
                    className={`
                      flex items-center justify-center
                      transition-all duration-200
                      ${cell === null && !winner && !timeoutRef.current
                        ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50'
                        : 'cursor-default'
                      }
                      ${isWinCell
                        ? cell === 'X'
                          ? 'bg-gray-100 dark:bg-gray-800'
                          : 'bg-gray-50 dark:bg-gray-900'
                        : ''
                      }
                    `}
                  >
                    {cell && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className={`
                          text-4xl sm:text-5xl font-light
                          ${cell === 'X' ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500'}
                        `}
                      >
                        {cell}
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 pt-2 space-y-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-medium text-black dark:text-white tracking-tight uppercase">
              Tic-Tac-Toe
            </h3>
            <span className="text-[9px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
              vs AI
            </span>
          </div>

          <div className="flex items-center justify-between">
            {/* Status */}
            {isDraw ? (
              <span className="text-[10px] text-gray-500 dark:text-gray-400 italic">
                It's a draw
              </span>
            ) : isXWin ? (
              <span className="text-[10px] text-black dark:text-white font-medium">
                You win! 🎉
              </span>
            ) : isOWin ? (
              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                AI wins
              </span>
            ) : (
              <span className="text-[10px] text-gray-400 dark:text-gray-500">
                Your turn
              </span>
            )}

            {/* Restart */}
            <button
              onClick={resetGame}
              className="text-[10px] px-2.5 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:border-gray-400 dark:hover:border-gray-500 hover:text-black dark:hover:text-white transition-all duration-200"
            >
              {winner ? 'Play Again' : 'Reset'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TicTacToeCard;