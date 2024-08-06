function show(e) {
  idx = Number(e.id.slice(1));
  document.querySelectorAll(".button").forEach((element) => element.style.background = "");
  document.getElementById("f"+idx.toString()).style.background = "#f0f0f0";
  init = "1";
}

function load() {
  var image_folder = document.getElementById("image-folder").value;
  image_arr = fs.readdirSync(image_folder);
  document.getElementById("image-panel").innerHTML = "";
  for (var i=0; i<image_arr.length; i++) {
	document.getElementById("image-panel").innerHTML += "<div id='f"+i+"' class='button' onclick='show(this)'>"+image_arr[i]+"</div>";
    image_arr[i] = image_folder+"/"+image_arr[i];
  }
  idx = 0;
  init = "1";
  document.getElementById("f"+idx.toString()).style.background = "#f0f0f0";
}

function setup() {
  createCanvas(windowWidth*0.7,windowHeight);
  background(255);
}

function draw() {
  background(255);
  if (init == "1") {
    img = loadImage(image_arr[idx]);
	init = "0";
  }
  if (img != undefined) {
    image(img,windowWidth*0.7/2-img.width/2+translateX+historyX,windowHeight/2-img.height/2+translateY+historyY);
  }
}

function mousePressed() {
  startX = mouseX;
  startY = mouseY;
}

function mouseReleased() {
  historyX += translateX;
  historyY += translateY;
  translateX = 0;
  translateY = 0;
}

function mouseDragged() {
  translateX = mouseX - startX;
  translateY = mouseY - startY;
}

function keyPressed() {
  if (key == key_dict["previous"]) {
	if (idx > 0) {
      idx = idx - 1;
	  document.querySelectorAll(".button").forEach((element) => element.style.background = "");
      document.getElementById("f"+idx.toString()).style.background = "#f0f0f0";
      init = "1";
	}
  } else if (key == key_dict["next"]) {
    if (idx < image_arr.length - 1) {
      idx = idx + 1;
	  document.querySelectorAll(".button").forEach((element) => element.style.background = "");
      document.getElementById("f"+idx.toString()).style.background = "#f0f0f0";
      init = "1";
	}
  }
}

const fs = window.electronFs;
var image_arr = [];
var img;
var idx = 0;
var init = "0";
var startX = 0;
var startY = 0;
var translateX = 0;
var translateY = 0;
var historyX = 0;
var historyY = 0;
var key_dict = {"previous":"a","next":"d"};
