let shapecoulour = 'blue';

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

function mouseDragged() {
    ellipse(mouseX,mouseY,5,5);
}