var wd;
var ht;

var shape;

var color;
var size;
var old_x;
var old_y;
var new_x;
var new_y;

function handleMouseMove(evt) {
  
  new_x = evt.stageX;
  new_y = evt.stageY;
  if (old_x) {
    shape.graphics.beginStroke(color)
        .setStrokeStyle(size, "round")
        .moveTo(old_x, old_y)
        .lineTo(new_x, new_y);
    stage.update();
    //console.log(old_x + " " + old_y + ", " + new_x + " " + new_y);
  }
  old_x = new_x;
  old_y = new_y;
}

function init() {
  stage = new createjs.Stage("just_paint");
  stage.enableDOMEvents(true);

  wd = stage.canvas.width;
  ht = stage.canvas.height;
  
  shape = new createjs.Shape();
  color = "#0FF"; // createjs.Graphics.getHSL(180, 100, 50);
  size = 10;

  var label = new createjs.Text("just paint", "24px Arial");
  label.x = 10;
  label.y = 10;
  // nothing works unless this is done
  stage.addChild(shape, label);

  var context = stage.canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;

  stage.on("stagemousemove", handleMouseMove);
  stage.update();
}
