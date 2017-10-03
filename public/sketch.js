
var socket;

function setup() {
  createCanvas(800, 600);
  background("#f2f2f2");
  
  socket = io.connect('http://localhost:3000');
  
  socket.on('mouse',
 
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      
      fill(0,0,0);
      noStroke();
      ellipse(data.x, data.y, 10, 10);
    }
  );
}

function mouseDragged() {
  
  fill(0);
  noStroke();
  ellipse(mouseX,mouseY,10,10);
  
  sendmouse(mouseX,mouseY);
}

function sendmouse(xpos, ypos) {
  
  var temp = {
    x: xpos,
    y: ypos
  };
  socket.emit('mouse',temp);
}
