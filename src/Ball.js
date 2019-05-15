export default class Ball {
  constructor(game) {
    this.image = document.getElementById("ball-img");
    this.position = { x: 10, y: 10 };
    this.speed = { x: 4, y: 4 };
    this.size = 30;
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime, paddle) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.detectCollision();
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }

  detectCollision() {
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;

    let leftOfPaddle = this.game.paddle.position.x;
    let rightOfpaddle = this.game.paddle.position.x + this.game.paddle.width;
    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftOfPaddle &&
      this.speed.x + this.size < rightOfpaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
