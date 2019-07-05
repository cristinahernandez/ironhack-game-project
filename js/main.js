document.onload = (function() {
  const canvas = document.getElementById("pickit");
  const ctx = canvas.getContext("2d");
  const level = "one";
  const tileSize = 64;

  //Define parameters to pass in each game's property, not clear
  let game = new Game({
    map: new Map(ctx, tileSize),
    ctx: ctx,
    // tile: new Tile(),
    // dog: new Dog(ctx, tileSize)
    player: new Character(ctx, tileSize)
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
