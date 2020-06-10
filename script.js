//204!!!
let numberofSquares = 6;
let colors = generateRandomColor(numberofSquares);
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay')
const squares = document.querySelectorAll('.square');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const easyButton = document.querySelector('#easyButton');
const modeButtons = document.querySelectorAll('.mode');
for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function {
        modeButtons[0].classList.remove = 
        this.classList.add ='selected';
    })
    
}
// const hardButton = document.querySelector('#hardButton');
// const resetButton = document.querySelector('#reset');
//hardButton.classList.add('selected')
easyButton.addEventListener('click', function() {
    hardButton.classList.remove('selected')
    easyButton.classList.add('selected')
    numberofSquares = 3;
    colors = generateRandomColor(numberofSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }else {
            squares[i].style.display = 'none'
        }
    }
});
hardButton.addEventListener('click', function() {
    hardButton.classList.add('selected')
    easyButton.classList.remove('selected')
    numberofSquares = 6;
    colors = generateRandomColor(numberofSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = 'block'
    }
});

resetButton.addEventListener('click', function() {
    //generate all new colors
    colors = generateRandomColor(numberofSquares);
    //pick a new random colr from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent ="";
    this.textContent = "New Colors"

    
})
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function() {
        const clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor) {
            messageDisplay.textContent ="Correct!";
            changeColors(clickedColor);
            resetButton.textContent = 'Play Again'
            h1.style.backgroundColor = clickedColor;
        }else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent ="Try Again";
        }
    })
} 

function changeColors(color) {
    squares.forEach((square) => square.style.backgroundColor = color)
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
    //get random color and push into arr
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(randomColor())

