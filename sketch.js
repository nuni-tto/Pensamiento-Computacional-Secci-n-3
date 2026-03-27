function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(236, 223, 207);
  
  let d = color(0,0,0);
  
  fill(d);
  
  rect(30, 20, 55, 40);
  
  let a = color(255, 204, 0);

  
  fill(a);
  strokeWeight(4);
  stroke(51);
  square(100, 30, 55);
  square(300, 150, 55);
  square(200, 270, 55);
  square(100, 390, 55);
  

  let b = color(255, 0, 0);

  
  fill(b);
  strokeWeight(4);
  stroke(51);;
  square(200, 30, 55);
  square(100, 150, 55);
  square(300, 270, 55);
  square(200, 390, 55);
  
  
  let c = color(0, 0, 255);

  
  fill(c);
  strokeWeight(4);
  stroke(51);
  square(300, 30, 55);
  square(200, 150, 55);
  square(100, 270, 55);
  square(300, 390, 55);





}