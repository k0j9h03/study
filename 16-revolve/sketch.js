let r= 100;
let dr = 1;
let c;
let d;


function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
    c = new Pack(width/2, height/2, 10, 180, 90);
    d = new Pack(width/2, height/2, 10, 180, -90);
}

function draw() {
    background(0,50);
    c.displayPack();
    d.displayPack();
    c.moveCircle(1);
    d.moveCircle(1);

}