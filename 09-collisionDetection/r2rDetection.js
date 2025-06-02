let x;
let y;
let w;
let h;
let w2 = 150;
let h2 = 200;


function setup() {
    createCanvas(700, 700);
    translate(width/2,height/2);
    x = width/2;
    y = height/2;
    w = 200;
    h = 150;
    
}

function draw() {
    background(230);

    fill(0)
    if(mouseX+w2 >= x && mouseX <= x+w){
        if(mouseY +h2 >= y && mouseY <= y+h  ){
            fill(255);
        }
    }

    rect(x,y,w,h);


    
    fill(255,0,0);
    rect(mouseX,mouseY,w2,h2)
}