let columns = 10;
let rows = 10;
let colSize;
let rowSize;

function setup(){
    createCanvas(700, 700);
    colSize =  width / columns ;
    rowSize =  height / rows;
}

function draw(){
    background(220);
        for(let i=0; i < colSize; i++){
            for(let j=0; j<rowSize; j++){
                rect(colSize*i,rowSize*j,colSize,rowSize);
                ellipse(colSize/2 + colSize*i,rowSize/2 + rowSize*j,colSize,rowSize);
            }
        }

}
