//var sun, sunAnim;

var radValue = 120;

function preload() {
  //sunAnim = loadImage("Sun.png")
}

function setup() {
  createCanvas(1000, 600)
  
  /*sun = createSprite(450, 300, 10, 10);
  sun.addImage("sun", sunAnim);
  sun.scale = 0.3;
  sun.debug = true;
  sun.setCollider("circle", 0, 0, 300);*/
}

function draw() {
  background("black");

  fill(rgb(252, 212, 64));
  ellipse(450, 300, radValue, radValue);

  line(450, 300, 570, 300)


  drawSprites();
}