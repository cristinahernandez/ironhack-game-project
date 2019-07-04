let game;
document.onload = (function() {
  const canvas = document.getElementById("pickit");
  const ctx = canvas.getContext("2d");
  const level = 1;

  //Define parameters to pass in each game's property, not clear
  game = new Game({
    map: new Map(level),
    tile: new Tile(),
    dog: new Dog(),
    poo: new Poo(),
    neighbor: new Neighbor(),
    player: new Player(),
    ctx: ctx
  });
  //game.start();

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
