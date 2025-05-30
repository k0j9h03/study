class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 25;

    }

    drawBall(){
        fill(100);
        ellipse(this.x, this.y, this.r*2,this.r*2);
    }

    colliding(object){
        let distance = dist(object.x,object.y,this.x,this.y)
        if( distance <= object.r + this.r){
            object.colliding = true;
        } else{
            object.colliding = false;

        }

    }
}