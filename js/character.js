//Define Character class

class Character {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.charSize = 30;
    this.color = color;
    this.map;
  }

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

  getPosition() {
    let newX = Math.floor(this.x / 40);
    let newY = Math.floor(this.y / 40);
    return { x: newX, y: newY };
  }
}
