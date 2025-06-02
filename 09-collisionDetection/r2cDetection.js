let x;
let y;
let w;
let h;
let r = 20;



function setup() {
    createCanvas(700, 700);
    x = width/2;
    y = height/2;
    w = 150;
    h = 70;

}

function draw() {
    background(230);

    let closeX = mouseX;
    let closeY = mouseY;

    if(mouseX >= x+w){
        closeX = x+w;
    } else if(mouseX <= x){
        closeX = x;
    }

   if(mouseY >= y+h){
        closeY = y+h;
    } else if(mouseY <= y){
        closeY = y;
    }

    let dx = mouseX-closeX;
    let dy = mouseY-closeY;
    let distance = sqrt((dx*dx)+(dy*dy));

    if(distance <= r){
        fill(255,0,0);
    } else{
        fill(0);
    }
    rect(x,y,w,h);

    fill(255,0,0);
    ellipse(mouseX,mouseY,r*2,r*2);

}