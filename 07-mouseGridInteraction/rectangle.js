class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.isColliding = false;
    }

    draw() {
        if (this.isColliding) {
            fill(0);
        } else {
            fill(255);
        }
        rect(this.x, this.y, this.w, this.h); // CENTER 기준
    }

    collided(cx, cy, r) {
        // CENTER 기준으로 변경
        let closeX = constrain(cx, this.x - this.w / 2, this.x + this.w / 2);
        let closeY = constrain(cy, this.y - this.h / 2, this.y + this.h / 2);
        let dx = cx - closeX;
        let dy = cy - closeY;
        let distSq = dx * dx + dy * dy;
        this.isColliding = distSq < r * r;
        return this.isColliding;
    }
}