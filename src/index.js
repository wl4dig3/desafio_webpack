// Declaracion de los import 
import circulo from './Circulo.js'
import poligonos from './Poligono.js'
import decagono from './Decagono.js'
import octagono from './Octagono.js'
import triangulo from './Triangulo.js'
import cuadrado from './cuadrado.js'

// Funcion detectora de eventos y sus condicionales
document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  console.log(poligonos.getValues())
  let poligono = e.target.value
  let paragraph = document.getElementById("texto");
  let paragraph2 = document.getElementById("texto2");
  if (poligono === 'circulo') {
    paragraph.textContent  = (`El Perímetro del Círculo es: ${circulo.perimetro()}`)
    paragraph2.textContent = (`El Área del Círculo es:  ${circulo.area()}`)
  }
  if (poligono === 'cuadrado') {

    paragraph.textContent = (`El Perímetro del Cuadrado es:  ${cuadrado.perimetro()}`)
    paragraph2.textContent= (`El Área del Cuadrado es: ${cuadrado.area()}`)
  }
  if (poligono === 'triangulo') {

    paragraph.textContent = (`El Perímetro del Triangulo es: ${triangulo.perimetro()}`)
    paragraph2.textContent = (`El Área del Triángulo es:  ${triangulo.area()}`)
  }
  if (poligono === 'octagono') {

    paragraph.textContent = (`El Perímetro del Octagono es:${octagono.perimetro()}`)
    paragraph2.textContent = (`El Área del Octágono es: ${octagono.area()}`)
  }
  if (poligono === 'decagono') {

    paragraph.textContent = (`El Perímetro del Decagono es: ${decagono.perimetro()}`)
    paragraph2.textContent = (`El Área del Decágonoes: ${decagono.area()}`)
  }
})

