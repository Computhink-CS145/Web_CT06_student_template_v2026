let shapecoulour = 'blue';

function setup(){
    createCanvas(600,400);
    background(220);
}

 function draw() {
    fill(shapecoulour);
    circle(300,200,300);
    fill()
 }

 function mousePressed() {
    shapecoulour = 'red';
 }

function mouseReleased() {
    shapecoulour = 'blue';
}