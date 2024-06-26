let gridSize = 6;
let cellSize;
let turns = 36;
let currentTurn = 0;
let delay = 20;  // Adjust this value to change the speed
let lastFrameTime = 0;

function setup() {
    createCanvas(400, 400);
    cellSize = width / gridSize;
    drawGrid();
    frameRate(60);
}

function draw() {
    if (currentTurn < turns) {
        if (frameCount - lastFrameTime >= delay) {
            playTurn();
            currentTurn++;
            lastFrameTime = frameCount;
        }
    }
}

function playTurn() {
    let dice1 = int(random(1, 7)); // First dice roll for shape
    let dice2_1 = int(random(1, 7)); // Second dice roll for grid location
    let dice2_2 = int(random(1, 7)); // Third dice roll for grid location

    let shape;
    let section = getGridSection(dice2_1, dice2_2);

    switch (dice1) {
        case 1:
            shape = "horizontal line";
            drawHorizontalLine(section.x, section.y);
            break;
        case 2:
            shape = "diagonal line";
            drawDiagonalLine(section.x, section.y);
            break;
        case 3:
            shape = "vertical line";
            drawVerticalLine(section.x, section.y);
            break;
        case 4:
            shape = "diagonal line";
            drawDiagonalLine(section.x, section.y);
            break;
        case 5:
            shape = "square";
            drawSquare(section.x, section.y);
            break;
        case 6:
            shape = "diagonal cross";
            drawDiagonalCross(section.x, section.y);
            break;
    }

    console.log(`Turn ${currentTurn + 1}: Dice Roll 1 (${dice1}) - ${shape}, Dice Roll 2 (${dice2_1}, ${dice2_2}) - Section (${section.x}, ${section.y})`);
}

function getGridSection(dice2_1, dice2_2) {
    let x, y;

    // Define the mapping of grid sections based on dice rolls
    switch (`${dice2_1};${dice2_2}`) {
        case '1;1':
            x = 0;
            y = 0;
            break;
        case '6;6':
            x = gridSize - 1;
            y = gridSize - 1;
            break;
        default:
            // Calculate x and y based on dice rolls
            let totalSections = gridSize * gridSize;
            let sectionIndex = (dice2_1 - 1) * 6 + (dice2_2 - 1);
            x = sectionIndex % gridSize;
            y = Math.floor(sectionIndex / gridSize);
            break;
    }

    return { x: x * cellSize, y: y * cellSize };
}

function drawGrid() {
    stroke(0);
    for (let i = 0; i <= gridSize; i++) {
        line(i * cellSize, 0, i * cellSize, height);
        line(0, i * cellSize, width, i * cellSize);
    }
}

function drawHorizontalLine(x, y) {
    stroke(0);
    strokeWeight(2);
    line(x, y + cellSize / 2, x + cellSize, y + cellSize / 2);
}

function drawVerticalLine(x, y) {
    stroke(0);
    strokeWeight(2);
    line(x + cellSize / 2, y, x + cellSize / 2, y + cellSize);
}

function drawDiagonalLine(x, y) {
    stroke(0);
    strokeWeight(2);
    line(x, y + cellSize, x + cellSize, y);
}

function drawSquare(x, y) {
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(x, y, cellSize, cellSize);
}

function drawDiagonalCross(x, y) {
    stroke(0);
    strokeWeight(2);
    line(x, y, x + cellSize, y + cellSize);
    line(x, y + cellSize, x + cellSize, y);
}
