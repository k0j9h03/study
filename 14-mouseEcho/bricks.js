class DIAL{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.angle = 0;
        this.was = false;
        this.color = 130;

    }

    draw(){
        push();
        angleMode(DEGREES);
        rectMode(CENTER);
        translate(this.x, this.y); // 좌표 기준점 이동 > 이때 기준점은 각 개별의 중심점이 되도록 파라미터값(격자의 영향을 받은)을 받아오는거다 꼭 기억!
        rotate(this.angle);

        fill(13);
        noStroke();
        let distance = dist(mouseX,mouseY,this.x,this.y);


        if(distance < 30){
            this.color = 130;
            this.was = true;
            fill(this.color);
            this.angle += 5;
        } else if(distance > 30 && this.was == true){
            this.color -= 5;
            fill(this.color);
            this.angle += 1;
            if(this.was == true && this.color <= 13){
                this.color = 13;
                this.was = false;
    
            }
        }
    


        rect(0,0,this.r,this.r);


        pop();

    }
}