let columns = 30;
let rows = 30;
let colSize;
let rowSize;

function setup(){
    createCanvas(700, 700);
    colSize =  width / columns ;
    rowSize =  height / rows;
}

function draw(){
    background(220);
        for(let i=0; i < columns; i++){
            for(let j=0; j<rows; j++){
                rect(colSize*i,rowSize*j,colSize,rowSize);
                ellipse(colSize/2 + colSize*i,rowSize/2 + rowSize*j,colSize,rowSize);
            }
        }

}
