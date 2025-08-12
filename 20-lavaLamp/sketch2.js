let px = 200;
let py = 200;
let val;

let cols; 
let rows; 
let size = 14;
let grid = [];

let circles = [];
let num = 8;

function setup() {
  canvas = createCanvas(700, 700); 
  canvas.parent("canvas-container");

  cols = floor(width / size) + 1;
  rows = floor(height / size) + 1;

  for(let i = 0; i < cols; i++){
    grid[i] = [];
    for(let j = 0; j < rows; j++){
      grid[i][j] = 0;
    }
  }

  for(let i = 0; i < num; i++){
    circles[i] = new Circle();
  }

  textAlign(CENTER, CENTER);
  textSize(12);
}

function draw() {
  background(255);

  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      let val = 0;

      for(let k = 0; k < num; k++){
        let dx = i * size - circles[k].x;
        let dy = j * size - circles[k].y;
        val += circles[k].r * circles[k].r / (dx * dx + dy * dy);
      }

      grid[i][j] = val;

      noFill();
      stroke(200);

 if(val >= 1){

        noStroke();
        fill(0);

        text('똥', i * size + size / 2, j * size + size / 2);
        } else {
        // 아무 것도 그리지 않음 → 이모티콘 안 보임
        }
    }
  }

  for(let i = 0; i < num; i++){
    circles[i].display();
    circles[i].move();
  }
}


