class Circle{
    constructor(){
        this.x = random(0,width);
        this.y = random(0,-30);
        this.r = random(10,20);
        this.dy = 2;
        this.colliding = false
        
    }

    drawCircle(){
        noStroke();

        if(this.colliding){
            fill(250,0,0,100);
        }else{
            fill(250,250,250,100);
        }


        ellipse(this.x,this.y,this.r*2,this.r*2);
    }

        moveCircle(){
        this.y = this.y + this.dy;
    }
}