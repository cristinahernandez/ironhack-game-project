class Game {
  constructor(options) {
    const { ctx, map, player, tileSize, dog, neighbor, poo } = options;

    this.ctx = ctx;
    this.map = map;
    this.player = player;
    this.tileSize = tileSize;
    this.dog = dog;
    this.neighbor = neighbor;
    this.dogSpeed = 0;
    this.neighborSpeed = 0;
    this.poopingSpeed = 0;
    this.gameOver = undefined;
    this.poosArray = [];
    this.poo = new Poo(this.ctx, 30, this.dog.x, this.dog.y);
  }

  moveRandom() {
    let getRandomNum = Math.floor(Math.random() * Math.floor(4));
    switch (getRandomNum) {
      case 0:
        if (
          this.checkCollisionRandom("up") &&
          !this.charCollision("up", this.dog, this.player)
        ) {
          this.dog.moveUp();
        }
        break;
      case 1:
        if (
          this.checkCollisionRandom("down") &&
          !this.charCollision("down", this.dog, this.player)
        ) {
          this.dog.moveDown();
        }
        break;
      case 2:
        if (
          this.checkCollisionRandom("left") &&
          !this.charCollision("left", this.dog, this.player)
        ) {
          this.dog.moveLeft();
        }
        break;
      case 3:
        if (
          this.checkCollisionRandom("right") &&
          !this.charCollision("right", this.dog, this.player)
        ) {
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
          if (
            this.checkCollision("up") &&
            !this.charCollision("up", this.player, this.dog)
          ) {
            this.player.moveUp();
          }
          break;
        case 40: // arrow down
          if (
            this.checkCollision("down") &&
            !this.charCollision("down", this.player, this.dog)
          ) {
            this.player.moveDown();
          }
          break;
        case 37: // arrow left
          if (
            this.checkCollision("left") &&
            !this.charCollision("left", this.player, this.dog)
          ) {
            this.player.moveLeft();
          }
          break;
        case 39: // arrow right
          if (
            this.checkCollision("right") &&
            !this.charCollision("right", this.player, this.dog)
          ) {
            this.player.moveRight();
          }
          break;
      }
    };
  }

  update() {
    this.dogSpeed++;
    if (this.dogSpeed === 20) {
      this.moveRandom();
      this.dogSpeed = 0;
    }
    this.neighborSpeed++;
    if (this.neighborSpeed === 100) {
      this.neighbor.moveRandom();
      this.neighborSpeed = 0;
    }
    this.poopingSpeed++;
    if (this.poopingSpeed === 400) {
      this.poosArray.push(new Poo(this.ctx, 30, this.dog.x, this.dog.y));
      this.poopingSpeed = 0;
    }
    this.map.drawMap();
    this.dog.drawDog();
    this.player.drawPlayer();
    this.neighbor.drawNeighbor();

    this.poosArray.forEach(poo => {
      poo.drawPoo();
    });

    if (this.poosArray.length > 0) {
      this.poosArray.forEach((poo, i) => {
        if (
          poo.getPosition().x === this.player.getPosition().x &&
          poo.getPosition().y === this.player.getPosition().y
        )
          //console.log("collision!", i);
          this.poosArray.splice(i, 1);
      });
    }
    // console.log(
    // this.neighbor.isNextWakeable(
    // this.neighbor.getPosition().x,
    // this.neighbor.getPosition().y
    // )
    // );
    //console.log(this.neighbor.this.map);
    //console.log(this.neighbor.getPosition().x, this.neighbor.getPosition().y);
    //this.neighbor.checkMapCollision();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  //check collisions between characters
  charCollision(direction, char1, char2) {
    let posPlayer = char1.getPosition();
    let posDog = char2.getPosition();
    if (direction === "up") {
      if (posPlayer.x === posDog.x && posPlayer.y - 1 === posDog.y) {
        //console.log("don't move up!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "down") {
      if (posPlayer.x === posDog.x && posPlayer.y + 1 === posDog.y) {
        //console.log("don't move down!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "left") {
      if (posPlayer.x - 1 === posDog.x && posPlayer.y === posDog.y) {
        //console.log("don't move left!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "right") {
      if (posPlayer.x + 1 === posDog.x && posPlayer.y === posDog.y) {
        //console.log("don't move right!collision!");
        return true;
      } else {
        return;
      }
    }
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
    //request the browser to call update before repainting the animation
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }
}
