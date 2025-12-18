

let currentkey = '1';

function setup() {
  createCanvas(700,700);
  background(50,50,180);
  fill(255);
}

function draw() {

     if( keyIsPressed) {
      clear_print();
    }
    
    if(mouseIsPressed) {
     drawChoice();
    }
}


function drawChoice() {
  let currentkey = key;

  switch(currentkey) {
case '1':
  console.log("1");  
  stars(color(250), mouseX, mouseY, pmouseX, pmouseY);
  break;
  
case '2':
  console.log("2");  
  draglines(color(250), mouseX, mouseY, pmouseX, pmouseY);
  break;

  default:             
  console.log("None");   
  break;

  }
}

function stars( k,  lx, ly,  px, py) {
  
  line(lx, ly, px, py);
  stroke(300);
  console.log(mouseX);
  console.log(pmouseX);
  ellipse(400);
  fill(250)
}

  function draglines( k,  lx, ly,  px, py) {
  
  strokeWeight(10);
  stroke(250);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
  ellipse(50);
  fill(250);
  }



function clear_print() {

  if (key == 'x' || key == 'X') {
    background(50,50,180);
  } else if (key == 's' || key == 'S') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  
  }

}