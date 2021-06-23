/*

FLIPCARD
https://www.w3schools.com/howto/howto_css_flip_card.asp

checkbox hack -> to simulate an actual click event using only CSS 
https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css

*/

//// GAMEBOARD
const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const setBox = (index, player) => {
    board[index] = player;
  };

  const getBox = () => {};

  const reset = () => {
    board.fill("", 0, board.length); // using fill to retain array's reference
  };

  return { setBox, getBox, reset, board };
})();

//// DISPLAY
const displayController = (function () {
  const boxes = document.querySelectorAll(".box");
  // restart button reset coming from controller

  // updateBoard (get gameBoard array and renders its values)
  const updateBoard = () => {
    gameBoard.board.forEach((el, index) => {
      boxes[index].textContent = el;
    });
  };

  // resultMessage  displays result message

  return { updateBoard };
})();

//// MAIN CONTROLLER
const mainController = (function () {
  const boardElem = document.getElementById("board");
  const restartBtn = document.getElementById("restart-btn");

  const player = (type) => {
    this.type = type;

    const getType = () => {
      return type;
    };

    return { getType };
  };

  const player1 = player("X");
  const player2 = player("O");
  let currentPlayer = player1.getType();

  // add event listeners
  boardElem.addEventListener("click", (e) => {
    // event delegation
    const clickedBox = e.target; // get ID of clicked box

    if (gameBoard.board[clickedBox["id"]] === "") {
      // add condition if GameIsOver (display message new game?)
      // gameIsOver();
      startPlay(clickedBox, clickedBox["id"]);
      gameIsOver();
      //display winner
      changePlayer();
    }
  });
  // don't do anything if gameIsOver or if clicked on same box
  // listeners should have update board

  restartBtn.addEventListener("click", (e) => {
    // reset board
    gameBoard.reset();
    console.log(gameBoard.board);
    displayController.updateBoard();
    // reset players
    currentPlayer = player1.getType();

    // Result message

    // Turn message
  });

  const startPlay = (clickedBox) => {
    console.log("clicked on " + clickedBox["id"]);
    gameBoard.setBox(clickedBox["id"], currentPlayer);
    console.log("current player: " + currentPlayer);
    displayController.updateBoard();
  };

  const renderBoard = () => {
    // render values from board
  };

  const changePlayer = () => {
    currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
  };

  // logic that checks for when the game is over
  const gameIsOver = () => {
    // returns boolean
    let winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // if board has places in indexes of the same Player, then this Player has won
    let winnerFound = winCombinations.find((el) => {
      return el.every((val) => {
        return (
          gameBoard.board[val] !== "" &&
          gameBoard.board[val] === gameBoard.board[el[0]]
        );
      });
    });

    if (winnerFound) {
      console.log("Winner is " + gameBoard.board[winnerFound[0]]);

      // block gameBoard

      // start new game?
    }

    // there's been a TIE
    // Winner not found and all board places have been taken
    if (gameBoard.board.every((el) => el != "") && !winnerFound) {
      console.log("tie!");
    }

    //https://stackoverflow.com/questions/38811421/how-to-check-if-an-array-is-a-subset-of-another-array-in-javascript

    // TIE
    // if board is full and no winCombinations is found then it's a TIE
  };
})();
