class Game {
  constructor(options) {
    const { ctx, map, player, tileSize, dog, poo } = options;

    this.ctx = ctx;
    this.map = map;
    this.player = player;
    this.tileSize = tileSize;
    this.dog = dog;
    this.poo = poo;
    this.counter = 0;
    // this.position = position;
    // this.design = design;
    // this.poo = poo;
    // this.neighbor = neighbor;

    this.gameOver = undefined;
  }

  moveRandom() {
    let getRandomNum = Math.floor(Math.random() * Math.floor(4));
    switch (getRandomNum) {
      case 0:
        if (this.checkCollisionRandom("up")) {
          this.dog.moveUp();
        }
        break;
      case 1:
        if (this.checkCollisionRandom("down")) {
          this.dog.moveDown();
        }
        break;
      case 2:
        if (this.checkCollisionRandom("left")) {
          this.dog.moveLeft();
        }
        break;
      case 3:
        if (this.checkCollisionRandom("right")) {
          this.dog.moveRight();
        }
        break;
    }
  }

  checkCollisionRandom(direction) {
    if (direction === "up") {
      if (
        this.canImoveNextPosition(
          this.dog.getPosition().x,
          this.dog.getPosition().y - 1
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
          this.dog.getPosition().x,
          this.dog.getPosition().y + 1
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
          this.dog.getPosition().x - 1,
          this.dog.getPosition().y
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
          this.dog.getPosition().x + 1,
          this.dog.getPosition().y
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  //player controller with keyboard
  assignControlsToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38: // arrow up
          if (this.checkCollision("up") && !this.charCollision("up")) {
            this.player.moveUp();
          }
          break;
        case 40: // arrow down
          if (this.checkCollision("down") && !this.charCollision("down")) {
            this.player.moveDown();
          }
          break;
        case 37: // arrow left
          if (this.checkCollision("left") && !this.charCollision("left")) {
            this.player.moveLeft();
          }
          break;
        case 39: // arrow right
          if (this.checkCollision("right") && !this.charCollision("right")) {
            this.player.moveRight();
          }
          break;
      }
    };
  }

  update() {
    this.counter++;
    if (this.counter === 20) {
      this.moveRandom();
      this.counter = 0;
    }
    this.map.drawMap();
    //this.dog.updateSpeed();
    this.dog.drawDog();
    this.player.drawPlayer();
    //this.poo.drawPoo();
    //this.charCollision();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  //check collisions between characters
  charCollision(direction) {
    let posPlayer = this.player.getPosition();
    let posDog = this.dog.getPosition();
    if (direction === "up") {
      if (posPlayer.x === posDog.x && posPlayer.y - 1 === posDog.y) {
        console.log("don't move up!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "down") {
      if (posPlayer.x === posDog.x && posPlayer.y + 1 === posDog.y) {
        console.log("don't move down!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "left") {
      if (posPlayer.x - 1 === posDog.x && posPlayer.y === posDog.y) {
        console.log("don't move left!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "right") {
      if (posPlayer.x + 1 === posDog.x && posPlayer.y === posDog.y) {
        console.log("don't move right!collision!");
        return true;
      } else {
        return;
      }
    }

    // if (direction === "up") {
    //   if (
    //     (posChar1.x === posChar2.x && posChar1.y === posChar2.y - 1) ||
    //     (posChar1.x === posChar2.x && posChar1.y - 1 === posChar2.y)
    //   ) {
    //     console.log("collision!");
    //     return true;
    //   } else {
    //     console.log("not a collision");
    //     return false;
    //   }
    // }

    // if (direction === "down") {
    //   if (
    //     (posChar1.x === posChar2.x && posChar1.y === posChar2.y + 1) ||
    //     (posChar1.x === posChar2.x && posChar1.y + 1 === posChar2.y)
    //   ) {
    //     console.log("collision!");
    //     return true;
    //   } else {
    //     console.log("not a collision");
    //     return false;
    //   }
    // }

    // if (direction === "left") {
    //   if (
    //     (posChar1.x - 1 === posChar2.x && posChar1.y === posChar2.y) ||
    //     (posChar1.x === posChar2.x - 1 && posChar1.y === posChar2.y)
    //   ) {
    //     console.log("collision!");
    //   } else {
    //     console.log("not a collision");
    //   }
    // }

    // if (direction === "right") {
    //   if (
    //     (posChar1.x + 1 === posChar2.x && posChar1.y === posChar2.y) ||
    //     (posChar1.x === posChar2.x + 1 && posChar1.y === posChar2.y)
    //   ) {
    //     console.log("collision!");
    //   } else {
    //     console.log("not a collision");
    //   }
    // }
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
