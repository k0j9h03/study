class Brick{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.hit = false;

    }

    draw(){
        push();
        fill( this.hit ? 'red' : 230);
        noStroke();
        angleMode(DEGREES);
        rectMode(CENTER);
        translate(this.x,this.y);
        rect(0,0,this.r,this.r);
        pop();
    }

}