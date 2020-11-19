var hr,min,sec,d,m,yr;
function setup() {
  createCanvas(500,500);
 angleMode(DEGREES);
}

function draw() {
  background(0); 

  hr = hour();
  min = minute();
  sec = second();
  d = day();
  m = month();
  yr = year();

  textFont("Times New Roman");
  fill(255);
  textSize(25);
  text("Time-" +hr + ":"+ min +":"+ sec,280,400);
  text("Date- " + d + "|" + m + "|" + yr,280,450);
  

  textSize(20);
  text("12",195,90);
  text("03",310,205);
  text("09",80,205);
  text("06",200,310);

  textStyle(BOLD);
  textFont("Adreno Script Demo Regular");
  textSize(17);
  text("By KenaRathod",350,50);

  textStyle(ITALIC);
  textFont("Harlow Solid Italic")
  textSize(30);
  text("The TICK TOCK",130,40);

  translate(200,200);
  rotate(270);



  strokeWeight(2);
  stroke("white");
  noFill();
  s = map(sec,0,59,0,360);
  arc(0,0,300,300,0,s);

  push();
  rotate(s);
  line(0,0,95,0);
  pop();  

  strokeWeight(4);
  stroke(rgb(242, 101, 101));
  noFill();
  m = map(min,0,60,0,360);
  arc(0,0,292,292,0,m);

  push();
  rotate(m);
  line(0,0,87,0);
  pop(); 

  strokeWeight(5.5);
  stroke(rgb(255, 0, 0));
  noFill();
  h = map(hr%12,0,12,0,360);
  arc(0,0,280,280,0,h);

  push();
  rotate(h);
  line(0,0,75,0);
  pop();
  drawSprites();
}