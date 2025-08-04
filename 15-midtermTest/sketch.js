let cols, rows;
let size = 28;
let brick = [];
let ball;


function setup() {
    createCanvas(700, 700);
    cols = width / size;
    rows = height / size;

    for(let i=0; i<cols; i++){
        brick[i] = [];
        for(let j=0; j<rows; j++){
            brick[i][j] = new Brick( (size/2) + i*size, (size/2) + j*size, size);
        }
    }
}

function draw() {
    background(777);

    ball = new Ball(mouseX,mouseY,size*3,size*3);
    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
            brick[i][j].draw();
            ball.colliding(brick[i][j]);
        }
    }
    ball.draw();
}