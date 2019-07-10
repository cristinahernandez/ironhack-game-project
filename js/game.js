class Game {
  constructor(options) {
    const { ctx, map, player, tileSize } = options;

    this.ctx = ctx;
    this.map = map;
    this.player = player;
    this.tileSize = tileSize;
    // this.position = position;
    // this.design = design;
    // this.tileFrom = tileFrom;
    // this.tileTo = tileTo;
    //this.dog = dog;
    // this.poo = poo;
    // this.neighbor = neighbor;

    this.gameOver = undefined;
  }

  assignControlsToKeys() {
    document.onkeydown = e => {
      // if (!this.checkCollision()) {
      switch (e.keyCode) {
        case 38: // arrow up
          if (this.checkCollision("up")) {
            this.player.moveUp();
          }
          //console.log("arriba");
          break;
        case 40: // arrow down
          if (this.checkCollision("down")) {
            this.player.moveDown();
          }
          //console.log("abajo");
          break;
        case 37: // arrow left
          if (this.checkCollision("left")) {
            this.player.moveLeft();
            //console.log("izquierda");
          }
          break;
        case 39: // arrow right
          if (this.checkCollision("right")) {
            this.player.moveRight();
          }
          //console.log("derecha");
          break;
      }
      // }
    };
  }

  update() {
    this.map.drawMap();
    this.player.drawPlayer();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  canImoveNextPosition(column, row) {
    return this.map.map[row][column] === 1 ? true : false;
  }

  checkCollision(direction) {
    if (direction === "up") {
      if (
        this.canImoveNextPosition(
          this.player.getPosition().x,
          this.player.getPosition().y - 1
        )
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "down") {
      if (
        this.canImoveNextPosition(
          this.player.getPosition().x,
          this.player.getPosition().y + 1
        )
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "left") {
      if (
        this.canImoveNextPosition(
          this.player.getPosition().x - 1,
          this.player.getPosition().y
        )
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "right") {
      if (
        this.canImoveNextPosition(
          this.player.getPosition().x + 1,
          this.player.getPosition().y
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
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
