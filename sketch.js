var mRoatation = 0
var moonRoatation = 0
var vRoatation = 0
var eRoatation = 0
var maRoatation = 0
var jRoatation = 0
var sRoatation = 0
var uRoatation = 0
var nRoatation = 0
var pRoatation = 0
var iRoatation = 0
var speed = 100
var zoom = 1
var cam = {x: 0, y: 0}
var astroids = {d: [], r: [], a: [], s: []}
var outerAstroids = {d: [], r: [], a: [], s: []}
var stars = {x: [], y: []}

var simulation = 0
var device = "pc"

var loading = true
var ploaded = 0

var music

let sf = 1, tx = 0, ty = 0;

var contols = false

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  device = "mobile"
}else{
  // false for not mobile device
  device = "pc"
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  mRoatation = random(0.0001, 1)
  moonRoatation = random(0.0001, 1)
  vRoatation = random(0.0001, 1)
  eRoatation = random(0.0001, 1)
  maRoatation = random(0.0001, 1)
  jRoatation = random(0.0001, 1)
  sRoatation = random(0.0001, 1)
  uRoatation = random(0.0001, 1)
  nRoatation = random(0.0001, 1)
  pRoatation = random(0.0001, 1)
  iRoatation = random(0.0001, 1)
  cam.x = windowWidth/2
  cam.y = windowHeight/2

  if(device == "mobile")
  {
    for(var i = 0; i <= 100; i++)
    {
      let D = random(400, 500)
      let R = random(1, 5)
      let A = random(0.00001, 1)
      let S = random(0.00000003, 0.000000005)
      astroids.d.push(D)
      astroids.r.push(R)
      astroids.a.push(A)
      astroids.s.push(S)
    }
    for(var i = 0; i <= 300; i++)
    {
      let D = random(1600, 2100)
      let R = random(3, 7)
      let A = random(0.00001, 1)
      let S = random(0.0000000003, 0.00000000005)
      outerAstroids.d.push(D)
      outerAstroids.r.push(R)
      outerAstroids.a.push(A)
      outerAstroids.s.push(S)
    }
    /*for(var i = 0; i <= 500; i++)
    {
      stars.x.push(random(0, 2000))
      stars.y.push(random(0, 2000))
    }*/
  }
  else
  {
    for(var i = 0; i <= 300; i++)
    {
      let D = random(400, 500)
      let R = random(1, 5)
      let A = random(0.00001, 1)
      let S = random(0.00000003, 0.000000005)
      astroids.d.push(D)
      astroids.r.push(R)
      astroids.a.push(A)
      astroids.s.push(S)
    }
    for(var i = 0; i <= 800; i++)
    {
      let D = random(1600, 2100)
      let R = random(3, 7)
      let A = random(0.00001, 1)
      let S = random(0.0000000003, 0.00000000005)
      outerAstroids.d.push(D)
      outerAstroids.r.push(R)
      outerAstroids.a.push(A)
      outerAstroids.s.push(S)
    }
  }
  /*for(var i = 0; i <= 1000; i++)
  {
    stars.x.push(random(0, 2000))
    stars.y.push(random(0, 2000))
  }*/
}

