let cols; let rows; let size = 14;
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

    frameRate(10);

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



        function mousePressed() {
            // 마우스 주변의 정사각형 영역 내 셀들을 순회합니다. 이 영역은 원하는 원을 덮을 만큼 충분히 넓습니다.
            // 마우스의 왼쪽/위쪽 'size' 픽셀에서 시작하여 오른쪽/아래쪽 'size' 픽셀에서 끝납니다.
            for (let i = floor((mouseX - size) / size); i <= floor((mouseX + size) / size); i++) {
                for (let j = floor((mouseY - size) / size); j <= floor((mouseY + size) / size); j++) {
                    // 현재 셀이 그리드 경계 내에 있는지 확인합니다.
                    if (i >= 0 && i < cols && j >= 0 && j < rows) {
                        // 현재 셀의 중심 좌표를 계산합니다.
                        let cellCenterX = i * size + size / 2;
                        let cellCenterY = j * size + size / 2;

                        // 마우스 위치에서 셀 중심까지의 거리가 'size' (반경) 이내인지 확인합니다.
                        if (dist(mouseX, mouseY, cellCenterX, cellCenterY) <= size) {
                            // 셀의 상태를 토글합니다 (0에서 1로, 또는 1에서 0으로).
                            grid[i][j] = 1 - grid[i][j];
                        }
                    }
                }
            }
        }

 
        function mouseDragged() {
            // 마우스 주변의 정사각형 영역 내 셀들을 순회합니다. 이 영역은 원하는 원을 덮을 만큼 충분히 넓습니다.
            for (let i = floor((mouseX - size) / size); i <= floor((mouseX + size) / size); i++) {
                for (let j = floor((mouseY - size) / size); j <= floor((mouseY + size) / size); j++) {
                    // 현재 셀이 그리드 경계 내에 있는지 확인합니다.
                    if (i >= 0 && i < cols && j >= 0 && j < rows) {
                        // 현재 셀의 중심 좌표를 계산합니다.
                        let cellCenterX = i * size + size / 2;
                        let cellCenterY = j * size + size / 2;

                        // 마우스 위치에서 셀 중심까지의 거리가 'size' (반경) 이내인지 확인합니다.
                        if (dist(mouseX, mouseY, cellCenterX, cellCenterY) <= size) {
                            // 셀의 상태를 활성화(1)로 설정합니다.
                            grid[i][j] = 1;
                        }
                    }
                }
            }
        }