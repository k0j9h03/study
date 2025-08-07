let cols; let rows;
let size = 10;
let angle = 0;
let r = 100;
let letter= [];

let img;
let c;
let canvas;

function preload(){
    img = loadImage('img/img2.jpg');
}

function setup() {

  canvas = createCanvas(700, 700); 
  canvas.parent("canvas-container");


  angleMode(DEGREES);
  cols = width/size;
  rows = height/size;

  for(let i=0; i<cols; i++){
    letter[i] = [];
    for (let j=0; j<rows; j++){
        c = img.get(i*size,j*size);
        let isLetter = false;
        if(brightness(c) < 10){
            isLetter = true;
        } else{
            isLetter = false;
        }
        letter[i][j] = new Letter(i*size, j*size, 10, 0, i*j/10, isLetter);
    }
  }

  
}

function draw() {
  background(255);

  for(let i=1; i<cols; i++){
    for (let j=1; j<rows; j++){
        letter[i][j].draw();
        letter[i][j].move();

        }
  }

//   image(img,0,0);
}
