function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
  let circlediamiter = 30;
  let numcircles = 5;
  let totalwidth = numcircles * circlediamiter;
  let startX = (width - totalwidth) / 2 + circlediamiter / 2;
  let startY = (height - totalwidth) / 2 + circlediamiter / 2;

  for (let row = 0; row < numcircles; row++) {
    let rowY = startY + (circlediamiter * row);
    for (let i = 0; i  < numcircles; i++) {
    let x  = startX + i * circlediamiter;
    
    }
  }
}