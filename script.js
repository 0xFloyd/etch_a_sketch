
let grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
let startingSize = 256;



function color(event) {
    event.target.style.backgroundColor = randomColor();
    event.target.setAttribute('class', 'square');
}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb("+r+","+g+","+b+")"
    return color;
}

function hoverColor() {
    let stupidArray = Array.from(document.querySelectorAll('.square'));
    stupidArray.forEach(gridSquare => gridSquare.addEventListener('mouseover', color));
}

function generateGrid(numberOfSquares) {
    for (i = 0; i < numberOfSquares; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        grid.appendChild(gridSquare);
    }

    hoverColor();
}

function createNewGrid() {
    let gridSize = prompt('How many squares in the grid? Please select a number between 0 and 64.', '');
    
    if (isNaN(gridSize)) {
        createNewGrid();
        return;
    }

    if (gridSize > 64 || gridSize < 1) {
        createNewGrid();
        return;
    }
    
    let gridArea = gridSize * gridSize;
    grid.remove();
    grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    document.getElementById('gridContainer').appendChild(grid);
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    
    generateGrid(gridArea);  
}

let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    createNewGrid();
});

generateGrid(startingSize);

