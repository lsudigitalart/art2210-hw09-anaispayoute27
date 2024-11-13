let f1, f2, f3, f4, f5;

function setup() {
  createCanvas(400, 400);
  background(252,105,23);
  f1 = new Flower(random(width), 0)
  f2 = new Flower(random(width), 0)
  f3 = new Flower(random(width), 0)
  f4 = new Flower(random(width), 0)
  f5 = new Flower(random(width), 0)

}

function draw() {
  background(252,105,23);

  f1.display()
  f2.display()
  f3.display()
  f4.display()
  f5.display()



}

class Flower{
  constructor(x, y) {
    this.centerX = x;
    this.centerY =  y;
    this.speed = random(1, 5)
  }

  display() {
    // Flower center position
    noStroke();
    fill(139, 69, 19); // Brown color for the sunflower center
    ellipse(this.centerX, this.centerY, 40, 40);

    // Draw petals around the center with rotation
    fill(255, 204, 0); // Yellow color for petals
    let petalWidth = 30;
    let petalHeight = 20;
    let numPetals = 12;

    for (let i = 0; i < numPetals; i++) {
      push();
      translate(this.centerX, this.centerY);          // Move to flower center
      rotate(TWO_PI * i / numPetals);       // Rotate for each petal position
      ellipse(30, 0, petalWidth, petalHeight); // Draw petal at rotated position
      pop();
    }

    this.centerY = this.centerY + this.speed;
  }
}
