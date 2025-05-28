let cols; let rows;
let spacing = 35;
let size = [];

function setup(){
    createCanvas(700,700);
    cols = width / spacing;
    rows = height / spacing;
    for (let i =0; i<cols; i++){
        size[i] = []; 
        for(let j =0; j<rows; j++){
            size[i][j]=(i+1)/rows*spacing;
            // size[i][j]=(j+1)/rows*spacing;

        }
    }
}

function draw(){
    background(0);
    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
            noStroke();
            fill(255);
            ellipse( spacing*i + spacing/2,spacing*j+spacing/2,size[i][j],size[i][j])
        }
    } 


}