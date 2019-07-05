class Game {
  constructor(options) {
    const { ctx, map, tileSize, position, design, player } = options;

    this.ctx = ctx;
    this.map = map;
    this.tileSize = tileSize;
    this.position = position;
    this.design = design;
    this.player = player;
    //this.dog = dog;
    // this.poo = poo;
    // this.neighbor = neighbor;
    // this.player = player;

    this.gameOver = undefined;
  }

  ////////START////////
  start() {
    ////////DRAW MAP////////
    this.map.drawMap();
    ////////DRAW CHARACTER////////
    this.player.drawCharacter();
    ////////DRAW POO'S////////
    ////////ASSIGN CONTROL TO KEYS////////
  }

  ////////UPDATE////////
}
