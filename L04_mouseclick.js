let shapecoulour = 'blue';

function setup(){
    createCanvas(600,400);
    background(220);
}

 function draw() {
    fill(shapecoulour);
    circle(300,200,300);
    fill(random(255),random(255),random(255))
 }

 function mousePressed() {
    shapecoulour = 'red';
 }

function mouseReleased() {
    shapecoulour = 'blue';
}