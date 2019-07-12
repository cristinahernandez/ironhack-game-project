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

  let game = new Game({
    ctx: ctx,
    map: new Map(ctx, tileSize, map1),
    player: new Player(ctx, "#fff"),
    tileSize: tileSize,
    dog: new Dog(ctx),
    poo: new Poo(ctx),
    neighbor: new Neighbor(ctx)
  });
  game.start();

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
