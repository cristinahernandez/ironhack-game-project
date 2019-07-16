class Game {
  constructor(options) {
    const { ctx, map, player, tileSize, dog, neighbor, poo, tilemap } = options;

    this.ctx = ctx;
    this.map = map;
    this.tilemap = tilemap;
    this.player = player;
    this.tileSize = tileSize;
    this.dog = dog;
    this.neighbor = neighbor;
    this.dogSpeed = 0;
    this.neighborSpeed = 0;
    this.poopingSpeed = 0;
    this.gameOver = undefined;
    this.poosArray = [];
    this.poo = new Poo(this.ctx, this.tileSize - 10, this.dog.x, this.dog.y);
    this.gameScore = 0;
    this.gameState = undefined;
  }

  update() {
    //dog speed controller
    this.dogSpeed++;
    if (this.dogSpeed === 10) {
      this.moveRandom(this.dog);
      this.dogSpeed = 0;
    }
    //neighbor speed controller
    this.neighborSpeed++;
    if (this.neighborSpeed === 10) {
      this.moveRandom(this.neighbor);
      this.neighborSpeed = 0;
    }
    //pooping speed controller
    this.poopingSpeed++;
    if (this.poopingSpeed === 60) {
      this.poosArray.push(
        new Poo(this.ctx, this.tileSize - 10, this.dog.x, this.dog.y)
      );
      this.poopingSpeed = 0;
    }
    //paint characters
    this.map.drawMap();
    this.dog.drawDog();
    this.player.drawPlayer();
    this.neighbor.drawNeighbor();
    this.drawPoo();

    this.pickYourShit();
    this.neighborStepsPoo();

    if (this.gameScore < 0) {
      document.getElementById("pickit").style = "display: none;";
      document.getElementsByTagName("pickit").style = "filter: blur(0px);";
      let gameOver = document.getElementById("gameover-screen");
      this.ctx.style = "display: none";
      gameOver.style = "display: block";
      this.pause();
    }

    // la funcion de abajo sabe cuando tiene que volver a llamar la funcion que se pasa por parametro;
    if (this.intervalGame !== undefined) {
      window.requestAnimationFrame(this.update.bind(this));
    }
    //this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  //to move DOG or Neighbor
  moveRandom(char1) {
    let getRandomNum = Math.floor(Math.random() * Math.floor(4));
    switch (getRandomNum) {
      case 0:
        if (
          this.checkMapCollision("up", char1) &&
          !this.charCollision("up", this.dog, this.neighbor, this.player)
        ) {
          char1.moveUp();
        }
        break;
      case 1:
        if (
          this.checkMapCollision("down", char1) &&
          !this.charCollision("down", this.dog, this.neighbor, this.player)
        ) {
          char1.moveDown();
        }
        break;
      case 2:
        if (
          this.checkMapCollision("left", char1) &&
          !this.charCollision("left", this.dog, this.neighbor, this.player)
        ) {
          char1.moveLeft();
        }
        break;
      case 3:
        if (
          this.checkMapCollision("right", char1) &&
          !this.charCollision("right", this.dog, this.neighbor, this.player)
        ) {
          char1.moveRight();
        }
        break;
    }
  }

  //move Player with keyboard
  assignControlsToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38: // arrow up
          if (
            this.checkMapCollision("up", this.player) &&
            !this.charCollision("up", this.player, this.dog, this.neighbor)
          ) {
            this.player.moveUp();
          }
          break;
        case 40: // arrow down
          if (
            this.checkMapCollision("down", this.player) &&
            !this.charCollision("down", this.player, this.dog, this.neighbor)
          ) {
            this.player.moveDown();
          }
          break;
        case 37: // arrow left
          if (
            this.checkMapCollision("left", this.player) &&
            !this.charCollision("left", this.player, this.dog, this.neighbor)
          ) {
            this.player.moveLeft();
          }
          break;
        case 39: // arrow right
          if (
            this.checkMapCollision("right", this.player) &&
            !this.charCollision("right", this.player, this.dog, this.neighbor)
          ) {
            this.player.moveRight();
          }
          break;
      }
    };
  }

  //paint poos
  drawPoo() {
    this.poosArray.forEach(poo => {
      poo.drawPoo();
    });
  }

  //pick up poos
  pickYourShit() {
    for (let i = 0; i < this.poosArray.length; i++) {
      if (
        this.poosArray[i].getPosition().x === this.player.getPosition().x &&
        this.poosArray[i].getPosition().y === this.player.getPosition().y
      ) {
        this.poosArray.splice(i, 1);
        this.gameScore = this.gameScore + 1;
        console.log(this.gameScore);
      }
    }
    // if (this.poosArray.length > 0) {
    // this.poosArray.forEach((poo, i) => {
    // if (
    // poo.getPosition().x === this.player.getPosition().x &&
    // poo.getPosition().y === this.player.getPosition().y
    // )
    // this.poosArray.splice(i, 1);
    // this.gameScore++;
    // console.log(this.gameScore);
    // });
    //}
  }

  //pick up poos
  neighborStepsPoo() {
    for (let i = 0; i < this.poosArray.length; i++) {
      if (
        this.poosArray[i].getPosition().x === this.neighbor.getPosition().x &&
        this.poosArray[i].getPosition().y === this.neighbor.getPosition().y
      ) {
        this.poosArray.splice(i, 1);
        this.gameScore = this.gameScore - 4;
        console.log(this.gameScore);
      }
    }
  }

  //check collisions between characters
  charCollision(direction, char1, char2, char3) {
    let posChar1 = char1.getPosition();
    let posChar2 = char2.getPosition();
    let posChar3 = char3.getPosition();
    if (direction === "up") {
      if (
        (posChar1.x === posChar2.x && posChar1.y - 1 === posChar2.y) ||
        (posChar1.x === posChar3.x && posChar1.y - 1 === posChar3.y) ||
        (posChar2.x === posChar3.x && posChar2.y - 1 === posChar3.y)
      ) {
        return true;
      } else {
        return;
      }
    }

    if (direction === "down") {
      if (
        (posChar1.x === posChar2.x && posChar1.y + 1 === posChar2.y) ||
        (posChar1.x === posChar3.x && posChar1.y + 1 === posChar3.y) ||
        (posChar2.x === posChar3.x && posChar2.y + 1 === posChar3.y) ||
        (posChar3.x === posChar1.x && posChar3.y + 1 === posChar1.y)
      ) {
        //console.log("don't move down!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "left") {
      if (
        (posChar1.x - 1 === posChar2.x && posChar1.y === posChar2.y) ||
        (posChar1.x - 1 === posChar3.x && posChar1.y === posChar3.y) ||
        (posChar2.x - 1 === posChar3.x && posChar2.y === posChar3.y)
      ) {
        //console.log("don't move left!collision!");
        return true;
      } else {
        return;
      }
    }

    if (direction === "right") {
      if (
        (posChar1.x + 1 === posChar2.x && posChar1.y === posChar2.y) ||
        (posChar1.x + 1 === posChar3.x && posChar1.y === posChar3.y) ||
        (posChar2.x + 1 === posChar3.x && posChar2.y === posChar3.y)
      ) {
        //console.log("don't move right!collision!");
        return true;
      } else {
        return;
      }
    }
  }

  //check true is next position is map is walkable
  canImoveNextPosition(column, row) {
    return this.map.map[row][column] === 1 ? true : false;
  }

  //check character collision with map
  checkMapCollision(direction, char1) {
    let collChar1 = char1.getPosition();
    if (direction === "up") {
      if (this.canImoveNextPosition(collChar1.x, collChar1.y - 1)) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "down") {
      if (this.canImoveNextPosition(collChar1.x, collChar1.y + 1)) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "left") {
      if (this.canImoveNextPosition(collChar1.x - 1, collChar1.y)) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "right") {
      if (this.canImoveNextPosition(collChar1.x + 1, collChar1.y)) {
        return true;
      } else {
        return false;
      }
    }
  }

  // gameState() {
  //   switch (this.) {
  //     case "running":
  //       this._update();
  //       break;
  //     case "paused":
  //       break;
  //   }
  // }

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
