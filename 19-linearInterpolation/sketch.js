let pt1; let pt2;


function setup() {

  canvas = createCanvas(700, 700); 
  canvas.parent("canvas-container");
  pt1 = createVector();
  pt2 = createVector(0,0);

  
}

function draw() {
  background(255);

  fill(255);
  ellipse(pt1.x, pt1.y, 50, 50);

  fill(255,255,0);

  pt1.x= mouseX;
  pt1.y= mouseY;

  pt2.x = lerp(pt2.x, pt1.x, 0.05);
  pt2.y = lerp(pt2.y, pt1.y, 0.05);
  ellipse(pt2.x, pt2.y, 50, 50);




}
