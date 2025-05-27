let outer = [];
let inner = [];
let outerNumber = 18;
let innerNumber = 3;
let radius = 100;
let radius2 = 30;
let speed = 0.31;

function setup(){
    createCanvas(700, 700);
    angleMode(DEGREES);

    let unitAngle1 = 360 / outerNumber;
    let unitAngle2 = 360 / innerNumber;

    for(let i = 0; i < outerNumber; i++) {
        let angle = unitAngle1 * i;
        outer[i] = new Star(angle, radius);
    }

    for(let i = 0; i < innerNumber; i++) {
        let angle = unitAngle2 * i;
        inner[i] = new Star(angle, radius2);
    }

    //   frameRate(5); // 초당 10프레임으로 설정
}

function draw(){
    background(220);
    translate(width / 2, height / 2);

    // 외곽 고정
    for(let i = 0; i < outerNumber; i++) {
        outer[i].update();
        outer[i].display();
    }

    // 내부 회전
    for(let i = 0; i < innerNumber; i++) {
        inner[i].angle += 1;
        inner[i].update();
        inner[i].display();
    }

    // 연결선
    for(let i = 0; i < outerNumber; i++) {
        for(let j = 0; j < innerNumber; j++) {
            line(outer[i].x, outer[i].y, inner[j].x, inner[j].y);
        }
    }
}
