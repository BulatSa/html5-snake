const game = {
  canvas: null,
  ctx: null,
  board: null,
  width: 640,
  height: 360,
  sprites: {
    background: null,
    cell: null,
  },

  init() {
    this.canvas = document.querySelector("#mycanvas");
    this.ctx = this.canvas.getContext("2d");
  },

  start() {
    this.init();

    this.preload(() => {
      this.run();
    });
  },

  preload(callback) {
    let loaded = 0;
    const required = Object.keys(this.sprites).length;
    const onAssetLoad = () => {
      loaded++;
      if (loaded >=required) {
        callback();
      }
    }

    for (let key in this.sprites) {
      this.sprites[key] = new Image();
      this.sprites[key].src = `img/${key}.png`;
      this.sprites[key].addEventListener('load', onAssetLoad);
    }
  },

  run() {
    this.board.create();
    window.requestAnimationFrame(() => {
      this.ctx.drawImage(this.sprites.background, 0, 0);
      this.board.render();
    });
  },
};

window.addEventListener("load", () => {
  game.start();
});
