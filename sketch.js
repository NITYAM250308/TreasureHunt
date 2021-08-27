var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  score=0
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
    textSize(30);
    fill (255);
    text("Score : "+score,400,30)


  // Add code to display the end screen

  if(score === 3){
    clear();
    background(bg2);
    textSize(60);
    fill(255, 215, 0);
    text("TREASURE UNLOCKED", 220,250)
  }


  drawSprites()
}