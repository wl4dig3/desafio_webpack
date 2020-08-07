import Circulo from './Circulo.js'
import Octagono from './Octagono'
import Triangulo from './Triangulo'
import Cuadrado from './Cuadrado'
import Decagono from './Decagono'

document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let poligono = e.target.value
  if (poligono === 'circulo') {
    let circulo = new Circulo()
    console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
    console.log(`Area del Circulo ===> ${circulo.area()}`)
  }
  if (poligono === 'octagono') {
  let octagono = new Octagono()
  console.log(`Perimitero del Octagono ===>${octagono.perimetro()}`);
  console.log(`Area del Octagono ===> ${octagono.area()}`);
 }
 if (poligono === 'triangulo') {
  let triangulo = new Triangulo()
  console.log(`Perimetro del triangulo ===>${triangulo.perimetro()}`);
  console.log(`Area del triangulo ===>${triangulo.area()}`);
 }
 if (poligono === 'cuadrado') {
   let cuadrado = new Cuadrado()
   console.log(`Perimetro del cuadrado ===>${cuadrado.perimetro()}`);
   console.log(`Area del cuadrado ===>${cuadrado.area()}`);
 }
 if (poligono === 'decagono') {
   let decagono = new Decagono()
   console.log(`Perimetro del Decagono===>${decagono.perimetro()}`);
   console.log(`Area del Decagono===>${decagono.area()}`);
 }
})
