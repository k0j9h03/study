let cols; 
let rows;
let size = 50;
let arrows = [];
let xoff =0;
let yoff =0;
let increment = 0.05;
let r= size/2;
let zoff =0;
let p;
let plurals = []; let num = 30;



function setup() {
    createCanvas(700, 700);
    cols = width / size;
    rows = height / size;
    angleMode(DEGREES);
    p = new Particle( random(0,width) , random(0,height)  );
    for(let i=0; i<num; i++){
        plurals[i] = new Particle(random(0,width) , random(0,height));
    }

}

function draw() {
    background(255);
    xoff=0;
    for(let i =0; i<cols; i++){
        yoff = 0;
        arrows[i] = [];
        for(let j=0; j<rows; j++){
            let angle = map(noise(xoff, yoff, zoff),0,1,0,360);
            // rect(i*size,j*size,size,size);
            // text(round(angle,1), size/2 + i*size, size/2+j*size);
            arrows[i][j] = createVector(cos(angle),sin(angle));
            let pt0 = createVector(size/2 + size*i , size/2 + size*j);
            let pt1 = createVector(r* arrows[i][j].x, r*arrows[i][j].y);
            line(pt0.x, pt0.y, pt0.x+pt1.x, pt0.y+pt1.y)

            yoff += increment;
        }
        xoff += increment;
        zoff += increment/80;
    }

    p.display();
    p.update();
    p.checkEdges();
    p.direction(arrows)

    for(let i=0; i<num; i++){
        plurals[i].display();
        plurals[i].update();
        plurals[i].checkEdges(); 
        plurals[i].direction(arrows); 

    }

}