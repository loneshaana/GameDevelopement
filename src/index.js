import Game from "./game";

(() => {
  let gameScreen = document.getElementById("gameScreen");
  let ctx = gameScreen.getContext("2d");
  ctx.clearRect(0, 0, gameScreen.clientWidth, gameScreen.clientHeight);
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  // paddle.draw(ctx);
  let game = new Game(GAME_WIDTH, GAME_HEIGHT);
  game.start();

  let lastTime = 0;
  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
  }
  requestAnimationFrame(gameLoop);
})();
