class Game {
  constructor(options) {
    const { ctx, map, player, tileSize, dog, neighbor, poo } = options;

    this.ctx = ctx;
    this.map = map;
    this.player = player;
    this.tileSize = tileSize;
    this.dog = dog;
    this.dogSpeed = 0;
    this.poosArray = [];
    //this.poo = new Poo(this.ctx, this.tileSize - 10, this.dog.x, this.dog.y);
    this.poopingSpeed = 0;
    this.neighbor = neighbor;
    this.neighborSpeed = 0;
    this.gameOver = undefined;
    this.poosToPick = 0;
    this.poosToPickScore = 30;
    this.poosCounter = 0;
    this.firstPoo = false;
    this.timerSpeed = 0;
    this.walkingTime = 30;
    this.reputation = 3;
  }

  makePoo() {
    this.poosArray.push(
      new Poo(this.ctx, this.tileSize - 10, this.dog.x, this.dog.y)
    );
  }

  drawPoo() {
    this.poosArray.forEach(poo => {
      poo.drawPoo();
    });
  }

  checkPoos(arr, val) {
    return arr.some(arrVal => {
      return val.x === arrVal.x && val.y === arrVal.y;
    });
  }

  ////LOOP////

  update() {
    //Time runs
    this.timerSpeed++;
    if (this.timerSpeed === 60) {
      this.walkingTime = this.walkingTime - 1;
      document.getElementById("game-timer").innerHTML = this.walkingTime;
      this.timerSpeed = 0;
    }

    //dog speed controller
    this.dogSpeed++;
    if (this.dogSpeed === 8) {
      this.moveRandom(this.dog);
      this.dogSpeed = 0;
    }

    //neighbor speed controller
    this.neighborSpeed++;
    if (this.neighborSpeed === 20) {
      this.moveRandom(this.neighbor);
      this.neighborSpeed = 0;
    }

    //dog pooping
    this.poopingSpeed++;

    if (this.poopingSpeed === 10) {
      if (!this.firstPoo) {
        // resto uno al contador de cacas
        this.makePoo();
        this.poosToPick = this.poosToPick + 1;
        console.log(this.poosToPick);
        this.poopingSpeed = 0;
        this.firstPoo = true;
      }
    }
    if (this.poopingSpeed === 40) {
      if (!this.checkPoos(this.poosArray, this.dog)) {
        // resto uno al contador de cacas
        // si el contador llega a 0, llamo a gameOver
        this.makePoo();
        this.poosToPick = this.poosToPick + 1;
        console.log(this.poosToPick);
        console.log(this.poosArray.length);
      }
      this.poopingSpeed = 0;
    }

    //display characters
    this.map.drawMap();
    this.drawPoo();
    this.dog.drawDog();
    this.player.drawPlayer();
    this.neighbor.drawNeighbor();

    //Player picks up poops
    this.pickYourShit();

    //When Neighbor Steps Poops
    this.neighborStepsPoo();

    //Win
    if (this.firstPoo) {
      if (this.poosArray.length === 0 && this.walkingTime <= 30) {
        //Hide canvas Game and score screen
        document.getElementById("pickit").style = "display: none;";
        document.getElementById("score-screen").style = "display: none;";
        //Display Game Over screen
        let winnerScreen = document.getElementById("winner-screen");
        winnerScreen.style = "display: block";

        //Pause the loop Game
        this.pause();
      }
    }

    //GameOver
    if (this.walkingTime === 0 || this.reputation === 0) {
      //Hide canvas Game
      document.getElementById("pickit").style = "display: none;";
      //this.ctx.style = "display: none";

      //Display Game Over screen
      let gameOver = document.getElementById("gameover-screen");
      gameOver.style = "display: block";
      document.getElementById("winner-screen").style = "display: none;";
      document.getElementById("score-screen").style = "display: none;";

      //Pause the loop Game
      this.pause();
    }

    // Loop
    if (this.intervalGame !== undefined) {
      window.requestAnimationFrame(this.update.bind(this));
    }
  }

  ////END LOOP////

  //move DOG or Neighbor
  moveRandom(char1) {
    let getRandomNum = Math.floor(Math.random() * Math.floor(4));
    switch (getRandomNum) {
      case 0:
        if (
          this.checkMapCollision("up", char1) &&
          !this.charCollision("up", this.dog, this.neighbor, this.player)
        ) {
          char1.moveUp();
          //changeDirectionUp();
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
            //console.log(this.player);
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
        case 80:
          this.pause();
      }
    };
  }

  //pick up poos
  pickYourShit() {
    for (let i = 0; i < this.poosArray.length; i++) {
      if (
        this.poosArray[i].getPosition().x === this.player.getPosition().x &&
        this.poosArray[i].getPosition().y === this.player.getPosition().y
      ) {
        this.poosArray.splice(i, 1);
        this.poosCounter = this.poosCounter + 1;
        document.getElementById("poos-counter").innerHTML = this.poosCounter;
        console.log(`You have picked up ${this.poosCounter} times`);
      }
    }
  }

  //pick up poos
  neighborStepsPoo() {
    for (let i = 0; i < this.poosArray.length; i++) {
      if (
        this.poosArray[i].getPosition().x === this.neighbor.getPosition().x &&
        this.poosArray[i].getPosition().y === this.neighbor.getPosition().y
      ) {
        this.poosArray.splice(i, 1);
        if (this.reputation > 0) {
          this.reputation = this.reputation - 1;
          document.getElementById("reputation").innerHTML = this.reputation;
        }
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
    return this.map.map[row][column] === 1 ||
      this.map.map[row][column] === 2 ||
      this.map.map[row][column] === 4 ||
      this.map.map[row][column] === 3 ||
      this.map.map[row][column] === 5 ||
      this.map.map[row][column] === 6 ||
      this.map.map[row][column] === 7 ||
      this.map.map[row][column] === 8 ||
      this.map.map[row][column] === 9 ||
      this.map.map[row][column] === 10 ||
      this.map.map[row][column] === 11 ||
      this.map.map[row][column] === 12 ||
      this.map.map[row][column] === 13 ||
      this.map.map[row][column] === 14 ||
      this.map.map[row][column] === 15
      ? true
      : false;
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

  pause() {
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    } else {
      this.start();
    }
  }

  start() {
    this.assignControlsToKeys();
    //request the browser to call update before repainting the animation
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }
}
