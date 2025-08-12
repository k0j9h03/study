let cols; let rows; let size = 4;
let grid = [];


/** 실행 */
function setup() {
  canvas = createCanvas(700, 700); 
  canvas.parent("canvas-container");

  cols = width/size;
  rows = height/size;



  for(let i=0; i<cols; i++){
    grid[i]= [];
    for(let j=0; j<rows; j++){
      grid[i][j] = floor(random(2));
    }
  }

}

/** 업데이트 */
function draw() {
  background(255);
  displayGrid();

  let nextGen = [];

  for(let i=0; i<cols; i++){
    nextGen[i] = [];
    for(let j=0; j<rows; j++){


        let n = neighboringStates(grid,i,j);
            if (grid[i][j] == 1 && n<2 ){
              nextGen[i][j] = 0;
            } else if( grid[i][j] ==1 && (n==2 || n==3) ){
              nextGen[i][j] = 1;
            } else if( grid[i][j] ==1 && ( n>3)){
              nextGen[i][j] = 0;
            } else if( grid[i][j] ==0 && ( n == 3)){
              nextGen[i][j] = 1;
            } else {
              nextGen[i][j] = grid[i][j];
            }

      

    }
  }

  grid = nextGen;


}


/** 환원 */
function neighboringStates(grid,x,y){
  let sum =0;
  for (let i= -1; i<2; i++){
    for (let j=-1; j<2; j++){

      let xIndex = (x+i+cols)%cols;
      let yIndex = (y+j+rows)%rows;

      sum += grid[xIndex][yIndex];

    }
  }
  sum -= grid[x][y];

  return sum;
}



/** 격자  */
function displayGrid(){

    for(let i=0; i<cols; i++){
      for(let j=0; j<rows; j++){
        if(grid[i][j] === 0){
          fill (255);
        } else {
          fill (0);
        }        
        
        noStroke();
        rect(i*size, j*size, size,size);
      }
    }

}