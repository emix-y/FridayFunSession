var canvasSize = 400; 


function setup() {
    var canvas = createCanvas(canvasSize,canvasSize);
    canvas.parent("p5container");
}

function draw() {
    var eyeX = map(mouseX,0,canvasSize,125,175);
    var eyeY = map(mouseY,0,canvasSize,120,160);

   // console.log(mouseX,mouseY)

    background(225);

    stroke(100)
    strokeWeight(4)
    fill(255, 255, 0);
    ellipse(width / 2,height / 2, 300);

    strokeWeight(4)
    fill(255);
    ellipse(eyeX,eyeY,45,60)
    ellipse(eyeX +100,eyeY,45,60)


    fill(255,215,0)
    strokeWeight(0)
    ellipse(300,200,50)
    ellipse(100,200,50)

    stroke(100)
    strokeWeight(4)

    noFill()
    arc(200,220,180,180,radians(30),radians(150));

}