let radius = 35;
let cols, rows;
let spacing = 35;
let boxes = [];
let size = 35;

function setup() {
    createCanvas(700, 700);
    rectMode(CENTER); // 🔹 중요
    cols = width / spacing;
    rows = height / spacing;

    for (let i = 0; i < cols; i++) {
        boxes[i] = [];
        for (let j = 0; j < rows; j++) {
            boxes[i][j] = new Rectangle(spacing / 2 + i * spacing, spacing / 2 + j * spacing, size, size);
        }
    }
}

function draw() {
    background(230);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            boxes[i][j].collided(mouseX, mouseY, radius);
            boxes[i][j].draw();
        }
    }

    fill(150);
    ellipse(mouseX, mouseY, radius * 2, radius * 2); // 원
}