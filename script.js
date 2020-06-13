//This is a codealong project inspired from "Web Developer Bootcamp by Colt Steele".
let numberofSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay')
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
init();
function init() {
    //    includes everything when the page loads
    //mode buttons event listeners
    setupModeButtonListeners();
    setupSquares();
    reset();
}

function setupModeButtonListeners(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected'); 
            modeButtons[1].classList.remove('selected'); 
            this.classList.add('selected'); 
            //figure out how many squares to show
            this.textContent === 'Easy' ? numberofSquares = 3: numberofSquares = 6;
            reset();
            // if(this.textContent === 'Easy') {
            //     numberofSquares =3
            // }else{numberofSquares =6}
        });
    }
}

function setupSquares(){for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click', function() {
        const clickedColor = this.style.backgroundColor;
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
}}

function reset() {
      //generate all new colors
    colors = generateRandomColor(numberofSquares);
    //pick a new random colr from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent ="";
    resetButton.textContent = "New Colors"
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}
resetButton.addEventListener('click', function() {
    //generate all new colors
    reset()
});

 

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

