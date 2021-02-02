function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
} 

function draw() {
  background(239, 81, 118);
  translate(300, 300);
  rotate(-90);
   
 
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(2);
  stroke(color(255, 255, 255));
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  
  stroke('black');
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  stroke('white');
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  push();
  rotate(secondAngle);
  stroke('blue');
  line(0, 0, 100, 0);
  pop();
  
  push();
  rotate(minuteAngle);
  stroke(0, 0, 0);
  line(0, 0, 80, 0);
  pop();
  
  push();
  rotate(hourAngle);
  stroke(88, 185, 95);
  line(0, 0, 60, 0);
  pop();
  
  stroke(300);
  point(0, 0);

}