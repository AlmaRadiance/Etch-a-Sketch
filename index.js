// Global variables
const gridContainer = document.querySelector('.grid-container');

// Function to create the grid
function createGrid(rows, cols) {
    const squareSize = ((600 / rows)-2).toFixed(2);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
           gridSquare.style.width = squareSize + 'px';
            gridSquare.style.height = squareSize + 'px';
            gridSquare.style.border = '1px solid black';

            gridContainer.appendChild(gridSquare);
        }
    }

 // Set the CSS properties for the grid squares after they have been created
 gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
 gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
}



// Initial creation of the grid
createGrid(16, 16);

// Event listener for setting color to black
gridContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('grid-square')) {
        event.target.style.backgroundColor = 'black';
    }
});

// Function to change color to random color
function setRandomColor(event) {
    if (event.target.classList.contains('grid-square')) {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        event.target.style.backgroundColor = randomColor;
    }
}

// Function to change color to black
function setBlackColor(event) {
    if (event.target.classList.contains('grid-square')) {
        event.target.style.backgroundColor = 'black';
    }
}

// Function to erase color
function erase(event) {
    if (event.target.classList.contains('grid-square')) {
        event.target.style.backgroundColor = '';
    }
}

// Resize button functionality
const resizeButton = document.getElementById('resize-button');
resizeButton.addEventListener('click', function() {
    const newSize = prompt('Enter the number of squares per side (max 100):');
    if (newSize) {
        gridContainer.innerHTML = '';
        createGrid(newSize, newSize);
    }
});

// Button event listeners
const randomColorButton = document.getElementById('random-color-button');
const blackColorButton = document.getElementById('black-color-button');
const eraseButton = document.getElementById('erase-button');

randomColorButton.addEventListener('click', function() {
    gridContainer.removeEventListener('click', setBlackColor);
    gridContainer.addEventListener('click', setRandomColor);
});

blackColorButton.addEventListener('click', function() {
    gridContainer.removeEventListener('click', setRandomColor);
    gridContainer.addEventListener('click', setBlackColor);
});

eraseButton.addEventListener('click', function() {
    gridContainer.removeEventListener('click', setBlackColor);
    gridContainer.removeEventListener('click', setRandomColor);
    gridContainer.addEventListener('click', erase);
});
