var movingRect,fixedRect

function setup(){
  createCanvas(400,400)

  movingRect = createSprite(100,200,50,50)
  fixedRect = createSprite(200,200,50,50)

}
function draw(){
 background(0)




  drawSprites();
}
