let cols, rows;
let size = 14;
let brick = [];


function setup() {
    createCanvas(700, 700);
    cols = width / size;
    rows = height / size;

    for(let i= 0; i < cols; i++){
        brick[i] = [];
        for(let j = 0; j < rows; j++){
            brick[i][j] = new DIAL(i*size+(size/2),j*size+(size/2),size/1.5);
        }
    }
}

function draw() {
    background(0);
    for(let i= 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            brick[i][j].draw();
        }
    }
   

}