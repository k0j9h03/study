let r ;
let circle = [];
let rectagnle = [];
let ball ;


function setup() {
    createCanvas(700, 700);
    rectMode(CENTER);
}

function draw() {
    background(230);

    ball = new Ball(mouseX, mouseY);
    ball.drawBall();

    if(floor(random(0,10))==4){ // floor는 숫자 정수로 내림하는것
        circle.push(new Circle());
        rectagnle.push(new Rectangle());
    }

    for(let i =0; i< circle.length; i++){
        ball.colliding(circle[i]);
        circle[i].drawCircle();
        circle[i].moveCircle();
    }

    for(let i =0; i< rectagnle.length; i++){
        ball.colliding(rectagnle[i]);
        rectagnle[i].drawRectagle();
        rectagnle[i].moveRectagle();
    }

}