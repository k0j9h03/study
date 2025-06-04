class Brick{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.colliding = false;
        this.val = 0;
    }

    drawBrick(){

        if(this.colliding){
            fill(0,255,0);
        } else{
            fill(255,0,0);
        }

        rect(this.x,this.y,this.w,this.h);
    }

    collided(ball){
        let closeX = ball.x;
        let closeY = ball.y;

        if(ball.x >= this.x+this.w){
            closeX = this.x+this.w;
        } else if(ball.x <= this.x){
            closeX = this.x
        }

        if(ball.y >= this.y+this.h){
            closeY = this.y+this.h;
        } else if(ball.y <= this.y){
            closeY = this.y
        }

        let distance = dist(closeX,closeY,ball.x,ball.y)

        if(ball.r >= distance){
            this.colliding = true;
            this.val = 1;
            ball.dy = ball.dy*-1
                // if(ball.y > this.y){
                //     ball.dx = ball.dx*-1

                // }
        } else{
            this.colliding = false;


        }

    }



}