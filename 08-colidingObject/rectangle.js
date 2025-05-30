class Rectangle{
    constructor(){
        this.x = random(0,width);
        this.y = random(0,100);
        this.r = random(10,20);
        this.dy = 2;
        this.colliding = false

    }

    drawRectagle(){
        noStroke();
        
        if(this.colliding){
            fill(250,0,0,100);
        }else{
            fill(250,250,250,100);
        }


        rect(this.x,this.y,this.r,this.r);
    }

    moveRectagle(){
        this.y = this.y + this.dy;
    }
}