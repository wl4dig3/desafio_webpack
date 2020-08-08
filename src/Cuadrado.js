import Poligono from './Poligono'

const cuadrado = {

  area() {
    let lado = Poligono.valores()[1]

    return (lado * lado)  / 2
  },
  perimetro() {
    console.log(this)
    let lado = Poligono.valores()[1]
    return lado * 4
  }
}
export default cuadrado
