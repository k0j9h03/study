let cols;
let rows;
let spacing = 70;
let size = 60;

let boxes = [];


function setup(){
    createCanvas(700,700);
    cols = width / spacing;
    rows = height / spacing;

    for(let i=0; i<cols; i++){
        boxes[i] = [];
        for(let j = 0; j<rows; j++ ){
            boxes[i][j] = new Dial(spacing/2 + i*spacing ,spacing/2+j*spacing ,size)
        }
    }

    console.log(width, height) 

}

function draw(){
    background(255);
    for(let i=0; i<cols; i++){
        for(let j = 0; j<rows; j++ ){
            boxes[i][j].dialDrawRoatate();
        }
    }

}