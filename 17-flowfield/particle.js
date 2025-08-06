class Particle{
    constructor(x,y){
        this.position = createVector(x, y);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
    }


    applyForce(force){
        this.acceleration.add(force);
    }

    update(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    direction(flowfield){
        let i = floor(this.position.x / size);
        let j = floor(this.position.y / size);
        i = constrain(i, 0, cols-1);
        j = constrain(j, 0, rows-1)
        let force = createVector(flowfield[i][j].x ,flowfield[i][j].y );
        this.applyForce(force);

    }


    display(){
        ellipse(this.position.x , this.position.y, 10, 10);
    }


    checkEdges(){
        if (this.position.x > width){
            this.position.x = 0;
        }
        if (this.position.x < 0){
            this.position.x = width;
        }
        if (this.position.y > height){
            this.position.y = 0;
        }
        if (this.position.y < 0){
            this.position.y = height;
        }
    }
}