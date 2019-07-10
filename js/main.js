document.onload = (function() {
  const canvas = document.getElementById("pickit");
  const ctx = canvas.getContext("2d");
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

  //Define parameters to pass in each game's property, not clear
  let game = new Game({
    ctx: ctx,
    map: new Map(ctx, tileSize, map1),
    player: new Player(ctx),
    tileSize: tileSize
    // tile: new Tile(),
    // dog: new Dog(ctx, tileSize)
    // poo: new Poo(),
    // neighbor: new Neighbor(),
    // player: new Player(),
  });
  game.start();

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
