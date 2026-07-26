let shapecoulour = 'blue';
let x = 0
function setup(){
    createCanvas(600,400);
    background(220);
}

 function draw() {
    fill(shapecoulour);
    // circle(300,200,300);
    fill(random(255),random(255),random(255))
 }

 function mousePressed() {
    shapecoulour = color(random(255),random(255),random(255));
    rect(random(600),random(400),random(255),random(255))
 }

function mouseReleased() {
    shapecoulour = 'white';
    background(220);
}

function mouseMoved() {
    circle(300,200,x)
    
}