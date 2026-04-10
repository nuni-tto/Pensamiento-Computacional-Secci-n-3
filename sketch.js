function setup() {
  createCanvas(450, 680);
  angleMode(DEGREES); // Se trabaja en grados para facilitar el control de las rotaciones
}

function draw() {
  background(236, 221, 190);
  strokeWeight(2);

  // CAPA 1: SOMBRAS DIAGONALES
  // Esta capa se dibuja primero para que funcione como base.
  // Representa los rectangulos diagonales presentes en el afiche.
  
  fill(0); 
  noStroke();
  
  // Para construir la diagonal, se utiliza un rectángulo rotado en 134°.
  // Esta forma por sí sola generaba un término en punta,
  // se incorpora un cuadrado adicional para lograr un cierre más recto,
  // similar al observado en la imagen original.
  
  // El uso de push() y pop() permite aislar cada transformación,
  // evitando que la rotación afecte a las demás figuras.

  // Fila 1
  
  push(); translate(186, 135); rotate(134); rect(0, 0, 78, 78); pop(); square(76,135,55); 
  push(); translate(296, 135); rotate(134); rect(0, 0, 78, 78); pop(); square(186,135,55); 
  push(); translate(406, 135); rotate(134); rect(0, 0, 78, 78); pop(); square(296,135,55);  
  

  // Fila 2
 
  push(); translate(186, 246); rotate(134); rect(0, 0, 78, 78); pop(); square(76,245,55); 
  
  push(); translate(296, 246); rotate(134); rect(0, 0, 78, 78); pop(); square(186,245,55); 
  
  push(); translate(406, 246); rotate(134); rect(0, 0, 78, 78); pop(); square(296,245,55); 
  

  // Fila 3
  
  push(); translate(186, 357); rotate(134); rect(0, 0, 78, 78); pop(); square(76,356,55);
  
  push(); translate(296, 357); rotate(134); rect(0, 0, 78, 78); pop(); square(186,356,55);
  
  push(); translate(406, 357); rotate(134); rect(0, 0, 78, 78); pop(); square(296,356,55);
  
  
  // Fila 4
  
  push(); translate(186, 466); rotate(134); rect(0, 0, 78, 78); pop(); square(76,467,55);
 
  push(); translate(296, 466); rotate(134); rect(0, 0, 78, 78); pop(); square(186,467,55);
  
  push(); translate(406, 466); rotate(134); rect(0, 0, 78, 78); pop(); square(296,467,55);

 
  // CAPA 2: CUADRADOS DE COLORES (FRENTE)
  // Dibujados al final para que tapen parte de la sombra.
  // Se establece una jerarquía visual.

  noStroke(0);
  
  // Se emplean colores primarios (rojo, amarillo y azul),
  // característicos del lenguaje visual de la Bauhaus,
  // generando contraste con las formas negras y el fondo neutro.

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


  // Texto
  // El texto se posiciona en la parte inferior,
  // respetando la composición del afiche original.
  // Se utilizan variaciones de tamaño y negrita para establecer jerarquía.
  
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
  

}
