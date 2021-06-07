const gameBoard = (function () {
  let board = ["X", "O", "X", "X", "X", "X", "O", "X", "O"];

  // gameboard object?
  return {
    board,
  };
})();

//
const players = (name) => {
  const sayHello = () => console.log("hello!");

  return { name, sayHello }; // name is same as name:name
};

const displayController = (function () {
  const values = document.querySelectorAll(".box");
  const restartBtn = document.getElementById("restart-btn");

  // add event listeners of boxes
  document.querySelector("#board").addEventListener("click", (e) => {
    // event delegation
    const boxClicked = e.target; // get ID of clicked box
    console.log(boxClicked["id"]);
  });
  // don't do anything if gameIsOver or if clicked on same box
  // listeners should have update board

  restartButton.addEventListener("click", (e) => {
    // reset board

    // reset players

    const renderBoard = () => {
      // render values from board
    };

    // Result message

    // Turn message
  })();
})();

// const gameController = (function () => {

//   //
// })();
