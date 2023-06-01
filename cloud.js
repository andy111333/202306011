let clouds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create 20 clouds with random positions and sizes
  for (let i = 0; i < 20; i++) {
    let cloud = {
      x: random(width),
      y: random(height),
      size: random(50, 150),
      speed: random(0.5, 2) // Random speed for each cloud
    };
    clouds.push(cloud);
  }
}

function draw() {
  background(220);
  
  // Update and draw the clouds
  for (let cloud of clouds) {
    updateCloud(cloud);
    drawCloud(cloud.x, cloud.y, cloud.size);
  }
}

// Function to update the cloud's position
function updateCloud(cloud) {
  cloud.x += cloud.speed; // Move the cloud horizontally
  
  // Reset the cloud's position when it goes off-screen
  if (cloud.x > width + cloud.size * 0.5) {
    cloud.x = -cloud.size * 0.5;
    cloud.y = random(height);
  }
}

// Function to draw a cloud
function drawCloud(x, y, size) {
  noStroke();
  fill(255);
  
  // Draw the cloud shape
  ellipse(x, y, size, size * 0.6);
  ellipse(x - size * 0.25, y, size * 0.7, size * 0.5);
  ellipse(x + size * 0.25, y, size * 0.7, size * 0.5);
  ellipse(x, y + size * 0.15, size * 0.7, size * 0.5);
  ellipse(x, y - size * 0.15, size * 0.7, size * 0.5);
}

// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}