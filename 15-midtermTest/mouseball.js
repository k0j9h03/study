class Ball{
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    draw(){
        noStroke();
        fill(333);
        ellipse(this.x,this.y,this.z,this.z);
    }

 colliding(obj) {
        let radius = this.z / 2;

        // 사각형 중심 좌표와 크기
        let objX = obj.x;
        let objY = obj.y;
        let objW = obj.r;
        let objH = obj.r;

        // 원 중심에서 사각형 내 가장 가까운 점
        let closestX = constrain(this.x, objX - objW / 2, objX + objW / 2);
        let closestY = constrain(this.y, objY - objH / 2, objY + objH / 2);

        // 거리 계산
        let distance = dist(this.x, this.y, closestX, closestY);

        // 충돌 여부에 따라 obj.hit 설정
        obj.hit = distance < radius;
    }
}