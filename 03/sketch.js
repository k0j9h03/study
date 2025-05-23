let s;
let outer = [];
let outerNumber = 19;
let radius = 80;

function setup(){
    // createCanvas(innerWidth,innerHeight);
    createCanvas(700,700)
    angleMode(DEGREES);

}


function draw(){
    background(220);
    translate(width/2,height/2);
    let TWO_PI = 360;

    for(let i=0;  i<outerNumber; i++ ){
        let unitAngle = TWO_PI/outerNumber;
        let drawenAngle = unitAngle * i;
        outer[i] = new Star(drawenAngle , radius);
        outer[i].update();
        outer[i].display();
    }

    

}