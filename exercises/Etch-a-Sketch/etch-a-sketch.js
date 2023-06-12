// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake');

const MOVE_AMOUNT = 10;
// Setup our canvas for drawing.
// Same Names with the variables and properties.
const {width, height} = canvas;

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // Start the Drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a Draw function
function draw({key}) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    // User based movement on the x and y variables.
    switch(key) {
        default:
            break;
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
    };
    ctx.lineTo(x, y);
    ctx.stroke()

}

// Write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
        
    }
}

// Clear/Shake Function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);