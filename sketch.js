function setup() {
  createCanvas(425, 425, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(45);
  // rotateX(frameCount/1.5)
  rotateY(frameCount/1.5)
  noFill()
  stroke(255)
  for (var i=0; i<60; i++) {
  	var r = map(sin(frameCount / 2), -1, 1, 100, 255)
  	var g = map(i,0,50,100,255)
  	var b = map(cos(frameCount), -1,1,200,255)
  	stroke(r,g,b)
    beginShape()
    for (var j=0; j<360; j+=1){
      var rad = i*3
      var x=rad*cos(j)
      var y=rad*sin(j)
      var z=sin(frameCount*2+i*10)*20
      vertex(x,y,z)
    }
    endShape(CLOSE)
  }
}