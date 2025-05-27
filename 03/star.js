
class Star {
    constructor(angle, r){
        this.angle = angle;
        this.r = r;
    }

    update(){
        this.x = this.r * cos(this.angle);
        this.y = this.r * sin(this.angle);
    }

    display(){
        // line(0, 0, this.x, this.y);
        // ellipse(this.x, this.y, 10, 10);
    }
}
