
const sprite = {
    x: 500,
    y:400,
    cx: 0,
    cy: 0,
    px: 0,
    py: 0,
    angle: 0.5 * Math.PI,
    dir : 0, //dir 0 = left, dir 1 = right
    speed: 1,
    width: 30,
    height: 30
}

window.onload = function () {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    function update() {
        requestAnimationFrame(update);
        newPos();
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(sprite.x, sprite.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
    function newPos() {
        sprite.x += sprite.speed * Math.sin(sprite.angle);
        sprite.y -= sprite.speed * Math.cos(sprite.angle);
    }
    update();

    document.body.addEventListener("click", function (e) {

        sprite.px = sprite.cx;
        sprite.py = sprite.cy;
        sprite.cx = e.x;
        sprite.cy = e.y;

        sprite.angle = (Math.abs(Math.atan((sprite.cy - sprite.y) / (sprite.cx - sprite.x))) * (180 / Math.PI));
        
        console.log(sprite.angle);

    })
}