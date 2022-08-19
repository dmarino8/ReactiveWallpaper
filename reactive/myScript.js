
const sprite = {
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    dx: 0,
    dy: 0,
    cx: 0,
    cy: 0,
    velx: 0,
    vely: 0,
    friction: 0.98,
    speed: 10,
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
/*      
        if (sprite.vely > -sprite.speed) {
            sprite.vely--;
        }
        if (sprite.vely < sprite.speed) {
            sprite.vely++;
        }
        if (sprite.velx < sprite.speed) {
            sprite.velx++;
        }
        if (sprite.elx > -sprite.speed) {
            sprite.velx--;
        }
*/

        //the total should be 2 but needs to be split depending on the angle
        sprite.velx += ((1 / sprite.speed) * sprite.dx);
        sprite.vely += ((1 / sprite.speed) * sprite.dy);

        //sprite.vely *= sprite.friction;
        sprite.y += sprite.vely;
        //sprite.velx *= sprite.friction;
        sprite.x += sprite.velx;

        if (sprite.x > sprite.cx) {
            sprite.velx = 0;
            sprite.vely = 0;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(sprite.x, sprite.y, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    update();

    document.body.addEventListener("click", function (e) {
        sprite.px = sprite.cx;
        sprite.py = sprite.cy;
        sprite.cx = e.x;
        sprite.cy = e.y;

        //rate of change of dx and dy

        /*
        let tan = 0;
        tan = Math.atan((sprite.cy - sprite.py) / (sprite.cx - sprite.px));
        */

        let slope = 0;
        slope = (sprite.cy - sprite.py) / (sprite.cx - sprite.px);
        console.log(slope);

        sprite.dx = 1
        sprite.dy = slope * 1;

        //console.log(sprite.dx + " : dx");
        //console.log(sprite.dy + " : dy");


        //console.log(sprite.cx + " " + sprite.cy);
    })
}