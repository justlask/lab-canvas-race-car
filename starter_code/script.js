window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  function startGame() {
    let height = window.innerHeight;
    let width = window.innerWidth/2

    document.getElementById("game-board").innerHTML = `<canvas id='road' height='${height}' width='${width}'>`

    let canvas = document.getElementById("road")
    let ctx = canvas.getContext("2d")


    function drawRoad() {
      ctx.fillStyle="green";
      //fillRect(x, y, width, height) 
      ctx.fillRect(0, 0, 50, height);
      ctx.fillRect(width-50, 0, 50, height);
  
      ctx.fillStyle="grey"
      ctx.fillRect(50, 0, 25, height);
      ctx.fillRect(width-75, 0, 25, height);
  
      ctx.fillStyle="white";
      ctx.fillRect(75, 0, 25, height);
      ctx.fillRect(width-100, 0, 25, height);
  
  
      ctx.fillStyle="grey"
      ctx.fillRect(100, 0, width-200, height);

      let y = 50
      while (y < height) {
        ctx.fillStyle="white"
        ctx.fillRect(width/2, y, 5, 20)
        y+= 50
      }
    }

    drawRoad();


  let car = {
    h: 100,
    w: 30,
    x: width/2-25,
    y: height-150,
    moveLeft:  function() {
      if (this.x-25 > 0) this.x -= 25 
      },
    moveRight: function() {
      if (this.x+75 < width) this.x += 25 
      }
  }


  function draw(car) {
    var img = new Image();
    img.onload = function() { 
       ctx.drawImage(img, car.x, car.y, 50, 100); 
    }
    img.src = "./images/car.png";
  }

  draw(car);


  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    updateCanvas();
  }
  

  function updateCanvas() {
    ctx.clearRect(0,0,width, height)
    drawRoad();
    ctx.fillStyle="black";
    ctx.fillText("car_x: " + car.x, 580,40);
    ctx.fillText("car_y: " + car.y, 580,60);
    draw(car)
  }
  
  updateCanvas();





  function createObstacles() {
    constructor() = {
      this.name =
    
    }

    ctx.fillStyle="black"
    ctx.fillRect(randomWidth, 0, randomWidth+50, 40);
  }

  function updateObstacles() {

  }

  createObstacles();
  setInterval(createObstacles, 500)
  setInterval(updateObstacles, 200)
  }



};







