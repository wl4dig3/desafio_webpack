import Poligono from './Poligono'

const decagono = {

  area() {
    let base = Poligono.valores()[0]
    let apotema = Poligono.valores()[3]
    return (base * apotema)  / 2
  },
  perimetro() {
    console.log(this)
    let lado = Poligono.valores()[1]
    return lado * 8
  }
}
export default decagono


