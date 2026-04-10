# Pensamiento-Computacional-Secci-n-3

## Información de la obra

- **Nombre de la obra:** Bauhaus-Ausstellung  
- **Autor:** Joost Schmidt  
- **Año:** 1923 
- **Imagen original:** 


![Afiche Bauhaus](https://i.pinimg.com/736x/7e/8f/6c/7e8f6c1a9c3d6bd9299a7bd0aae9375c.jpg)
![mi imagen](Imagenminion/minion.jpg)


## Proceso de trabajo

- ### Cómo elegí la obra
Elegí este afiche porque presenta una composición basada en geometría simple, repetición y uso de color, lo que lo hacía adecuado para ser traducido a código en p5.js. 
Además, me interesó su relación con el movimiento Bauhaus, donde el diseño se construye a partir de reglas claras y sistemas modulares.



- ### Cómo analicé la obra (formas, colores, proporciones)

Primero observé la imagen e identifiqué que estaba compuesta por una grilla de módulos repetidos. Cada módulo contiene un rectangulo negro con una diagonal y un cuadrado de color encima.

En cuanto a las formas, noté que no eran figuras complejas, sino combinaciones de cuadrados y triángulos. Esto me permitió simplificar la imagen a elementos básicos.

Respecto al color, identifiqué el uso de colores primarios (rojo, azul y amarillo), junto con negro y un fondo neutro. También observé que los cuadrados de color mantienen un tamaño constante, lo que ayudó a definir proporciones dentro del código.



- ### Cómo traduje la imagen a coordenadas (X, Y)

Utilicé coordenadas para posicionar cada elemento, apoyándome en ciclos **for** para repetir los módulos de manera ordenada. Esto me permitió mantener proporciones consistentes y ajustar fácilmente el espaciado entre ellos.

Para los cuadrados de color, utilicé coordenadas específicas para ubicarlos en las posiciones correctas dentro de la composición, respetando la estructura del afiche original.



- ### Qué dificultades tuve

Una de las principales dificultades fue lograr que los rectangulos coincidieran con los del afiche. En un inicio intenté construir figuras más complejas, o formas irregulares, pero esto hacía que el resultado no fuera preciso.

También tuve problemas con la alineación de las diagonales, ya que pequeños errores en las coordenadas hacían que el patrón no se viera continuo. Además, ajustar proporciones entre los módulos y los cuadrados de color requirió varios intentos.



- ### Cómo resolví esos problemas (reflexión)

Para resolver estas dificultades, simplifiqué la construcción de la forma negra, utilizando un cuadrado base. Esta decisión fue clave, ya que permitió mayor control sobre la forma y mejoró la precisión visual.

También utilicé funciones para organizar el código, lo que facilitó repetir los módulos y hacer ajustes sin tener que modificar cada elemento manualmente.

A través de prueba y error, fui ajustando las coordenadas y proporciones hasta lograr una composición más cercana al original. Este proceso me permitió entender que en programación visual es más efectivo simplificar las formas y trabajar con sistemas repetitivos, en lugar de intentar replicar directamente formas complejas.

En general, el proceso me ayudó a comprender cómo una imagen puede traducirse a código mediante el uso de geometría básica, coordenadas y repetición, la importancia de la precisión y la organización en el desarrollo del código.

