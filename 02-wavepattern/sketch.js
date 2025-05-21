
let grid = [];
let cols = 10;
let rows = 10;
let loc = 50;

function setup(){
    // createCanvas(innerWidth,innerHeight);
    createCanvas(700,700)

    let rowSize = height/rows
    let colSize = width/cols

    for(let i = 0; i<cols; i++ ){
        grid[i] = [];
        for(let j = 0; j<rows; j++){
            grid[i][j] = new cell(i*colSize+(colSize/2),j*rowSize+(rowSize/2),colSize/2,i/10 + j/10);
        }
    }

}


function draw(){
    background(220);
    let rowSize = height/rows
    let colSize = width/cols
    for(let i = 0; i<cols; i++ ){
        for(let j = 0; j<rows; j++){
            grid[i][j].update();
            grid[i][j].display();
        }
    }
}