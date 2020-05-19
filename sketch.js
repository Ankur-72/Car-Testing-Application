

// to create global variables for car,wall,speed,weight and divider lines
var car,car1,car2,wall,wall1,wall2;
var speed,speed1,speed2,weight,weight1,weight2;
var div1,div2;

// setup function
function setup() {
  // to create and assign dimensions to the canvas
  createCanvas(1600,700);
  // to give different random number values as speeds for the three different cars
  speed=random(45,90);
  speed1=random(45,90);
  speed2=random(45,90);

  // to give different random number values as weights for the three different cars
  weight = random(400,1500);
  weight1 = random(400,1500);
  weight2 = random(400,1500);

  // to create car
  car = createSprite(50,100,20,20);
  // to give colour to the car
  car.shapeColor = ("turquoise");
  // to create wall
  wall = createSprite(1200,100,12,120);
  // to give colour to the wall
  wall.shapeColor = ("red");

  car1 = createSprite(50,300,20,20);
  car1.shapeColor = ("turquoise");
  wall1 = createSprite(1200,300,12,120);
  wall1.shapeColor = ("red");

  car2 = createSprite(50,500,20,20);
  car2.shapeColor = ("turquoise")
  wall2 = createSprite(1200,500,12,120);
  wall2.shapeColor = ("red");

  // to assign the speeds as the car's velocityX
  car.velocityX = speed;
  car1.velocityX = speed1;
  car2.velocityX = speed2;

  // to create dividers
  div1 = createSprite(800,200,1600,10);
  div1.shapeColor = ("white");

  div2 = createSprite(800,400,1600,10);
  div2.shapeColor = ("white");


}

// function draw
function draw() {
  // to give orange colour to the background
  background("orange");

  // to check the collision if the car and wall our touching
  // the conditional statement uses the logic of whether the position of the car is less than the middle point of 
  // the two objects
  if(wall.x-car.x < (car.width + wall.width)/2){
    // set car velocityX to 0
    car.velocityX = 0;
    // to display the text for the speed,weight,deformation and summary
    textSize(15);
    fill("white");
    text("Speed:" + Math.round(speed),100,80);
    textSize(15);
    fill("white");
    text("Weight:" + Math.round(weight),100,110);
    // to create var deformation and give its formula for calculation
    var deformation = Math.round(0.5*width*speed*speed/22500);
    textSize(15);
    fill("velvet");
    text("Deformation:" + deformation,100,50);

    // if deformation is very high i.e > 180, it is lethal
    if(deformation > 180){
      textSize(18);
    fill("red");
    text("Summary:LETHAL",100,140);
      car.shapeColor = ("red");
    }

    // if deformation is moderate i.e < 180 and > 100, it is average
    if(deformation < 180 && deformation>100){
      textSize(18);
      fill("yellow");
      text("Summary:AVERAGE",100,140);
      car.shapeColor = ("yellow");
    }

    // if deformation is low i.e < 100, it is good
    if(deformation <100){
      textSize(18);
      fill("green");
      text("Summary:GOOD",100,140);
      car.shapeColor = ("green");
    }
  }

  
  if(wall1.x-car1.x < (car1.width + wall1.width)/2){
    car1.velocityX = 0;
    textSize(15);
    fill("black");
    text("Speed:" + Math.round(speed1),100,280);
    textSize(15);
    fill("black");
    text("Weight:" + Math.round(weight1),100,310);
    var deformation = Math.round(0.5 * width * speed1 * speed1/22500);
    textSize(15);
    fill("black");
    text("Deformation:" + deformation,100,250);

    if(deformation > 180){
      textSize(18);
      fill("red");
      text("Summary:LETHAL",100,340);
      car1.shapeColor = ("red");
    }

    if(deformation < 180 && deformation > 100){
      textSize(18);
      fill("yellow");
      text("Summary:AVERAGE",100,340);
      car1.shapeColor = ("yellow");
    }

    if(deformation < 100){
      textSize(18);
      fill("green");
      text("Summary:GOOD",100,340);
      car1.shapeColor = ("green");
    }
  }

  
  if(wall2.x-car2.x < (car2.width + wall2.width)/2){
    car2.velocityX = 0;
    textSize(15);
    fill("aqua");
    text("Speed:" + Math.round(speed2),100,480);
    textSize(15);
    fill("aqua");
    text("Weight:" + Math.round(weight2),100,510);
    var deformation = Math.round(0.5 * width * speed2 * speed2/22500);
    textSize(15);
    fill("aqua");
    text("Deformation:" + deformation,100,450);

    if(deformation > 180){
      textSize(18);
      fill("red");
      text("Summary:LETHAL",100,540);
      car2.shapeColor = ("red");
    }

    if(deformation < 180 && deformation > 100){
      textSize(18);
      fill("yellow");
      text("Summary:AVERAGE",100,540);
      car2.shapeColor = ("yellow");
    }

    if(deformation < 100){
      textSize(18);
      fill("green");
      text("Summary:GOOD",100,540);
      car2.shapeColor = ("green");
    }
  }
  
  // to display the sprites
  drawSprites();
}