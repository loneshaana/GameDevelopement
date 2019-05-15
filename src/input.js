export default class InputHandler {
  constructor(Paddle) {
    document.addEventListener("keydown", function(event) {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          Paddle.moveLeft();
          break;
        case 39:
          Paddle.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", function(event) {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          if (Paddle.speed < 0) Paddle.stop();
          break;
        case 39:
          if (Paddle.speed > 0) Paddle.stop();
          break;
      }
    });
  }
}
