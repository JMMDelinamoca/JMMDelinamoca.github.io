let c, c1, c2;
let x,y;

let linija;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(0,50);

  c = random(0, 255);
  c1 = random(0, 255);
  c2 = random(0, 255);
  
  x = random(0, windowWidth * 2);
  y = random(0, windowHeight * 2);
  
  // linija = random(1000);
  
  stroke(c, c1, c2);
  
  line(windowWidth, windowHeight, x, y);
  

  c = random(0, 255);
  c1 = random(0, 255);
  c2 = random(0, 255);
  
    stroke(c, c1, c2);
  
  line(0, windowHeight, x, y);
  


}