
let canvas; 

function setup () {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    //  background(225);
}

function windowResize() {
resizeCanvas(windowWidth, windowheight);
}

function draw () {
    
}

function mouseMoved() {
    drawThing();
}

function drawThing() {
    strokeWeight (1);
    fill(random(0,255,10), random(200,255,0), random(100,0,50));
    ellipse (mouseX, mouseY, 30, 30);
}