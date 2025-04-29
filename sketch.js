
function draw() {
  background("#B6C6FA");
  fill("#F6EF90");
  circle(200, 200, 300); // rosto
  fill("rgb(245,230,230)");
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
   arc(180, 265, 80, 75, 0, PI + QUARTER_PI, CHORD);//boca
  stroke('red')
  fill("#F05751");
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(123, 115, 178, 113); // sobrancelha esquerda
  line(225, 116, 279, 106); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
