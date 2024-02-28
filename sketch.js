// const CIRCLE_COUNT = 150;

// let circles = [];

// function generateCircles() {
//   for (var i = 0; i < CIRCLE_COUNT; i++) {
//     let circle = {
//       r: random(1, 255),
//       g: random(1, 255),
//       b: random(1, 255),
//       size: random(1, 10),
//       posX: random(0, displayWidth),
//       posY: random(0, displayHeight),
//       speedX: random(1, 7),
//       speedY: random(1, 7),
//     };

//     circles.push(circle);
//   }
// }

// function setup() {
//   createCanvas(displayWidth, displayHeight);
//   generateCircles();
// }

// function draw() {
//   background("#0f0f0f");
//   circles.forEach((element) => {
//     let c = color(element.r, element.g, element.b);
//     fill(c);
//     noStroke();
//     circle(element.posX, element.posY, element.size);
//     console.log("pogi");
//   });

//   circles.forEach((element) => {
//     if (element.posX < 0 || element.posX > displayWidth) {
//       element.speedX *= -1;
//     }
//     if (element.posY < 0 || element.posY > displayHeight) {
//       element.speedY *= -1;
//     }

//     if (element.posX < mouseX) {
//       element.posX += 5;
//     }
//     if (element.posX > mouseX) {
//       element.posX -= 5;
//     }

//     if (element.posY < mouseY) {
//       element.posY += 5;
//     }
//     if (element.posY > mouseY) {
//       element.posY -= 5;
//     }

//     element.posx += element.speedx;
//     element.posy += element.speedy;
//   });
// }

let movers = [];

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
  }

  update() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.1);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    noStroke();
    strokeWeight(2);
    fill(255);
    ellipse(this.position.x, this.position.y, 5, 5);
  }
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 150; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  background(51);
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
}
