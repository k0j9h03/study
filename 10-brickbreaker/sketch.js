let brick;
let ball;
let cols;
let rows;
let spacing = 70;
let bricks = [];

function setup() {
    createCanvas(700, 700);
    cols = width /spacing;
    rows = (height / spacing) - 5;

    // brick = new Brick(width/2,height/2,100,200);
    ball = new Ball(width/2,height/2,20);

    for(let i =0; i<cols; i++){
        bricks[i] = [];
        for(let j=0; j<rows; j++){
            bricks[i][j] = new Brick(i*spacing,j*spacing,spacing,spacing);
        }
    }

}

function draw() {
    background(230);

    for(let i =0; i<cols; i++){
        for(let j=0; j<rows; j++){
            if(bricks[i][j].val == 0){
                bricks[i][j].drawBrick();
                bricks[i][j].collided(ball);
            }

        }
    }

    ball.drawBall();
    ball.moveBall();


}