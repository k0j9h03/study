class Circle{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dr = 1;
    }

    display(){
        noFill();
        stroke('FFF');
        ellipse(this.x,this.y,this.r,this.r);

    }

    move(){
        this.r = this.r+this.dr;
        if (this.r > 100 || this.r <0){
            this.dr *= -1;
        }
    }
}