import Square from "./components/Square";
import "./App.css";
import { useState } from "react";
import ResetButton from "./components/ResetButton";
function App() {
  //setting all react states
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [moveNum, setMoveNum] = useState(0);
  const defaultStatus = "Welcome to Tic-Tac-Toe, now is the turn of : X";
  const [status, setStatus] = useState(defaultStatus);
  const [finished, setFinished] = useState(false);

  //function to check the winner on every single move, depending on the combinations
  function checkWinner(squares: string[]) {
    const winningCombis = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = [
        winningCombis[i][0],
        winningCombis[i][1],
        winningCombis[i][2],
      ];
      if (squares[a] != null && squares[b] != null && squares[c] != null) {
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
          setStatus("The winner is : " + squares[a]);
          setFinished(true);
        } else if (squares.every((element) => element !== null) ) {
          setStatus("Draw!");
          setFinished(true);
        }
      }
      console.log(squares.every((element) => !element))
    }
  }

  //function to handle clicks on squares and setting game data
  function handleSquareClick(i: number) {
    const nextSquare = squares.slice();
    if (!nextSquare[i] && !finished) {
      nextSquare[i] = moveNum % 2 === 0 ? "X" : "O";

      setStatus("It's the turn of : " + (nextSquare[i] === "X" ? "O" : "X"));

      setSquares(nextSquare);
      setMoveNum(moveNum + 1);

      checkWinner(nextSquare);
    }
  }
  //clear all game data and go back to state 0
  function resetGame() {
    setStatus(defaultStatus);
    setSquares(Array(9).fill(null));
    setMoveNum(0);
    setFinished(false);
  }

  return (
    <>
      <div className="text-center">
        <p className="text-3xl font-bold">{status}</p>
      </div>
      <div className="flex justify-center">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>

      <div className="flex justify-center">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>

      <div className="flex justify-center">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
      <ResetButton onResetButtonClick={resetGame} />
    </>
  );
}

export default App;
