//Define Player

class Player extends Character {
  constructor(name, design, x, y, controller) {
    super(name, design, x, y);
    this.controller = function() {
      //eventListener
    };
  }
}
