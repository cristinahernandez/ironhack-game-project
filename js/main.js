document.onload = (function() {
  //canvas
  const canvas = document.getElementById("pickit");
  const ctx = canvas.getContext("2d");

  //main variables
  const level = "one";
  const tileSize = 64;
  const map1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 4, 0, 0, 13, 0, 13, 0],
    [0, 0, 0, 5, 1, 1, 12, 0, 3, 0],
    [0, 7, 1, 6, 0, 0, 5, 1, 6, 0],
    [0, 3, 0, 3, 0, 0, 3, 0, 3, 0],
    [0, 8, 1, 9, 1, 1, 10, 15, 14, 0],
    [0, 0, 0, 3, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 3, 0, 0],
    [0, 2, 1, 10, 1, 1, 1, 10, 11, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  let game;

  //START button event
  let startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startGame);

  function startGame() {
    //Display Canvas Game
    document.getElementById("splash-screen").style = "display: none;";
    document.getElementById("pickit").style = "display: block;";
    document.getElementById("score-screen").style = "display: flex;";

    //Game object
    game = new Game({
      ctx: ctx,
      map: new Map(ctx, tileSize, map1),
      player: new Player(ctx, tileSize, map1),
      tileSize: tileSize,
      dog: new Dog(ctx, tileSize, map1),
      neighbor: new Neighbor(ctx, tileSize, map1)
      // pasar un callback
    });

    //START game
    game.start();
  }

  //PLAY AGAIN
  let restartButtonOver = document.getElementById("restart-button-over");
  restartButtonOver.addEventListener("click", function() {
    //Display Canvas Game
    location.reload();
  });
  let restartButtonWinner = document.getElementById("restart-button-winner");
  restartButtonWinner.addEventListener("click", function() {
    //Display Canvas Game
    location.reload();
  });
})();
