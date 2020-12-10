var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1400,400);

  speed = random(50,321);
  weight = random(30,53);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "white";
  bullet.scale = 0.6;
  
  wall = createSprite(1340, 200, 40, height/2);
  
}

function draw() {
  background(0,0,0); 

  bullet.velocityX = speed;
  

 if(hascollided(bullet,wall))
 {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(deformation > 10)
    {
       wall.shapeColor = "red";
    }

    if(deformation === 10)
    {
      wall.shapeColor = "yellow";
    }

    if(deformation < 10)
    {
      wall.shapeColor = "green";
    }

  }

   
  drawSprites();

}


