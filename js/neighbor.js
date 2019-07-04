class Neighbor extends Character {
  constructor(name, design, x, y, slideShit) {
    super(name, design, x, y);
    this.slideShit = function() {
      //if position of neighbor === index position of any poosArray element
      //to make it simple, if neighbor step on a sh** just game over
      game.gameOver();
    };
  }
}
