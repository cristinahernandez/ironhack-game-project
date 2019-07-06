class Game {
  constructor(options) {
    const {
      ctx,
      map,
      tileSize,
      position,
      design,
      player,
      tileFrom,
      tileTo
    } = options;

    this.ctx = ctx;
    this.map = map;
    this.tileSize = tileSize;
    this.position = position;
    this.design = design;
    this.player = player;
    this.tileFrom = tileFrom;
    this.tileTo = tileTo;
    //this.dog = dog;
    // this.poo = poo;
    // this.neighbor = neighbor;

    this.gameOver = undefined;
  }

  assignControlsToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38: // arrow up
          this.player.moveUp();
          console.log("arriba");
          break;
        case 40: // arrow down
          this.player.moveDown();
          console.log("abajo");
          break;
        case 37: // arrow left
          this.player.moveLeft();
          console.log("izquierda");
          break;
        case 39: // arrow right
          this.player.moveRight();
          console.log("derecha");
          break;
      }
      this.player.drawPlayer();
      //this.player.updateCanvas();
    };
  }

  update() {
    this.map.drawMap();
    this.player.drawPlayer();
  }

  pause() {
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }
  }

  start() {
    this.assignControlsToKeys();
    ////////DRAW POO'S////////
    ////////ASSIGN CONTROL TO KEYS////////

    //request the browser to call update before repainting the animation
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }
}