function draw() {
  noStroke()
  mRoatation += 0.00052*speed
  moonRoatation += 0.005*speed
  vRoatation += 0.00019*speed
  eRoatation += 0.00002*speed
  maRoatation += 0.000005*speed
  jRoatation += 0.000001*speed
  sRoatation += 0.0000008*speed
  uRoatation += 0.0000003*speed
  nRoatation += 0.00000005*speed
  nRoatation += 0.000000001*speed
  pRoatation += 0.0000000001*speed
  iRoatation += 0.001*speed
  background(0) 
  textAlign(CENTER) 

  ploaded += 1

  if(ploaded <= 1000)
  {
  stars.x.push(random(0, windowWidth))
  stars.y.push(random(0, windowHeight))
  }
  if(ploaded <= 200) {}
  else
  {
    loading = false
  }

  for(var i = 0; i <= 1000; i++)
  {
    fill(255)
    rect(stars.x[i], stars.y[i], 1, 1, 100)
    //console.log("test")
  }

  rectMode(CENTER)
  if(loading == true)
  {
    push()
    fill("blue")
    rect(windowWidth/2, windowHeight/2, 100, 100, 1000)
    translate(windowWidth/2, windowHeight/2)
    rotate(ploaded/100)
    fill("green")
    rect(90, 90, 30, 30, 1000)
    pop()
    fill(255)
    textSize(50)
    text("  loading...", windowWidth/2, windowHeight/2+200)
  }
  else
  {

  rectMode(CENTER)
  if(simulation == 0)
  {
  pop()
  fill("yellow")
  rect(cam.x, cam.y, 100/zoom, 100/zoom, 1000)
  textSize(10/zoom)
  fill(255)
  //text("the sun", cam.x, cam.y+70/zoom)
  push()
  translate(cam.x, cam.y)
  push()
  rotate(mRoatation)
  fill("gray")
  rect(20/zoom, 140/zoom, 17/zoom, 17/zoom, 1000)
  pop()
  push()
  rotate(vRoatation)
  fill("green")
  rect(180/zoom, 180/zoom, 19/zoom, 19/zoom, 1000)
  pop()
  push()
  rotate(eRoatation)
  fill("Lime")
  rect(260/zoom, 260/zoom, 22/zoom, 22/zoom, 1000)
  translate(260/zoom, 260/zoom)
  rotate(moonRoatation)
  fill("gray")
  rect(25/zoom, 25/zoom, 2/zoom, 2/zoom, 1000)
  pop()
  push()
  rotate(maRoatation)
  fill("red")
  rect(330/zoom, 330/zoom, 20.5/zoom, 20.5/zoom, 1000)
  pop()
  playerControler()

  push()
  if(device == "pc")
  {
  for(var i = 0; i <= 300; i++)
  {
    astroids.a[i] += astroids.s[i]*speed
    rotate(astroids.a[i])
    fill("gray")
    rect(astroids.d[i]/zoom, astroids.d[i]/zoom, astroids.r[i]/zoom, astroids.r[i]/zoom, 1000/zoom)
    //console.log("test")
  }
  }
  else
  {
    for(var i = 0; i <= 100; i++)
    {
      astroids.a[i] += astroids.s[i]*speed
      rotate(astroids.a[i])
      fill("gray")
      rect(astroids.d[i]/zoom, astroids.d[i]/zoom, astroids.r[i]/zoom, astroids.r[i]/zoom, 1000/zoom)
      //console.log("test")
    }
  }
  pop()

  push()
  rotate(jRoatation)
  fill("orange")
  rect(730/zoom, 730/zoom, 55/zoom, 55/zoom, 100)
  translate(730/zoom, 730/zoom)
  rotate(iRoatation)
  fill("yellow")
  rect(70/zoom, 70/zoom, 17/zoom, 17/zoom, 1000)
  rotate(iRoatation/10)
  fill("gray")
  rect(50/zoom, 50/zoom, 20/zoom, 20/zoom, 1000)
  pop()

  push()
  rotate(sRoatation)
  fill("yellow")
  rect(850/zoom, 850/zoom, 45/zoom, 45/zoom, 100)
  noFill()
  stroke("orange")
  ellipse(850/zoom, 850/zoom, 55/zoom, 55/zoom, 100)
  ellipse(850/zoom, 850/zoom, 57/zoom, 57/zoom, 100)
  ellipse(850/zoom, 850/zoom, 58/zoom, 58/zoom, 100)
  ellipse(850/zoom, 850/zoom, 61/zoom, 61/zoom, 100)
  ellipse(850/zoom, 850/zoom, 62/zoom, 62/zoom, 100)
  ellipse(850/zoom, 850/zoom, 65/zoom, 65/zoom, 100)
  ellipse(850/zoom, 850/zoom, 67/zoom, 67/zoom, 100)
  ellipse(850/zoom, 850/zoom, 68/zoom, 68/zoom, 100)
  ellipse(850/zoom, 850/zoom, 69/zoom, 69/zoom, 100)
  //translate()
  pop()

  push()
  rotate(uRoatation)
  fill("aqua")
  rect(1030/zoom, 1030/zoom, 25/zoom, 25/zoom, 100)
  pop()

  push()
  rotate(nRoatation)
  fill("blue")
  rect(1100/zoom, 1100/zoom, 30/zoom, 30/zoom, 100)
  pop()

  push()
  rotate(pRoatation)
  fill("brown")
  rect(1500/zoom, 1500/zoom, 10/zoom, 10/zoom, 10000)
  pop()

  push()
  if(device == "pc")
  {
  for(var i = 0; i <= 800; i++)
  {
    if(outerAstroids.d[i] < cam.x+ 2000/zoom || !outerAstroids.d[i] < cam.x-2000/zoom || outerAstroids.d[i] < cam.y+ 2000/zoom || !outerAstroids.d[i] < cam.y-2000/zoom);
    {
    outerAstroids.a[i] += outerAstroids.s[i]*speed 
    rotate(outerAstroids.a[i])
    fill("gray")
    rect(outerAstroids.d[i]/zoom, outerAstroids.d[i]/zoom, outerAstroids.r[i]/zoom, outerAstroids.r[i]/zoom, 100/zoom)
    //console.log("test")
    }
  }
}
else
{
  for(var i = 0; i <= 300; i++)
  {
    if(outerAstroids.d[i] < cam.x+ 2000/zoom || !outerAstroids.d[i] < cam.x-2000/zoom || outerAstroids.d[i] < cam.y+ 2000/zoom || !outerAstroids.d[i] < cam.y-2000/zoom);
    {
    outerAstroids.a[i] += outerAstroids.s[i]*speed 
    rotate(outerAstroids.a[i])
    fill("gray")
    rect(outerAstroids.d[i]/zoom, outerAstroids.d[i]/zoom, outerAstroids.r[i]/zoom, outerAstroids.r[i]/zoom, 100/zoom)
    //console.log("test")
    }
  }
}
  pop()
  pop()
  if(device == "mobile")
  {
    textAlign(CENTER)
    textSize(25)
    fill("red")
    text("your device isn't surported, you may experence some bugs", windowWidth/2, 50)
  }
    push()
  fill(255)
  textSize(30)
  textAlign(LEFT);
  if(contols == true)
  {
    text("[A]: left", 10, windowHeight-50)
    text("[S]: down", 10, windowHeight-80)
    text("[W]: up", 10, windowHeight-110)
    text("[D]: right", 10, windowHeight-140)
    text("[Q]: zoom in", 10, windowHeight-170)
    text("[E]: zoom out", 10, windowHeight-200)
    text("[Z]: speed up", 10, windowHeight-230)
    text("[X]: slow down", 10, windowHeight-260)
    text("[1 - 3]: change simulation", 10, windowHeight-290)
  }
  else if(contols == false)
  {
  text("[C]: controls", 10, windowHeight-50)
  text("[F2]: advaced controls", 10, windowHeight-20)
  }
  else
  {
    text("[P]: debug menu", 10, windowHeight-80)
    text("[O]: mobile ovreide", 10, windowHeight-50)
    text("[Shift+G+L]: emergecy sutdown (crashes the simulation)", 10, windowHeight-20)
  }
}
if(simulation == 1)
{
  textSize(30)
  textAlign(LEFT);
  text("view only simulation", 10, windowHeight-50)
  textAlign(CENTER)
  textSize(50)
  fill(255)
  text("Earth", windowWidth/2, 50)
  push()
  fill("Lime")
  rect(windowWidth/2, windowHeight/2, 200, 200, 1000)
  translate(windowWidth/2, windowHeight/2)
  rotate(moonRoatation/1000*speed)
  fill("gray")
  rect(300, 300, 50, 50, 100)
  pop()
}
if(simulation == 2)
{
  textSize(30)
  textAlign(LEFT);
  text("view only simulation", 10, windowHeight-50)
  textAlign(CENTER)
  textSize(50)
  fill(255)
  text("Jupiter", windowWidth/2, 50)
  push()
  fill("orange")
  rect(windowWidth/2, windowHeight/2, 200, 200, 1000)
  translate(windowWidth/2, windowHeight/2)
  rotate(iRoatation/5)
  fill("yellow")
  rect(350, 350, 50, 50, 1000)
  rotate(iRoatation/2)
  fill("gray")
  rect(300, 300, 60, 60, 1000)
  pop()
}
if(keyIsDown(49)) {simulation = 0}
if(keyIsDown(50)) {simulation = 1}
if(keyIsDown(51)) {simulation = 2}
  }
  if(debugMenu == true)
  {
    textSize(10)
    if(getFrameRate() < 10)
    {fill("red")}
    else{fill(255)}
    text("fps: " + round(getFrameRate()), 10, 15)
    fill(255)
    text("mouseX: " + round(mouseX), 10, 25)
    text("mouseY: " + round(mouseY), 10, 35)
    text("camX: " + round(cam.x), 10, 45)
    text("camY: " + round(cam.y), 10, 55)
    text("zoom: " + zoom, 10, 65)
    text("device: " + device, 10, 75)
  }
  if(keyIsDown(16) && keyIsDown(71) && keyIsDown(76))
  {
    console.warn("simulaton stopping...")
    throw("simulaton shutdown")
  }
}

