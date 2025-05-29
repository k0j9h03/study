let r;
let radius = 14;


function setup(){
    createCanvas(700,700);
    r = new Rectangle(100,100,100,100);
}

function draw(){
    background(255);
    r.draw();

    if (r.collided(mouseX, mouseY, radius)) {
        fill(0); // 충돌 시 검정
    } else {
        fill(255); // 비충돌 시 흰색
    }
    
    fill(150); 
    ellipse(mouseX, mouseY, radius * 2, radius * 2); // 원 그리기


}