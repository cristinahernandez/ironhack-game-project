document.onload = (function() {
  //canvas
  const canvas = document.getElementById("pickit");
  const ctx = canvas.getContext("2d");

  //main variables
  const level = "one";
  const tileSize = 40;
  const map1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
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
    document.getElementById("score-screen").style = "display: block;";

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
  let restartButton = document.getElementById("restart-button-2");
  restartButton.addEventListener("click", function() {
    //Display Canvas Game
    location.reload();
    // document.getElementById("splash-screen").style = "display: none;";
    // document.getElementById("winner-screen").style = "display: none;";
    // document.getElementById("pickit").style = "display: block;";
    // document.getElementById("score-screen").style = "display: block;";

    // //Game object
    // game = new Game({
    //   ctx: ctx,
    //   map: new Map(ctx, tileSize, map1),
    //   player: new Player(ctx, tileSize, map1),
    //   tileSize: tileSize,
    //   dog: new Dog(ctx, tileSize, map1),
    //   neighbor: new Neighbor(ctx, tileSize, map1)
    // });

    // //START game
    // game.start();
  });
})();
