class Pack{
    constructor(x,y,n,size,startAngle){
        this.packx = x;
        this.packy = y;
        this.pack = [];

        this.size = size;
        this.startAngle = startAngle;
        this.n = n;
        this.angle = this.size / this.n;
        this.packr = 150;
        this.createCircle();
    }

    createCircle(){
        for(let i =0; i<this.n; i++){
            this.pack[i] = new Circle(this.packx + this.packr*cos(this.startAngle + this.angle*i),this.packy + this.packr*sin(this.startAngle + this.angle*i), (i)*0.1*60);
        }
    }

    displayPack(){
        for(let i =0; i<this.n; i++){

        this.pack[i].display();
        this.pack[i].move();
        }
    }

    moveCircle(speed){
        this.startAngle += speed;
        for(let i = 0; i<this.n; i++){
            this.pack[i].x = this.packx + this.packr*cos(this.startAngle + this.angle*i);
            this.pack[i].y = this.packx + this.packr*sin(this.startAngle + this.angle*i);
        }
    }


}