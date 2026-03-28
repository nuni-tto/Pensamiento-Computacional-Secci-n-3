function setup() {
  createCanvas(450, 680);
  angleMode(DEGREES);
}

function draw() {
  background(236, 221, 190);
  strokeWeight(2);

  // CAPA 1: SOMBRAS DIAGONALES
  // Ajustadas para quedar debajo de cada posición de color
  
  fill(0); 
  noStroke();

  // Fila 1
  
  push(); translate(186, 135); rotate(134); rect(0, 0, 78, 78); pop(); square(76,135,55); // 
  push(); translate(296, 135); rotate(134); rect(0, 0, 78, 78); pop(); square(186,135,55); 
  
  push(); translate(406, 135); rotate(134); rect(0, 0, 78, 78); pop(); square(296,135,55); // 
  

  // Fila 2
 
  push(); translate(186, 246); rotate(134); rect(0, 0, 78, 78); pop(); square(76,245,55); // 
  
  push(); translate(296, 246); rotate(134); rect(0, 0, 78, 78); pop(); square(186,245,55); // 
  
  push(); translate(406, 246); rotate(134); rect(0, 0, 78, 78); pop(); square(296,245,55); // 
  

  // Fila 3
  
  push(); translate(186, 357); rotate(134); rect(0, 0, 78, 78); pop(); square(76,356,55);
  
  push(); translate(296, 357); rotate(134); rect(0, 0, 78, 78); pop(); square(186,356,55);
  
  push(); translate(406, 357); rotate(134); rect(0, 0, 78, 78); pop(); square(296,356,55);
  
  
  // Fila 4
  
  push(); translate(186, 466); rotate(134); rect(0, 0, 78, 78); pop(); square(76,467,55);
 
  push(); translate(296, 466); rotate(134); rect(0, 0, 78, 78); pop(); square(186,467,55);
  
  push(); translate(406, 466); rotate(134); rect(0, 0, 78, 78); pop(); square(296,467,55);

 
  // CAPA 2: CUADRADOS DE COLORES (FRENTE)
  // Dibujados al final para que tapen parte de la sombra

  noStroke(0);

  // --- FILA 1 ---
  fill(193, 50, 44);  square(130, 80, 55);  // Rojo
  fill(241, 187, 0); square(240, 80, 55);  // Amarillo
  fill(2, 104, 189);  square(350, 80, 55);  // Azul

  // --- FILA 2 ---
  fill(241, 187, 0);  square(130, 190, 55); // Amarillo
  fill(2, 104, 189);  square(240, 190, 55); // Azul
  fill(193, 50, 44); square(350, 190, 55); // Rojo

  // --- FILA 3 ---
  fill(2, 104, 189);  square(130, 300, 55); // Azul
  fill(193, 50, 44); square(240, 300, 55); // Rojo
  fill(241, 187, 0);  square(350, 300, 55); // Amarillo

  // --- FILA 4 ---
  fill(193, 50, 44); square(130, 410, 55); // Rojo
  fill(241, 187, 0);  square(240, 410, 55); // Amarillo
  fill(2, 104, 189);  square(350, 410, 55); // Azul


  // TEXTO INFERIOR

  fill(0); 
  noStroke(); 

  
  textStyle(BOLD);
  textSize(37);
  text("BAUHAUS", 75, 580);
  
  textStyle(BOLD);
  textSize(19);
  text("AUSSTELLUNG", 268, 568);
  
  textStyle(BOLD);
  textSize(19);
  text("JULI, AUGUST, SEPTEMBER", 75, 610);
  
  textStyle(BOLD);
  textSize(34);
  text("1923", 337, 610);
  
  

  noLoop();
}
