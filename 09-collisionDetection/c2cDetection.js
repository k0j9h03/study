let cx;
let cy;
let cr;
let cr2;


function setup() {
    createCanvas(700, 700);
    cx = width / 2 ;
    cy = height / 2 ;
    cr = 100 ;
    cr2 = 20 ;
}

function draw() {
    background(230);

    let dx = mouseX - cx;
    let dy = mouseY - cy;
    let distance = sqrt((dx*dx)+(dy*dy));

    if(distance < cr+cr2){
        fill(255,255,0);
    } else{
            fill(255);
    }
    
    ellipse(cx,cy,cr*2,cr*2);

    fill(255,0,0)
    ellipse(mouseX,mouseY,cr2*2,cr2*2);
  
}