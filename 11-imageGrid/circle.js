class Circle {
    constructor(x, y, r) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.baseR = r;
        this.r = r;
    }

    drawCircle() {
        ellipse(this.x, this.y, this.r, this.r);
    }

    moveCircle() {
        let d = dist(mouseX, mouseY, this.baseX, this.baseY);
        let maxDist = 100;
        let scale = map(d, 0, maxDist, 0.1, 1.0, true); // 가까울수록 커짐
        this.r = lerp(this.r, this.baseR * scale, 0.1);

        // 마우스 방향으로 살짝 밀림
        let offset = map(d, 0, maxDist, 15, 0, true); // 가까울수록 더 많이 밀림
        let angle = atan2(mouseY - this.baseY, mouseX - this.baseX);
        let targetX = this.baseX - cos(angle) * offset;
        let targetY = this.baseY - sin(angle) * offset;

        this.x = lerp(this.x, targetX, 0.1);
        this.y = lerp(this.y, targetY, 0.1);
    }
}
