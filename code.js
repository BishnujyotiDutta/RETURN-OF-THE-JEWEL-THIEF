var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["31f3060c-3e72-4cb5-aaad-e21c2b3b8dad"],"propsByKey":{"31f3060c-3e72-4cb5-aaad-e21c2b3b8dad":{"name":"BJD","sourceUrl":null,"frameSize":{"x":38,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"8VT9FHP9lpIIZt9DxryVXKgfRet20GW2","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":33},"rootRelativePath":"assets/31f3060c-3e72-4cb5-aaad-e21c2b3b8dad.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thief = createSprite(10,385,10,10);
thief.shapeColor = "black";

var laser1 = createSprite(298,32,200,5);
laser1.shapeColor = "red";
laser1.velocityY = 5;

var laser2 = createSprite(100,310,200,5);
laser2.shapeColor = "red";
laser2.velocityY = -5;

var diamond = createSprite(380,20);
diamond.setAnimation("BJD");

function draw() {
  background("white");
  createEdgeSprites();
  
  thief.bounceOff(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  
  thief.velocityX = 0;
  thief.velocityY = 0;
  
  if (keyDown("UP_ARROW")) {
    thief.velocityY = -2;
    
  }
  
  if (keyDown("DOWN_ARROW")) {
    thief.velocityY = 2;
    
  }
  
   if (keyDown("RIGHT_ARROW")) {
    thief.velocityX = 2;
    
  }
  
  if (keyDown("LEFT_ARROW")) {
    thief.velocityX = -2;
    
  }
  
  if(thief.isTouching(diamond)){
    textSize(20);
    stroke("black");
    text("DIAMOND IS STOLEN!!!",100, 200);
    
    thief.setVelocity(0,0);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    
  }
  
   if (laser1.isTouching(thief) || laser2.isTouching(thief)) {
    textSize(20);
    text("THIEF IS CAUGHT!!", 100, 200);
    
     laser1.setVelocity(0, 0);
     laser2.setVelocity(0,0);
     thief.setVelocity(0,0);
    
  }
  
  drawSprites();
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
