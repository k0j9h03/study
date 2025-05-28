class Dial{
    constructor(x,y,s){
        this.x = x;
        this.y = y;
        this.s = s;
        this.s2 = s* 0.5;

    }

    dialDrawRoatate(){
        push();
        angleMode(DEGREES);
        rectMode(CENTER);
        translate(this.x, this.y); // 좌표 기준점 이동 > 이때 기준점은 각 개별의 중심점이 되도록 파라미터값(격자의 영향을 받은)을 받아오는거다 꼭 기억!
        let angle = atan2(mouseY - this.y, mouseX- this.x,);
        rotate(angle);
        rect(0,0,this.s,this.s2);
        pop();

}
}