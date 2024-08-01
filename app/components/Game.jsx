'use client';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Grid from './Grid';

const initialState = {
  board: ['', '', '', '', '', '', '', '', ''],
  isXTurn: true,
  scoreX: 0,
  scoreO: 0,
  playerX: 'Player X',
  playerO: 'Player O',
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (board) => {
  for (let [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const Game = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const winner = calculateWinner(state.board);
    if (winner) {
      swal(
        `Hurray🎉🥳🎆  ${
          winner === 'X' ? state.playerX : state.playerO
        } has won the Game`
      );
      setState((prev) => ({
        ...prev,
        scoreX: winner === 'X' ? prev.scoreX + 1 : prev.scoreX,
        scoreO: winner === 'O' ? prev.scoreO + 1 : prev.scoreO,
        board: initialState.board,
      }));
    } else if (!state.board.includes('')) {
      swal("It's a Draw!");
      setState((prev) => ({ ...prev, board: initialState.board }));
    }
  }, [state.board]);

  const onSquareClick = (index) => {
    if (state.board[index] === '') {
      setState((prev) => {
        const newBoard = [...prev.board];
        newBoard[index] = prev.isXTurn ? 'X' : 'O';
        return { ...prev, board: newBoard, isXTurn: !prev.isXTurn };
      });
    }
  };

  return (
    <Grid
      gameState={state}
      onSquareClick={onSquareClick}
      resetGame={() => setState(initialState)}
    />
  );
};

export default Game;
