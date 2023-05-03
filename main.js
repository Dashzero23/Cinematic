// Create the Phaser game configuration
const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 600,
  scene: [UnderTale1, UnderTale2, UnderTale3, HoldUp, HoldUp2, Menu],
};

// Create the Phaser game instance
const game = new Phaser.Game(config);
