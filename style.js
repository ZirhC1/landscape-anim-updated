//BEGGINING
//CANVAS SETUP
var cnv = document.getElementById("myCanvas");
var info = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;

//animation variables
//clouds
let cloud1x = 100;
let cShade1x = 100;

let cloud2x = 600;
let cShade2x = 600;

let cloud3x = 550;
let cShade3x = 550;

let cloud4x = 300;
let cShade4x = 300;
//sun
let sunY = 120;

//sky
let skyR = 0;
let skyG = 239;
let skyB = 255;

//Base
info.fillStyle = "white";

info.fillRect(0, 0, 800, 800);

//FACING OUTWARDS/ TOWARDS THE SCREEEN NUMERICALLY
requestAnimationFrame(draw);

function draw() {
  //Sun
  info.fillStyle = "yellow";
  info.beginPath();
  //contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
  info.arc(290, sunY, 100, 0, 2 * Math.PI);
  info.fill();

  //Sky 1
  info.fillStyle = `rgb(${skyR},${skyG} ,${skyB})`;
  info.fillRect(0, 0, 1000, 650);

  info.fillStyle = "yellow";
  info.beginPath();
  //contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
  info.arc(290, sunY, 100, 0, 2 * Math.PI);
  info.fill();

  //Snow 1
  info.fillStyle = "white";
  info.fillRect(0, 650, 1000, 800);

  //TRIANGLES right to left

  //triangle 1
  info.fillStyle = "grey";
  info.beginPath();
  info.moveTo(0, 300);
  info.lineTo(0, 650);
  info.lineTo(400, 650);
  info.lineTo(0, 300);
  info.fill();

  //triangle 2
  info.beginPath();
  info.fillStyle = "grey";
  info.moveTo(1000, 550);
  info.lineTo(1000, 650);
  info.lineTo(400, 650);
  info.lineTo(1000, 550);
  info.fill();

  //mountainshade;
  info.beginPath();
  info.fillStyle = "rgb(178,172,172";
  info.fillRect(0, 650, 1000, 25);

  //house base
  info.fillStyle = "rgb(153,76,0";
  info.fillRect(600, 600, 250, 200);

  //house door
  info.fillStyle = "rgb(153,76,0";
  info.fillRect(600, 600, 250, 200);

  //house window
  info.fillStyle = "yellow";
  info.fillRect(760, 670, 50, 50);

  //housedoor
  info.fillStyle = "rgb(102,51,0";
  info.fillRect(632, 670, 40, 130);

  //house roof
  info.beginPath();
  info.fillStyle = "rgb(102,51,0";
  info.moveTo(700, 550);
  info.lineTo(850, 600);
  info.lineTo(600, 600);
  info.lineTo(600, 550);
  info.fill();

  //house post 1 (left)
  info.fillStye = "rgb(102,51,0";
  info.fillStyle = info.fillRect(600, 550, 25, 250);

  //house posts 2 (right)
  info.fillStye = "rgb(102,51,0";
  info.fillStyle = info.fillRect(680, 560, 25, 240);

  // //tiles

  //TILE 1
  info.fillStyle = "grey";
  info.fillRect(540, 820, 120, 60);
  //Shade of 1
  info.fillStyle = "darkgrey";
  info.fillRect(540, 820, 120, 10);

  //TILE 2
  info.fillStyle = "grey";
  info.fillRect(370, 880, 100, 40);
  //Shade of 2
  info.fillStyle = "darkgrey";
  info.fillRect(370, 880, 100, 10);

  //TILE 3
  info.fillStyle = "grey";
  info.fillRect(620, 935, 100, 40);
  //Shade of 3
  info.fillStyle = "darkgrey";
  info.fillRect(620, 935, 100, 10);

  //house window line 1
  info.strokeStyle = "black";
  info.lineWidth = 3;
  info.beginPath();
  info.moveTo(785, 670);
  info.lineTo(785, 720);
  info.stroke();

  //house window line 2
  info.strokeStyle = "black";
  info.lineWidth = 3;
  info.beginPath();
  info.moveTo(760, 695);
  info.lineTo(810, 695);
  info.stroke();

  //house outline
  info.strokeStyle = "rgb(102,51,0";
  info.lineWidth = 6;
  info.beginPath();
  info.moveTo(760, 670);
  info.lineTo(810, 670);
  info.stroke();

  info.strokeStyle = "rgb(102,51,0";
  info.lineWidth = 6;
  info.beginPath();
  info.moveTo(760, 720);
  info.lineTo(810, 720);
  info.stroke();

  info.strokeStyle = "rgb(102,51,0";
  info.lineWidth = 6;
  info.beginPath();
  info.moveTo(760, 670);
  info.lineTo(760, 720);
  info.stroke();

  //house window line 1
  info.strokeStyle = "rgb(102,51,0";
  info.lineWidth = 6;
  info.beginPath();
  info.moveTo(810, 670);
  info.lineTo(810, 720);
  info.stroke();

  // clouds
  info.fillStyle = "white";
  info.fillRect(cloud1x, 250, 200, 100);
  //shade cloud
  info.fillStyle = "lightgrey";
  info.fillRect(cShade1x, 330, 200, 40);

  info.fillStyle = "white";
  info.fillRect(cloud2x, 25, 300, 200);
  //shade cloud
  info.fillStyle = "lightgrey";
  info.fillRect(cShade2x, 175, 300, 50);

  info.fillStyle = "white";
  info.fillRect(cloud3x, 300, 300, 100);
  //shadecloud
  info.fillStyle = "lightgrey";
  info.fillRect(cShade3x, 400, 300, 50);

  info.fillStyle = "white";
  info.fillRect(cloud4x, 500, 200, 50);
  //shadecloud
  info.fillStyle = "lightgrey";
  info.fillRect(cShade4x, 530, 200, 20);

  //doorknob
  info.fillStyle = "yellow";
  info.beginPath();
  //contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
  info.arc(645, 740, 5, 0, 2 * Math.PI);
  info.fill();
  //animation
  cloud1x = cloud1x + 0.7;
  cShade1x = cShade1x + 0.7;

  cloud2x = cloud2x + 0.9;
  cShade2x = cShade2x + 0.9;

  cloud3x = cloud3x + 0.5;
  cShade3x = cShade3x + 0.5;

  cloud4x = cloud4x + 0.4;
  cShade4x = cShade4x + 0.4;

  //when clouds exit the right side of the canvas, move it to the left side
  if (cloud1x >= 1000) {
    cloud1x = -300;
  }
  if (cloud2x >= 1000) {
    cloud2x = -300;
  }
  if (cloud3x >= 1000) {
    cloud3x = -300;
  }
  if (cloud4x >= 1000) {
    cloud4x = -300;
  }

  if (cShade1x >= 1000) {
    cShade1x = -300;
  }
  if (cShade2x >= 1000) {
    cShade2x = -300;
  }
  if (cShade3x >= 1000) {
    cShade3x = -300;
  }
  if (cShade4x >= 1000) {
    cShade4x = -300;
  }
  //SUN

  if (sunY >= 120) {
    sunY = sunY + 1; // or sunY--
  }
  //SKYR
  if (skyR <= 255) {
    skyR++;
  }

  if (skyG >= 102) {
    skyG--;
  }

  if (skyB >= 0) {
    skyB--;
  }
  requestAnimationFrame(draw);
}
//keyboard hander
document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  if (event.code == "KeyQ") {
    console.log("You pressed the Q key on the keyboard!!");
    //BEGGINING
    //CANVAS SETUP
    var cnv = document.getElementById("myCanvas");
    var info = cnv.getContext("2d");
    cnv.width = 1000;
    cnv.height = 1000;

    //animation variables
    //clouds
    let cloud1x = 100;
    let cShade1x = 100;

    let cloud2x = 600;
    let cShade2x = 600;

    let cloud3x = 550;
    let cShade3x = 550;

    let cloud4x = 300;
    let cShade4x = 300;
    //sun
    let sunY = 120;

    //sky
    let skyR = 255;
    let skyG = 102;
    let skyB = 0;

    //Base
    info.fillStyle = "white";

    info.fillRect(0, 0, 800, 800);

    //FACING OUTWARDS/ TOWARDS THE SCREEEN NUMERICALLY
    requestAnimationFrame(draw);

    function draw() {
      //Sun
      info.fillStyle = "yellow";
      info.beginPath();
      //contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
      info.arc(290, sunY, 100, 0, 2 * Math.PI);
      info.fill();

      //Sky 1
      info.fillStyle = `rgb(${skyR},${skyG} ,${skyB})`;
      info.fillRect(0, 0, 1000, 650);

      info.fillStyle = "yellow";
      info.beginPath();
      //contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
      info.arc(290, sunY, 100, 0, 2 * Math.PI);
      info.fill();

      //Snow 1
      info.fillStyle = "rgb(15,228,0)";
      info.fillRect(0, 650, 1000, 800);

      //TRIANGLES right to left

      //triangle 1
      info.fillStyle = "rgb(22,185,10)";
      info.beginPath();
      info.moveTo(0, 300);
      info.lineTo(0, 650);
      info.lineTo(400, 650);
      info.lineTo(0, 300);
      info.fill();

      //triangle 2
      info.beginPath();
      info.fillStyle = "rgb(22,185,10)";
      info.moveTo(1000, 550);
      info.lineTo(1000, 650);
      info.lineTo(400, 650);
      info.lineTo(1000, 550);
      info.fill();

      //mountainshade;
      info.beginPath();
      info.fillStyle = "rgb(77,188,3";
      info.fillRect(0, 650, 1000, 25);

      //house base
      info.fillStyle = "rgb(153,76,0";
      info.fillRect(600, 600, 250, 200);

      //house door
      info.fillStyle = "rgb(153,76,0";
      info.fillRect(600, 600, 250, 200);

      //house window
      info.fillStyle = "yellow";
      info.fillRect(760, 670, 50, 50);

      //housedoor
      info.fillStyle = "rgb(102,51,0";
      info.fillRect(632, 670, 40, 130);

      //house roof
      info.beginPath();
      info.fillStyle = "rgb(102,51,0";
      info.moveTo(700, 550);
      info.lineTo(850, 600);
      info.lineTo(600, 600);
      info.lineTo(600, 550);
      info.fill();

      //house post 1 (left)
      info.fillStye = "rgb(102,51,0";
      info.fillStyle = info.fillRect(600, 550, 25, 250);

      //house posts 2 (right)
      info.fillStye = "rgb(102,51,0";
      info.fillStyle = info.fillRect(680, 560, 25, 240);

      // //tiles

      //TILE 1
      info.fillStyle = "grey";
      info.fillRect(540, 820, 120, 60);
      //Shade of 1
      info.fillStyle = "darkgrey";
      info.fillRect(540, 820, 120, 10);

      //TILE 2
      info.fillStyle = "grey";
      info.fillRect(370, 880, 100, 40);
      //Shade of 2
      info.fillStyle = "darkgrey";
      info.fillRect(370, 880, 100, 10);

      //TILE 3
      info.fillStyle = "grey";
      info.fillRect(620, 935, 100, 40);
      //Shade of 3
      info.fillStyle = "darkgrey";
      info.fillRect(620, 935, 100, 10);

      //house window line 1
      info.strokeStyle = "black";
      info.lineWidth = 3;
      info.beginPath();
      info.moveTo(785, 670);
      info.lineTo(785, 720);
      info.stroke();

      //house window line 2
      info.strokeStyle = "black";
      info.lineWidth = 3;
      info.beginPath();
      info.moveTo(760, 695);
      info.lineTo(810, 695);
      info.stroke();

      //house outline
      info.strokeStyle = "rgb(102,51,0";
      info.lineWidth = 6;
      info.beginPath();
      info.moveTo(760, 670);
      info.lineTo(810, 670);
      info.stroke();

      info.strokeStyle = "rgb(102,51,0";
      info.lineWidth = 6;
      info.beginPath();
      info.moveTo(760, 720);
      info.lineTo(810, 720);
      info.stroke();

      info.strokeStyle = "rgb(102,51,0";
      info.lineWidth = 6;
      info.beginPath();
      info.moveTo(760, 670);
      info.lineTo(760, 720);
      info.stroke();

      //house window line 1
      info.strokeStyle = "rgb(102,51,0";
      info.lineWidth = 6;
      info.beginPath();
      info.moveTo(810, 670);
      info.lineTo(810, 720);
      info.stroke();

      // clouds
      info.fillStyle = "white";
      info.fillRect(cloud1x, 250, 200, 100);
      //shade cloud
      info.fillStyle = "lightgrey";
      info.fillRect(cShade1x, 330, 200, 40);

      info.fillStyle = "white";
      info.fillRect(cloud2x, 25, 300, 200);
      //shade cloud
      info.fillStyle = "lightgrey";
      info.fillRect(cShade2x, 175, 300, 50);

      info.fillStyle = "white";
      info.fillRect(cloud3x, 300, 300, 100);
      //shadecloud
      info.fillStyle = "lightgrey";
      info.fillRect(cShade3x, 400, 300, 50);

      info.fillStyle = "white";
      info.fillRect(cloud4x, 500, 200, 50);
      //shadecloud
      info.fillStyle = "lightgrey";
      info.fillRect(cShade4x, 530, 200, 20);

      //doorknob
      info.fillStyle = "yellow";
      info.beginPath();
      //contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
      info.arc(645, 740, 5, 0, 2 * Math.PI);
      info.fill();
      //animation
      cloud1x = cloud1x + 0.7;
      cShade1x = cShade1x + 0.7;

      cloud2x = cloud2x + 0.9;
      cShade2x = cShade2x + 0.9;

      cloud3x = cloud3x + 0.5;
      cShade3x = cShade3x + 0.5;

      cloud4x = cloud4x + 0.4;
      cShade4x = cShade4x + 0.4;

      //when clouds exit the right side of the canvas, move it to the left side
      if (cloud1x >= 1000) {
        cloud1x = -200;
      }
      if (cloud2x >= 1000) {
        cloud2x = -200;
      }
      if (cloud3x >= 1000) {
        cloud3x = -200;
      }
      if (cloud4x >= 1000) {
        cloud4x = -200;
      }

      if (cShade1x >= 1000) {
        cShade1x = -200;
      }
      if (cShade2x >= 1000) {
        cShade2x = -200;
      }
      if (cShade3x >= 1000) {
        cShade3x = -200;
      }
      if (cShade4x >= 1000) {
        cShade4x = -200;
      }
      //SUN

      if (sunY >= 120) {
        sunY = sunY + 0.6; // or sunY--
      }
      //SKYR
      if (skyR >= 74) {
        skyR--;
      }

      if (skyG <= 235) {
        skyG++;
      }

      if (skyB <= 235) {
        skyB++;
      }
      requestAnimationFrame(draw);
    }
  }
}
