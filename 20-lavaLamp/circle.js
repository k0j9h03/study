class Circle{
    constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.r = random(20,70);
        this.dx = 2;
        this.dy = 1;
    }

    display(){
        noFill();
        noStroke();
        ellipse(this.x, this.y, this.r*2,this.r*2);
    }

    move(dx,dy){
        this.x = this.x += this.dx;
        this.y = this.y += this.dy;

        if(this.x >= width - this.r || this.x < 0 + this.r){
            this.dx *= -1;
        } if(this.y >= height - this.r || this.y < 0 + this.r){
            this.dy *= -1;
        }

    }

}