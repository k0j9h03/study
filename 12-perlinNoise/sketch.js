let offset = 0;
let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;



function setup() {
    createCanvas(660, 660);
   
}

function draw() {
    // background(255);
    x1 = noise(offset+10)*width;
    x2 = noise(offset+20)*width;
    x3 = noise(offset+30)*width;
    x4 = noise(offset+40)*width;
    y1 = noise(offset+50)*height;
    y2 = noise(offset+60)*height;
    y3 = noise(offset+70)*height;
    y4 = noise(offset+80)*height;
    offset += 0.01;

    strokeWeight(0.5);
    noFill();
    bezier(x1,y1,x2,y2,x3,y3,x4,y4);


}