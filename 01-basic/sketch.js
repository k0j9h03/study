let x = 0;
let y = 0;
let xSpeed = 1;
let ySpeed = 2;
let d = 50; //직경

/** 초기세팅 시작때만 호출 */
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
}

/** 1초에 60번 호출이기에 배경을 위에다가 옮기면 그림만 호출하기때문에 잔상이 남는다 */
function draw() {
  background(220);
  translate(width / 2, height / 2);  // 중앙 기준 좌표계 이 이후로 좌표계는 화면 가운데로 리셋 된다고 봐야함

  // 이동
  x += xSpeed;
  y += ySpeed;

  // 충돌 처리 (중앙 기준: 좌우는 width/2, 상하는 height/2)
  if (x > width / 2 - d / 2 || x < -width / 2 + d / 2) { // x의 가로위치(원의 중앙값기준) 가 width/2(우측끝) 에서 반지름 값보다 작을때 or -width/2(좌측끝)에서 반지름보다 클때
    xSpeed *= -1;
  }
  if (y > height / 2 - d / 2 || y < -height / 2 + d / 2) {
    ySpeed *= -1;
  }

  stroke(0);
  ellipse(x, y, d, d);
}
