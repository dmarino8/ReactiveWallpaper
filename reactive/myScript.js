let animation = new Image();

var stop = true;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

const sprite = {
    x: 1000,
    y: 400,
    cx: 500,
    cy: 400,
    dir: 4, //dir 0 = left, dir 1 = right
    speed: 1,
    width: 30,
    height: 30,
    xdone: false,
    image: animation
}

window.onload = function () {

    animation.src = 'sprite-sword1.png'

    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    function update() {

        requestAnimationFrame(update);
        changeFrame();

        ctx.clearRect(0, 0, width, height);
        if (sprite.xdone == false) {
            newPosX();
        }
        if ((sprite.y >= sprite.cy + 10 || sprite.y <= sprite.cy - 10) && (sprite.xdone == true)) {
            newPosY();
        }
        //ctx.beginPath();

        ctx.drawImage(animation, sprite.x, sprite.y);

        //ctx.arc(sprite.x, sprite.y, 10, 0, Math.PI * 2);
        //ctx.fill();
        //
    }

    startAnimating(10);
    function startAnimating(fps) {
        fpsInterval = 1000 / fps;
        then = Date.now();
        startTime = then;
        changeFrame();
    }

    let frame = 0;
    function changeFrame() {
        if (stop) {
            sprite.image.src = 'sprite-greenS-blueP-leftF4.png'
            return;
        }
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            if (sprite.dir == 0) {
                switch (frame) {
                    case 0: sprite.image.src = 'sprite-greenS-blueP-leftF4.png';
                            frame = 1;
                    break;
                    case 1: sprite.image.src = 'sprite-greenS-blueP-leftF5.png';
                            frame = 2;
                    break;
                    case 2: sprite.image.src = 'sprite-greenS-blueP-leftF6.png';
                            frame = 3;
                    break;
                    case 3: sprite.image.src = 'sprite-greenS-blueP-leftF7.png';
                            frame = 4;
                    break;
                    case 4: sprite.image.src = 'sprite-greenS-blueP-leftF8.png';
                            frame = 5;
                    break;
                    case 5: sprite.image.src = 'sprite-greenS-blueP-leftF9.png';
                            frame = 6;
                    break;
                    case 6: sprite.image.src = 'sprite-greenS-blueP-leftF10.png';
                            frame = 7;
                    break;
                    case 7: sprite.image.src = 'sprite-greenS-blueP-leftF11.png';
                            frame = 0;
                    break;
                    default: frame = 0;
                }
            } else if (sprite.dir == 1) {
                switch (frame) {
                    case 0: sprite.image.src = 'sprite-greenS-blueP-rightF4.png';
                            frame = 1;
                    break;
                    case 1: sprite.image.src = 'sprite-greenS-blueP-rightF5.png';
                            frame = 2;
                    break;
                    case 2: sprite.image.src = 'sprite-greenS-blueP-rightF6.png';
                            frame = 3;
                    break;
                    case 3: sprite.image.src = 'sprite-greenS-blueP-rightF7.png';
                            frame = 4;
                    break;
                    case 4: sprite.image.src = 'sprite-greenS-blueP-rightF8.png';
                            frame = 5;
                    break;
                    case 5: sprite.image.src = 'sprite-greenS-blueP-rightF9.png';
                            frame = 6;
                    break;
                    case 6: sprite.image.src = 'sprite-greenS-blueP-rightF10.png';
                            frame = 7;
                    break;
                    case 7: sprite.image.src = 'sprite-greenS-blueP-rightF11.png';
                            frame = 0;
                    break;
                    default: frame = 0;
                }
            } else if (sprite.dir == 2) {
                switch (frame) {
                    case 0: sprite.image.src = 'sprite-greenS-blueP-frontF4.png';
                            frame = 1;
                    break;
                    case 1: sprite.image.src = 'sprite-greenS-blueP-frontF5.png';
                            frame = 2;
                    break;
                    case 2: sprite.image.src = 'sprite-greenS-blueP-frontF6.png';
                            frame = 3;
                    break;
                    case 3: sprite.image.src = 'sprite-greenS-blueP-frontF7.png';
                            frame = 4;
                    break;
                    case 4: sprite.image.src = 'sprite-greenS-blueP-frontF8.png';
                            frame = 5;
                    break;
                    case 5: sprite.image.src = 'sprite-greenS-blueP-frontF9.png';
                            frame = 6;
                    break;
                    case 6: sprite.image.src = 'sprite-greenS-blueP-frontF10.png';
                            frame = 7;
                    break;
                    case 7: sprite.image.src = 'sprite-greenS-blueP-frontF11.png';
                            frame = 0;
                    break;
                    default: frame = 0;
                }
            } else if (sprite.dir == 3) {
                switch (frame) {
                    case 0: sprite.image.src = 'sprite-greenS-blueP-backF4.png';
                            frame = 1;
                    break;
                    case 1: sprite.image.src = 'sprite-greenS-blueP-backF5.png';
                            frame = 2;
                    break;
                    case 2: sprite.image.src = 'sprite-greenS-blueP-backF6.png';
                            frame = 3;
                    break;
                    case 3: sprite.image.src = 'sprite-greenS-blueP-backF7.png';
                            frame = 4;
                    break;
                    case 4: sprite.image.src = 'sprite-greenS-blueP-backF8.png';
                            frame = 5;
                    break;
                    case 5: sprite.image.src = 'sprite-greenS-blueP-backF9.png';
                            frame = 6;
                    break;
                    case 6: sprite.image.src = 'sprite-greenS-blueP-backF10.png';
                            frame = 7;
                    break;
                    case 7: sprite.image.src = 'sprite-greenS-blueP-backF11.png';
                            frame = 0;
                    break;
                    default: frame = 0;
                }
            } else if (sprite.dir == 4) {
                switch (frame) {
                    case 0: sprite.image.src = 'sprite-sword1.png';
                            frame = 1;
                            sprite.speed=0;
                    break;
                    case 1: sprite.image.src = 'sprite-sword2.png';
                            frame = 2;
                            sprite.speed=1;
                    break;
                    case 2: sprite.image.src = 'sprite-sword3.png';
                            frame = 3;
                            sprite.speed=2;
                    break;
                    case 3: sprite.image.src = 'sprite-sword4.png';
                            frame = 4;
                            sprite.speed=3;
                    break;
                    case 4: sprite.image.src = 'sprite-sword5.png';
                            frame = 5;
                            sprite.speed=2;
                    break;
                    case 5: sprite.image.src = 'sprite-sword6.png';
                            frame = 6;
                            sprite.speed=1;
                    break;
                    case 6: sprite.image.src = 'sprite-sword7.png';
                            frame = 0;
                            sprite.speed=0;
                    break;
                    default: frame = 0;
                }
            }
            
        }
    }

    requestAnimationFrame(update)

    function newPosX() {
        if (sprite.x <= sprite.cx + 10 && sprite.x >= sprite.cx - 10) {
            sprite.xdone = true;
        }
        if (sprite.cx > sprite.x) {
            sprite.x += 1 * sprite.speed;
            sprite.dir = 4;
        } else {
            sprite.x -= 1 * sprite.speed;
            sprite.dir = 4;
        }
    }
    function newPosY() {

        if (sprite.y <= sprite.cy + 15 && sprite.y >= sprite.cy - 15) {
            stop = true;
        }

        if (sprite.cy > sprite.y) {
            sprite.y += 1 * sprite.speed;
            sprite.dir = 4;
        } else {
            sprite.y -= 1 * sprite.speed;
            sprite.dir = 4;
        }
    }

    document.body.addEventListener("click", function (e) {
        stop = false;
        sprite.xdone = false;
        sprite.cx = e.x;
        sprite.cy = e.y;
    })
}