// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Cross class to represent each spinning cross
class Cross {
constructor(x, y) {
  this.x = x;
  this.y = y;
  this.size = 10;
  this.angle = 0;
  this.setRandomSpeedAndWidth();
}

// Set random speed and width for the cross
setRandomSpeedAndWidth() {
  this.speedMultiplier = Math.random() < 0.1 ? (Math.random() * 2 + 1) : 1;
  this.width = this.speedMultiplier;
}

// Draw the cross on the canvas
draw() {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angle);
  ctx.beginPath();
  ctx.lineWidth = this.width;
  ctx.moveTo(0, -this.size);
  ctx.lineTo(0, this.size);
  ctx.moveTo(-this.size, 0);
  ctx.lineTo(this.size, 0);
  ctx.stroke();
  ctx.restore();
}

// Update the cross's angle and periodically change speed and width
update() {
  this.angle += 0.01 * this.speedMultiplier;

  // Randomly decide to update the speed and width
  if (Math.random() < 0.01) { // 1% chance to change speed and width each frame
    this.setRandomSpeedAndWidth();
  }
}
}

// Function to resize the canvas to full window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Re-populate the crosses array with new dimensions
  populateCrosses();
}

// Create an array to store all crosses
let crosses = [];

// Function to populate the crosses array
function populateCrosses() {
  crosses = []; // Clear the existing crosses
  for (let y = 0; y < canvas.height; y += 20) {
    for (let x = 0; x < canvas.width; x += 20) {
      let speedMultiplier = Math.random() < 0.1 ? (Math.random() * 2 + 1) : 1;
      let width = speedMultiplier;
      crosses.push(new Cross(x, y, speedMultiplier, width));
    }
  }
}

// Function to clear the canvas and draw all crosses
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  crosses.forEach(cross => {
    cross.update();
    cross.draw();
  });
  requestAnimationFrame(animate);
}

// Call the resize function initially and add it as a listener to window resize events
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Start the animation
animate();