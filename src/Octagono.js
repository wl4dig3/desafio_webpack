import Poligono from './Poligono'

const octagono = {

  area() {
    let lado = Poligono.valores()[1]
    let apotema = Poligono.valores()[3]
    return (lado * 10) * apotema / 2
  },
  perimetro() {
    console.log(this)
    let lado = Poligono.valores()[1]
    return lado * 10
  }
}
export default octagono
