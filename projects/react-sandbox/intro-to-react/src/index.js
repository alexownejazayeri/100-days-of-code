import React, { Component,  useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
  - [x] Rewrite Board to use two loops to make the squares instead of hardcoding them
  - [ ] Add a toggle button that lets you sort the moves in either ascending or descending order
  - [ ] When someone wins, highlight the three squares that caused the win
  - [ ] When no one wins, display a message about the result being a draw 
  */

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  
  
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const layout = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    return (
      <div>
        {layout.map((el) => (
          <div classNamee="board-row">
            {el.map((num) => this.renderSquare(num))}
          </div>
        ))}
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  componentDidUpdate(prevProps) {
    console.log('updated!');
    
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    const gps = {
      0: "(1, 1)",
      1: "(1, 2)",
      2: "(1, 3)",
      3: "(2, 1)",
      4: "(2, 2)",
      5: "(2, 3)",
      6: "(3, 1)",
      7: "(3, 2)",
      8: "(3, 3)",
    };

    const coordinate = gps[`${i}`];
    

    this.setState({
      history: history.concat([
        {
          squares: squares,
          coordinate: coordinate,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? "Go to move #" + move + ` ${step.coordinate}`
        : "Go to start";
      if (move === history.length - 1) {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>
              <strong>{desc}</strong>
            </button>
          </li>
        );
      } else {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      }
    });

    
    let newMoves = moves;

    const handleMoveSort = () => {
      newMoves = newMoves.reverse();
      console.log(newMoves);
    };

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    


    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className='toggle' onClick={handleMoveSort}>Sort Moves</button>
          <ol>{newMoves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
