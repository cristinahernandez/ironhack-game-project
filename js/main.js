document.onload = (function() {
  const canvas = document.getElementById("pickit");
  const ctx = canvas.getContext("2d");
  const level = "one";
  const tileSize = 40;

  //Define parameters to pass in each game's property, not clear
  let game = new Game({
    ctx: ctx,
    map: new Map(ctx, tileSize),
    player: new Character(ctx, tileSize, [0, 1], "white")
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
