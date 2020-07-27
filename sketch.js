var wall, thickness;
var bullet,weight,speed;
var D;

function setup() {
  createCanvas(1600,400);

  speed = random(100,250);
  thickness = random(15,41.5);
  weight = random(30,50);

  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "orange";

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = 80,80,80;
}

function draw() {

    background(0,0,0);

   if(bullet.x - wall.x < bullet.width/2 + wall.width/2
    && wall.x - bullet.x < bullet.width/2 + wall.width/2
    && bullet.y - wall.y < bullet.height/2 + wall.height/2
    && wall.y - bullet.y < bullet.height/2 + wall.height/2){

      D = 0.5*weight*speed*speed/(thickness*thickness*thickness)
      bullet.velocityX = 0;
      console.log("Bullet Hit");
      console.log(D);
      
      if(D<10){
        wall.shapeColor = "green";
      }
      else if (D>10){
        wall.shapeColor = "red";
      }
    }
  drawSprites();

}