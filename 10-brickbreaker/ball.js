class Ball{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = 2;
        this.dy = 3;
    }

    drawBall(){
        fill(255,0,0);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }

    
    moveBall(){
        this.x += this.dx;
        this.y += this.dy;


        /** 경계조건 */
        if(this.x-this.r < 0 || this.x+this.r > width){
            this.dx = this.dx*  -1
        } 

        if(this.y-this.r < 0 || this.y+this.r > height){
            this.dy = this.dy*  -1
        } 

    }

}