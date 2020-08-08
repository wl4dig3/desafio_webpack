import circulo from './Circulo.js'
import poligonos from './Poligono.js'
import decagono from './Decagono.js'
import octagono from './Octagono.js'
import triangulo from './Triangulo.js'
import cuadrado from './cuadrado.js'




document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  console.log(poligonos.getValues())
  let poligono = e.target.value
  if (poligono === 'circulo') {
    console.log(`Perímetro del Círculo ===> ${circulo.perimetro()}`)
    console.log(`Área del Círculo ===> ${circulo.area()}`)
  }
  if (poligono === 'cuadrado') {

    console.log(`Perímetro del Cuadrado ===> ${cuadrado.perimetro()}`)
    console.log(`Área del Cuadrado ===> ${cuadrado.area()}`)
  }
  if (poligono === 'triangulo') {

    console.log(`Perímetro del Triángulo ===> ${triangulo.perimetro()}`)
    console.log(`Área del Triángulo ===> ${triangulo.area()}`)
  }
  if (poligono === 'octagono') {

    console.log(`Perímetro del Octágono ===> ${octagono.perimetro()}`)
    console.log(`Área del Octágono ===> ${octagono.area()}`)
  }
  if (poligono === 'decagono') {

    console.log(`Perímetro del Decágono ===> ${decagono.perimetro()}`)
    console.log(`Área del Decágono ===> ${decagono.area()}`)
  }
})