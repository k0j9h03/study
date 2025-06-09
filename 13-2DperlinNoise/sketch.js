let cols, rows; let size = 10;
let sizes = [];
let xoff=0;
let yoff=0;
let zoff=0;
let inc=0.1;


function setup() {
    createCanvas(660, 660);
    cols = width/size;
    rows = width/size;

    rectMode(CENTER);
    // for(let i =0; i<cols; i++){
    //     sizes[i] = [];
    //     yoff= 0;
    //     for(let j=0; j<rows; j++){
    //         sizes[i][j]= map(noise(xoff,yoff),0,1,0,size);
    //         yoff += inc;
    //     }
    //     xoff += inc;
    // }
}

function draw() {
    background(235);
    noStroke();

    xoff =0;

    for(let i =0; i<cols; i++){
        sizes[i] = [];
        yoff=0;
        for(let j=0; j<rows; j++){
            sizes[i][j]= map(noise(xoff,yoff,zoff),0,1,0,size);
            rect(i*size+size/2,j*size+size/2,sizes[i][j],sizes[i][j]);
            yoff += inc;
        }
        xoff += inc;
    }

    zoff += 0.01;


    fill(0);

    for(let i =0; i<cols; i++){
        for(let j=0; j<rows; j++){
            rect(i*size+size/2,j*size+size/2,sizes[i][j],sizes[i][j]);
        }
    }

}