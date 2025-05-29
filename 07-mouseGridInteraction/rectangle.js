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
        rect(this.x, this.y, this.w, this.h);
    }

    collided(cx, cy, r) {
        let closeX = constrain(cx, this.x, this.x + this.w);
        let closeY = constrain(cy, this.y, this.y + this.h);
        let dx = cx - closeX;
        let dy = cy - closeY;
        let distSq = dx * dx + dy * dy;
        this.isColliding = distSq < r * r;
        return this.isColliding;
    }
}
