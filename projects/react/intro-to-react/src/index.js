import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
  - [x] Rewrite Board to use two loops to make the squares instead of hardcoding them
  - [x] Add a toggle button that lets you sort the moves in either ascending or descending order
  - [x] When someone wins, highlight the three squares that caused the win
  - [x] When no one wins, display a message about the result being a draw 
  */

const Square = (props) => {
  
  
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  
  renderSquare(i) {
    
    // if win and i in winning row, class = square-winner
    let squareClass = 'square';
    const winningLine = this.props.winningTiles;

    if (winningLine.length === 4 && winningLine.includes(i)) {
      squareClass = 'square-winner';
    }

    return (
      <Square
        class={squareClass}
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
      ascending: true,
    };
  }

  handleMoveSort = this.handleMoveSort.bind(this);

  handleMoveSort() {
    this.setState({
      ascending: !this.state.ascending,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const ascending = this.state.ascending;
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
      ascending: ascending,
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

    let sortedMoves = [];

    if (!this.state.ascending) {
      sortedMoves = moves.reverse();
    } sortedMoves = moves;

    let status;
    let winningTiles = [];
    if (winner) {
      status = "Winner: " + winner[0];
      winningTiles = winner.map((el) => el);
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    if (moves.length === 10 && !winner) {
      status = "Draw!";
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            winningTiles={winningTiles}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className='toggle' onClick={this.handleMoveSort}>Sort Moves</button>
          <ol>{sortedMoves}</ol>
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
      return [squares[a], a, b, c];
    }
  }
  return null;
}
