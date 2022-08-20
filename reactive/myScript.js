
const sprite = {
    x: 500,
    y: 400,
    cx: 0,
    cy: 0,
    dir: 0, //dir 0 = left, dir 1 = right
    speed: 3,
    width: 30,
    height: 30,
    xdone: false
}

window.onload = function () {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    function update() {
        requestAnimationFrame(update);
        ctx.clearRect(0, 0, width, height);
        if (sprite.xdone == false) {
            newPosX();
        }
        if ((sprite.cy != sprite.y) && (sprite.xdone == true)) {
            newPosY();
        }
        ctx.beginPath();
        ctx.arc(sprite.x, sprite.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    function newPosX() {
        if (sprite.cx == sprite.x) {
            sprite.xdone = true;
            console.log("hello");
        }
        if (sprite.cx > sprite.x) {
            sprite.x += 1  ;
        } else {
            sprite.x -= 1;
        }
    }
    function newPosY() {
        if (sprite.cy > sprite.y) {
            sprite.y++;
        } else {
            sprite.y--;
        }
    }
    update();

    document.body.addEventListener("click", function (e) {
        sprite.xdone = false;
        sprite.cx = e.x;
        sprite.cy = e.y;
    })
}