let shapecoulour = 'random(255),random(255)';

function setup(){
    createCanvas(600,400);
    background(220);
}

 function draw() {
    fill(shapecoulour);
    // circle(300,200,300);
    fill(random(255),random(255),random(255));
      circle(300,200,shapecoulour);
 }

//  function mousePressed() {
//     shapecoulour = color(random(255),random(255),random(255));
//     rect(random(600),random(400),random(255),random(255))
//  }

function mouseReleased() {

    background(220);
}
function mouseDragged(){
    circle(mouseX+random(-10,10),mouseY+random(-10,10),random(10,30)) 
  
}