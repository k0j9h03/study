let video;
let canvasSize = 720; // 정사각형 캔버스
let gridSize = 9; // 기본 그리드 크기 (요청: 9)
let cols, rows;
let scaleFactor = 1; // 비디오를 캔버스에 맞추는 스케일

function preload() {
  // 이미지 로드 제거
}

function setup() {
  const cnv = createCanvas(canvasSize, canvasSize);
  cnv.parent(document.querySelector('.wrap'));
  pixelDensity(1);

  // 웹캠 캡처
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  recomputeGrid();
  updateGridSizeText();
}

function recomputeGrid() {
  cols = floor(width / gridSize);
  rows = floor(height / gridSize);
}

function updateGridSizeText() {
  const el = document.getElementById('gridSizeText');
  if (el) el.textContent = String(gridSize);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    gridSize = max(4, gridSize + 2);
    recomputeGrid();
    updateGridSizeText();
  } else if (keyCode === DOWN_ARROW) {
    gridSize = max(4, gridSize - 2);
    recomputeGrid();
    updateGridSizeText();
  } else if (key === 's' || key === 'S') {
    saveCanvas('ascii-ellipse', 'png');
  }
}

function draw() {
  // 페이지 배경(#111)과 동일하게
  background(17);

  if (!video || !video.loadedmetadata) return;

  // 비디오 픽셀 버퍼 로드 (화면에 그리진 않음)
  video.loadPixels();
  
  // 각 셀 정보 저장 및 최댓값 탐색
  let cells = [];
  let maxDarkness = -1;

  noStroke();
  fill(255); // 점(원) 흰색

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const cx = x * gridSize + gridSize * 0.5;
      const cy = y * gridSize + gridSize * 0.5;

      // 샘플 픽셀 위치 (캔버스 좌표)
      // 캔버스 좌표를 비디오 좌표로 매핑
      const vx = constrain(floor(cx * (video.width / width)), 0, video.width - 1);
      const vy = constrain(floor(cy * (video.height / height)), 0, video.height - 1);
      const idx = 4 * (vy * video.width + vx);
      const r = video.pixels[idx + 0];
      const g = video.pixels[idx + 1];
      const b = video.pixels[idx + 2];

      // p5 밝기 근사: 평균값 사용 (간단)
      const brightnessVal = (r + g + b) / 3;
      // 어두울수록 크도록 반전 (0~255)
      const darkness = 255 - brightnessVal;

      // 원 크기: 밝을수록 0에 가깝게, 어두울수록 그리드보다 더 크게
      const diameter = map(darkness, 0, 255, 0, gridSize * 1.5);

      // 검은색 원 그리기
      ellipse(cx, cy, diameter, diameter);
      
      // 셀 저장 및 최댓값 갱신
      cells.push({ cx, cy, darkness, diameter });
      if (darkness > maxDarkness) maxDarkness = darkness;
    }
  }

  // 상태 텍스트 표시
  push();
  noStroke();
  fill(255);
  textSize(12);
  textAlign(LEFT, TOP);
  text(`grid: ${gridSize}`, 8, 8);
  pop();
}


