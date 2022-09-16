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

var music

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
  mRoatation = random(0.0001, 1)
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
    for(var i = 0; i <= 500; i++)
    {
      stars.x.push(random(0, 2000))
      stars.y.push(random(0, 2000))
    }
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
  for(var i = 0; i <= 1000; i++)
  {
    stars.x.push(random(0, 2000))
    stars.y.push(random(0, 2000))
  }
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
  if(device == "mobile")
  {
    textAlign(CENTER)
    textSize(25)
    fill("red")
    text("your device isn't surported, you may experence some bugs", windowWidth/2, 50)
  }
  rectMode(CENTER)
  if(simulation == 0)
  {
  for(var i = 0; i <= 1000; i++)
  {
    fill(255)
    rect(stars.x[i], stars.y[i], 1, 1, 100)
    //console.log("test")
  }
  fill("yellow")
  rect(cam.x, cam.y, 100/zoom, 100/zoom, 1000)
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
  rect(50/zoom, 50/zoom, 17/zoom, 17/zoom, 1000)
  pop()

  push()
  rotate(sRoatation)
  fill("yellow")
  rect(830/zoom, 830/zoom, 45/zoom, 45/zoom, 100)
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
}
if(simulation == 1)
{

}
}

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
      cam.x = mouseX;
      cam.y = mouseY;
}