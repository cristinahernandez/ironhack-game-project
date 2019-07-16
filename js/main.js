document.onload = (function() {
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

  //START
  let startButton = document.getElementById("startButton");
  startButton.addEventListener("click", startGame);

  function startGame() {
    document.getElementById("start-screen").style = "display: none;";
    document.getElementById("pickit").style = "display: block;";
    //Game object
    game = new Game({
      ctx: ctx,
      map: new Map(ctx, tileSize, map1),
      tilemap: new TileMap(ctx, tileSize, map1),
      player: new Player(ctx, tileSize, map1),
      tileSize: tileSize,
      dog: new Dog(ctx, tileSize, map1),
      neighbor: new Neighbor(ctx, tileSize, map1)
    });
    game.start();
  }
})();
