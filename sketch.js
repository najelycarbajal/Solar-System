var centerY;
var earthDistance = 50;
var sunDistance= 125;

function setup() {
  createCanvas(2400, 2400);
  centerY = height/2;
}

function draw() {
  background(0);

  // sun
  stroke(250, 225, 0);
  strokeWeight(50);
  line(0, 0, 0, height);

  noStroke();

  // mercury
  fill(125);
  ellipse(sunDistance * 0.4, centerY, earthDistance* 0.4, earthDistance* 0.4);

  // venus
  fill(220, 155, 100);
  ellipse(sunDistance * 0.7, centerY, earthDistance* 0.9, earthDistance* 0.9);

  // earth
  fill(0, 100, 200);
  ellipse(sunDistance* 1, centerY, earthDistance* 1, earthDistance *1);

  // mars
  fill(200, 50, 0);
  ellipse(sunDistance* 1.5, centerY, earthDistance* 0.5, earthDistance* 0.5);

  // jupiter
  fill(195, 160, 140);
  ellipse(sunDistance* 5.2, centerY, earthDistance* 11.2, earthDistance* 11.2);

  // saturn
  fill(240, 215, 160);
  ellipse(sunDistance* 9.6, centerY, earthDistance* 9.5, earthDistance* 9.5);

  // uranus
  fill(150, 250, 250);
  ellipse(sunDistance* 19.2, centerY, earthDistance* 4.0, earthDistance* 4.0);

  // neptune
  fill(55, 130, 250);
  ellipse(sunDistance* 30.1, centerY, earthDistance* 3.9, earthDistance* 3.9);

  // pluto
  fill(250, 200, 160);
  ellipse(sunDistance* 39.5, centerY, earthDistance* 0.2, earthDistance* 0.2);

}