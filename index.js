const gameBoard = (function () {
  let gameboard = [];

  return {
    gameboard,
  };
})();

const displayController = (function () {
  const renderBoardArray = () => {
    console.log(gameBoard.gameboard);
  };
})();

const players = (name) => {
  const sayHello = () => console.log("hello!");

  return { name, sayHello }; // name is same as name:name
};
