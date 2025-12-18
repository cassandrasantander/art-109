
let canvas; 
let xPos = 0;
let yPos = 0;
let easing = .01;



function setup () {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    
}

function windowResize() {
resizeCanvas(windowWidth, windowheight);
}

function draw () {
    clear();

xPos = xPos + ((mouseY - xPos) * easing);
yPos = yPos + ((mouseY - yPos) * easing);


    drawThing(xPos, yPos);
}


function drawThing(_x,_y) {
    strokeWeight (1);
    fill(255,50,100);
    ellipse (mouseX, mouseY, 40, 40);
    fill(50,200,50);
    ellipse (mouseX, mouseY, 30, 30);
}