var debugMenu = false

function playerControler()
{
  //arrow keys
  //if(keyIsDown(LEFT_ARROW)) {playerX -= playerSpeed};
  //if(keyIsDown(RIGHT_ARROW)) {playerX += playerSpeed};
  //if(keyIsDown(UP_ARROW)) {playerY -= playerSpeed};
  //if(keyIsDown(DOWN_ARROW)) {playerY += playerSpeed};

  // A S W D
  if(!zoom <= 0.1)
  {
  if(keyIsDown(81)) {zoom -= 0.01}
  }
  if(keyIsDown(69)) {zoom += 0.01}
  if(keyIsDown(87)) {cam.y += 20/zoom}
  if(keyIsDown(83)) {cam.y -= 20/zoom}
  if(keyIsDown(65)) {cam.x += 20/zoom}
  if(keyIsDown(68)) {cam.x -= 20/zoom}

  if(keyIsDown(90)) {speed += 10}
  if(keyIsDown(88)) {speed -= 10}

  if(keyIsDown(67)) {contols = true}
  if(keyIsDown(113)) {contols = "advanced"}
  if(keyIsDown(80)) {debugMenu = true}
  if(keyIsDown(79)) {device = "mobile"}

  if(device == "mobile")
  {
    
  }
  
}

function mouseWheel(event) {
  zoom += event.delta/600;
  //uncomment to block page scrolling
  //return false;
}

var m = {x: 0, y: 0}

function mouseDragged() {
      //cam.x = mouseX;
      //cam.y = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for(var i = 0; i <= 1000; i++)
  {
    stars.x.pop(i)
    stars.y.pop(i)
  }
  ploaded = 0
}