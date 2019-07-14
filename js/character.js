//Define Character class

class Character {
  constructor(ctx, map, tileSize) {
    this.ctx = ctx;
    this.charSize = 30;
    this.map = map;
    this.tileSize = this.tileSize;
  }

  //get x and y of the Characterº
  getPosition() {
    let newX = Math.floor(this.x / 40);
    let newY = Math.floor(this.y / 40);
    return { x: newX, y: newY };
  }

  //detects if the position given in map is wakeable or not
  isNextWakeable(column, row) {
    return this.map[row][column] === 1 ? true : false;
  }

  //checks if the position collides with a non wakeable tile
  checkMapCollision(direction) {
    if (direction === "up") {
      if (this.isNextWakeable(this.getPosition().x, this.getPosition().y - 1)) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "down") {
      if (this.isNextWakeable(this.getPosition().x, this.getPosition().y + 1)) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "left") {
      if (this.isNextWakeable(this.getPosition().x - 1, this.getPosition().y)) {
        return true;
      } else {
        return false;
      }
    }

    if (direction === "right") {
      if (this.isNextWakeable(this.getPosition().x + 1, this.getPosition().y)) {
        return true;
      } else {
        return false;
      }
    }
  }

  //directions
  moveUp() {
    this.y -= 40;
  }

  moveDown() {
    this.y += 40;
  }

  moveLeft() {
    this.x -= 40;
  }

  moveRight() {
    this.x += 40;
  }

  //moves randomly a character inside the map
  moveRandom() {
    let getRandomNum = Math.floor(Math.random() * Math.floor(4));
    switch (getRandomNum) {
      case 0:
        //if (this.checkMapCollision("up")) {
        this.moveUp();
        //}
        break;
      case 1:
        this.moveDown();
        break;
      case 2:
        this.moveLeft();
        break;
      case 3:
        this.moveRight();
        break;
    }
  }
}
