// Select the elements on the page - canvas, shake button
let canvas = document.querySelector('#etch-a-sketch');

let ctx = canvas.getContext('2d');

let shakebutton = document.querySelector('.shake');
// Setup our canvas for drawing.
// Same Names with the variables and properties.
const {width, height} = canvas;

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * width);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Start the Drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a Draw function

// Write a handler for the keys

// Clear/Shake Function

// Listen for arrow keys