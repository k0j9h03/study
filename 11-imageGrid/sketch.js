let img;
let cols, rows;
let size = 10;
let circleList = [];


function setup() {
    createCanvas(400, 660);
    img = loadImage('image/image.png')
    cols = width/size;
    rows = height/size;

    for(let i =0; i<cols; i++){
        circleList[i] = [];
        for(let j =0; j<rows; j++){
            circleList[i][j] = new Circle(size/2+i*size,size/2+j*size,size-size/15);
        }

    }

}

function draw() {
    background(255);
    img.resize(400,0)
    // image(img,0,0)
    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
            let c = img.get(i*size,j*size);
            fill(c);
            stroke(c);
            // rect(i*size,j*size,size,size);
            // ellipse(size/2+i*size,size/2+j*size,size-size/15,size-size/15);
            circleList[i][j].drawCircle();
            circleList[i][j].moveCircle();

        }
    }

}