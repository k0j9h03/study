let px = 200;
let py = 200;
let val;

let cols; let rows; let size = 7;
let grid = [];

let circles = [];
let num = 5;

function setup() {
  canvas = createCanvas(700, 700); 
  canvas.parent("canvas-container");

  cols = width/size +1 ;
  rows = height/size +1 ;

  for(let i=0; i<cols; i++){
    grid[i]= [];
     for(let j=0; j<rows; j++){
          grid[i][j]= 0;
     }
  }

  for(let i=0; i<num; i++){
    circles[i] = new Circle();
  }
}





function draw() {
  background(255);

  
  for(let i=0; i<cols; i++){
     for(let j=0; j<rows; j++){
          let val = 0;

        for(let k=0; k<num; k++){
          val += circles[k].r * circles[k].r / ( (i*size - circles[k].x)**2 + (j*size - circles[k].y)**2 );
  
        }

        grid[i][j] = val;


          noFill();
          rect(i*size,j*size,size,size)

          if(val >= 1){
            fill(0,0,0);
          } else{
            noStroke();
            fill(255);
          }

          ellipse(i*size, j*size, 5, 5);
          // text(round(val, 2), i*size, j*size - 10);

     }
  }



    for(let i=0; i<num; i++){

    circles[i].display();
    circles[i].move();
  }

}