let img;
let imgPixels = [];
let nails = [];
let nailCount = 100;
let nailSize = 2;
let lineIndex = [];
let maxlines = 10000;


function preload(){
  img = loadImage('img4.jpg');
  img2 = loadImage('img4.jpg');
}


/** 세팅 */
function setup() {
  canvas = createCanvas(700, 700); 
  canvas.parent("canvas-container"); 
  angleMode(DEGREES); 

  img.filter(GRAY); 
  img.loadPixels(); 
  imgPixels = img.pixels.slice(); 

  for(let i=0; i<nailCount; i++){
    let angle = 360/nailCount * i;
    let r = 700/2 - 20; 
    let x = 700/2 + r * cos(angle);
    let y = 700/2 + r * sin(angle); 
    nails.push(createVector(x,y)); 
  }

  let startingIndex = floor(random(nailCount));
  lineIndex.push(startingIndex);
}




/** 그림 */
function draw() {
  background(255); 
  
  stroke(0,60); 
  strokeWeight(0.1); 

  let realImageAlpha; 


  for (let i=0; i<nailCount; i++){
    ellipse(nails[i].x, nails[i].y, nailSize, nailSize); // 못을 원으로 그림
  }

 
  stroke(0);
  for (let i=1; i<lineIndex.length; i++){
    let nail1 = nails[lineIndex[i-1]]; // 이전 못의 위치
    let nail2 = nails[lineIndex[i]]; // 현재 못의 위치
    line(nail1.x, nail1.y, nail2.x, nail2.y); // 두 못 사이에 선을 그림
  }


  if (lineIndex.length < maxlines) { // 최대 선 개수에 도달하지 않았다면
    let currentNailIndex = lineIndex[lineIndex.length - 1]; // 현재 선의 마지막 못 인덱스
    let nextNailIndex = findNextNailIndex(currentNailIndex); // 다음 못을 찾음

    if (nextNailIndex !== null) { // 다음 못을 찾았다면
      lineIndex.push(nextNailIndex); // 다음 못 인덱스를 선 배열에 추가
      updateImage(currentNailIndex, nextNailIndex); // 이미지 픽셀 밝기 업데이트 (이것은 img 변수에만 영향을 미칩니다)
      
      const fadeStartLines = 8000; // 이미지가 나타나기 시작할 선의 개수
      const finalAlphaTarget = 0.2; // 최종 목표 알파값 (20%)

      if (lineIndex.length < fadeStartLines) {
        realImageAlpha = 0; // 시작 지점까지는 완전히 투명
      } else {
        let linesInFadeSection = maxlines - fadeStartLines; // 페이드 인이 진행되는 총 선의 개수
        let currentLinesInFade = lineIndex.length - fadeStartLines; // 페이드 인 구간에서 현재 그려진 선의 개수
        
        // 현재 진행률 (0.0에서 1.0 사이)
        let progress = currentLinesInFade / linesInFadeSection;
         
        // 최종 목표 알파값에 진행률을 곱하여 현재 알파값 계산
        realImageAlpha = progress * finalAlphaTarget;
        
        // 계산된 알파값이 0에서 finalAlphaTarget 사이를 벗어나지 않도록 강제 (부동소수점 오차 방지)
        realImageAlpha = constrain(realImageAlpha, 0, finalAlphaTarget);
      }

    } else {
      noLoop(); 
    }
  } else {
    noLoop(); 
    realImageAlpha = 0.2
    console.log('끝'); 
  }

  tint(255, realImageAlpha * 255); // 0~1 범위의 realImageAlpha를 0~255 범위로 변환하여 투명도 적용
  image(img2, 0, 0, 700, 700); // img2를 (0,0)에 700x700 크기로 그림
}


function findNextNailIndex(currentIndex){
  let nextIndex = null;
  let highestContrast = -1; // 최고 대비 값 초기화

  for(let i=0; i<nails.length; i++){
    if (i != currentIndex){ // 현재 못과 다른 못만 고려
      let contrast = evaluateContrast(currentIndex, i); // 두 못 사이의 대비 평가
      if (contrast > highestContrast){ // 더 높은 대비를 찾으면
        highestContrast = contrast; // 최고 대비 업데이트
        nextIndex = i; // 다음 못 인덱스 업데이트
      }
    }
  }

  if (nextIndex === null){ // 적절한 다음 못을 찾지 못했다면
    nextIndex = floor(random(nailCount)); // 무작위로 다음 못 선택
  }
  return nextIndex;
}


function evaluateContrast(i1, i2){
  let totalContrast = 0;
  let nail1 = nails[i1];
  let nail2 = nails[i2];
  let steps = 100; // 선을 따라 픽셀을 샘플링할 단계 수

  for (let i=0; i<steps; i++){
    let x = floor(lerp(nail1.x, nail2.x, i/steps)); // 선을 따라 x 좌표 보간
    let y = floor(lerp(nail1.y, nail2.y, i/steps)); // 선을 따라 y 좌표 보간
    if (x >= 0 && x<700 && y>=0 && y<700 ){ // 캔버스 범위 내에 있는지 확인
      let pixelIndex = 4 * (y * 700 + x); // 픽셀 배열에서의 인덱스 계산 (RGBA)
      let brightness = imgPixels[pixelIndex]; // 그레이스케일이므로 R(빨강) 채널만 사용
      totalContrast += (255 - brightness); // 밝기가 낮을수록 대비는 높아짐
    }
  }

  return totalContrast / steps; // 평균 대비 반환
}


function updateImage(i1, i2){
    let nail1 = nails[i1];
    let nail2 = nails[i2];
    let steps = 100;
    let bright = 10; // 픽셀을 얼마나 밝게 할지

    for (let i=0; i<steps; i++){
      let x = floor(lerp(nail1.x, nail2.x, i/steps)); // 선을 따라 x 좌표 보간
      let y = floor(lerp(nail1.y, nail2.y, i/steps)); // 선을 따라 y 좌표 보간
      let pixelIndex = 4 * (y * 700 + x); // 픽셀 배열에서의 인덱스 계산
      
      // 픽셀 인덱스가 유효한 범위 내에 있는지 확인
      if( pixelIndex>= 0 && pixelIndex < imgPixels.length -3){
        // 픽셀이 너무 밝지 않다면 밝기를 증가시킴
        if (imgPixels[pixelIndex] < 255 - bright){
          imgPixels[pixelIndex + 0] = imgPixels[pixelIndex] + bright; // Red
          imgPixels[pixelIndex + 1] = imgPixels[pixelIndex] + bright; // Green
          imgPixels[pixelIndex + 2] = imgPixels[pixelIndex] + bright; // Blue
          // 알파 채널은 변경하지 않음 (imgPixels[pixelIndex + 3])
          }
        }
   }

   img.pixels.set(imgPixels); 
   img.updatePixels();
}
