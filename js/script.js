"use strict"


const canvas = document.getElementsByTagName('canvas')[0];
let rows = 30, cols = 30;
let xSize = 1, ySize = 1;
let size = 1;
canvas.width = 620;
canvas.height = 620;
let cordsx = 300, cordsy = 300;
let prevpos = "";
let up = 0;
let down = 0;
let right = 0;
let left = 0;
let ctx = board.getContext("2d");
function lose(){

    if(cordsx<0 || cordsx>600 || cordsy < 0 || cordsy>600){
        window.location.assign("https://aveteva.github.io/snake-game-working-only-for-computers/html/index.html");
        
    }


}
draw();

ctx.fillStyle = "yellow";

let applecordx = Math.floor(Math.random() * (560) + 1);
let applecordy = Math.floor(Math.random() * (600) +1);

ctx.fillRect(applecordx,applecordy,20,20);

   





function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(cordsx, cordsy, 600 / rows * xSize, 600 / cols * ySize);
    
}
let pos = [false, false];
let int = setInterval(() => { }, 1000);
document.addEventListener("keydown", (e) => {

    if (e.key === 'ArrowLeft' && pos[1] === false) {
        left = 0;
        pos[1] = true;
        pos[0] = false;

        clearInterval(int);

        if (prevpos === "up") {
            for (let i = 0; i <= up; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx, cordsy + 20 * i, 600 / rows * xSize, 600 / cols * ySize);
            }

            int = setInterval(() => {


                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsx -= 20;
                    left++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);
                     
                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx + 20 * (size + 1), cordsy, 600 / rows * xSize, 600 / cols * ySize);
                    ctx.fillRect(cordsx + i * 20, cordsy + 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);
                    draw();
                    lose();
                }
 
                draw();
            }, 250);
        }
        else if (prevpos === "down") {
            for (let i = 0; i <= down + 1; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx, cordsy - 20 * i, 600 / rows * xSize, 600 / cols * ySize);
            }
            int = setInterval(() => {


                for (let i = 1; i <= size; i++) {
                    
                    ctx.fillStyle = 'red';
                    cordsx -= 20;
                    left++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx + 20 * (size + 1), cordsy, 600 / rows * xSize, 600 / cols * ySize);
                    ctx.fillRect(cordsx + i * 20, cordsy + 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);
                    draw();
                    lose();
                }

                draw();
            }, 250);

        }
        else {
            int = setInterval(() => {

                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsx -= 20;
                    left++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx + 20 * (size + 1), cordsy, 600 / rows * xSize, 600 / cols * ySize);
                    ctx.fillRect(cordsx + i * 20, cordsy + 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);
                    draw();
                    lose();
                }

                draw();
            }, 250);

        }
        prevpos = "left";


    }
    else if (e.key === 'ArrowRight' && pos[1] === false) {
    right= 0;
        pos[1] = true;
        pos[0] = false;
        clearInterval(int);

        if (prevpos === 'up') {
            for (let i = 0; i <= up; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx, cordsy + 20 * i, 600 / rows * xSize, 600 / cols * ySize);
            }
            int = setInterval(() => {

                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsx += 20;
                    right++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx - 20 * (size + 1), cordsy, 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }

                draw();
            }, 250);
        }
        else if (prevpos === 'down') {
            for (let i = 0; i <= down; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx, cordsy - 20 * i, 600 / rows * xSize, 600 / cols * ySize);
            }
            int = setInterval(() => {

                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsx += 20;
                    right++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx - 20 * (size + 1), cordsy, 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }

                draw();
            }, 250);
        }
        else {
            int = setInterval(() => {

                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsx += 20;
                    right++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx - 20 * (size + 1), cordsy, 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }

                draw();
            }, 250);

        }
        prevpos = "right";
        right = 0;

    }
    else if (e.key === 'ArrowDown' && pos[0] === false) {
        down = 0;
        pos[0] = true;
        pos[1] = false;
        clearInterval(int);

        if (prevpos === 'right') {
            for (let i = 0; i <= right; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx - 20 * i, cordsy, 600 / rows * xSize, 600 / cols * ySize);
            }
            int = setInterval(() => {


                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsy += 20;
                    down++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx, cordsy - 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }

                draw();
            }, 250);
        }
        else if (prevpos === 'left') {
            for (let i = 0; i <= left; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx + 20 * i, cordsy, 600 / rows * xSize, 600 / cols * ySize);
            }
            int = setInterval(() => {


                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsy += 20;
                    down++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx, cordsy - 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }

                draw();
            }, 250);
        }
        else {
            int = setInterval(() => {


                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsy += 20;
                    down++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx, cordsy - 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }

                draw();
            }, 250);
        }
        prevpos = 'down';
    }
    else if (e.key === 'ArrowUp' && pos[0] === false) {

        up = 0;
        pos[0] = true;
        pos[1] = false;
        clearInterval(int);
        if (prevpos === 'left') {
            for (let i = 0; i <= left; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx + 20 * i, cordsy, 600 / rows * xSize, 600 / cols * ySize);
            }
            int = setInterval(() => {

                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsy -= 20;
                    up++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx, cordsy + 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }
                draw();
            }, 250);
        }
        else if (prevpos === 'right') {
            for (let i = 0; i <= right; i++) {
                ctx.fillStyle = "green";
                ctx.fillRect(cordsx - 20 * i, cordsy, 600 / rows * xSize, 600 / cols * ySize);
            }
            int = setInterval(() => {

                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsy -= 20;
                    up++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx, cordsy + 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }
                draw();
            }, 250);
        }
        else{
            int = setInterval(() => {

                for (let i = 1; i <= size; i++) {
                    ctx.fillStyle = 'red';
                    cordsy -= 20;
                    up++;
                    if(cordsx<=applecordx+20 && cordsx>=applecordx-20 && cordsy>=applecordy-20 && cordsy<=applecordy+20 ){
                        ctx.fillStyle = "green";
                        ctx.fillRect(applecordx,applecordy,20,20);
                        ctx.fillStyle = "yellow";

                     applecordx = Math.floor(Math.random() * (560) + 1);
                     applecordy = Math.floor(Math.random() * (600) +1);

                    ctx.fillRect(applecordx,applecordy,20,20);

                    size++;
                    document.getElementById("score").innerHTML= `Score:${size-1}`; 
                    }
                    ctx.fillStyle = "green";
                    ctx.fillRect(cordsx, cordsy + 20 * (size + 1), 600 / rows * xSize, 600 / cols * ySize);

                    draw();
                    lose();
                }
                draw();
            }, 250);

        }
        prevpos = "up";
    }

});

