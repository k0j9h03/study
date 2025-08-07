class Letter{
    constructor(ox, oy, r, angle, startAngle , isLetter){
        this.ox = ox;
        this.oy = oy;
        this.r = r;
        this.startAngle = startAngle;
        this.angle = angle;

        this.isLetter = isLetter;


    }

    draw(){
        push();
        translate( this.ox, this.oy);
        let x = this.r * cos(this.startAngle + this.angle);
        let y = this.r * sin(this.startAngle + this.angle);

        if(this.isLetter == true){
            noStroke();
        } else{
            stroke(0);
        }

        line(0, 0, x, y);
        fill(0);

        // 직교하는 방향 벡터 구하기
        let perpX = -y;
        let perpY = x;

        // 길이 정규화 후 시각적 길이 조정
        let mag = sqrt(perpX * perpX + perpY * perpY);
        perpX = perpX / mag * 10; //
        perpY = perpY / mag * 10;

        // 직교 선 그리기 (양쪽 방향으로)
        line(x/2, y/2, (x + perpX)/2, (y + perpY)/2);
        line(x/2, y/2,(x - perpX)/2, (y - perpY)/2);
        pop();
    }

move() {

    // 기본 회전

    this.angle += 2;


    // if(this.isLetter == true){
    //     this.angle -= (this.increment1 * this.increment2) / 30000; // 혹은 this.angle %= 360;
    // } else{
    //     this.angle += (this.increment1 * this.increment2) / 1000;

    // }
    // // 너무 많이 돌면 리셋하거나 한계 설정
    // if (this.angle > 1800) {
    //     this.angle = 0; // 혹은 this.angle %= 360;
    //     this.angle += (this.increment1 * this.increment2) / 2000;

    // }
}
}