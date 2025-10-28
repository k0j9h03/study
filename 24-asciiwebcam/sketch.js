// 웹캠 아스키 아트 -
let video;
let density = 20;
let asciiOutput;
let densitySlider;
let densityValue;

// 아스키 문자 세트 (밝기 순)
const asciiChars = " .:-=+*#%@";

function setup() {
    // 웹캠 초기화
    video = createCapture(VIDEO);
    video.size(640, 320);
    video.hide();
    
    // HTML 요소들 가져오기
    asciiOutput = document.getElementById('ascii-output');
    densitySlider = document.getElementById('density');
    densityValue = document.getElementById('densityValue');
    
    // 밀도 슬라이더 이벤트
    densitySlider.addEventListener('input', function() {
        density = parseInt(this.value);
        densityValue.textContent = density;
    });
    
    // 초기 메시지
    asciiOutput.textContent = "웹캠을 로딩 중...";
}

function draw() {
    if (video.loadedmetadata) {
        generateAsciiArt();
    }
}

function generateAsciiArt() {
    let asciiText = "";
    
    // 비디오 픽셀 데이터 로드
    video.loadPixels();
    
    // 밀도에 따라 샘플링
    for (let y = 0; y < video.height; y += density) {
        for (let x = 0; x < video.width; x += density) {
            // 픽셀 인덱스 계산
            let index = (y * video.width + x) * 4;
            
            // RGB 값 가져오기
            let r = video.pixels[index];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];
            
            // 밝기 계산 (0-255)
            let brightness = (r + g + b) / 3;
            
            // 밝기를 아스키 문자 인덱스로 변환
            let charIndex = Math.floor(map(brightness, 0, 255, 0, asciiChars.length - 1));
            
            // 아스키 문자 추가
            asciiText += asciiChars[charIndex];
        }
        asciiText += "\n";
    }
    
    // 아스키 아트 출력
    asciiOutput.textContent = asciiText;
}
