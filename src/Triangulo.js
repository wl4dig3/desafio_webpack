import Poligono from './Poligono'

class Triangulo extends Poligono{
  constructor(){
    super()
  }
  area(){
    return (this.base * this.altura) / 2
  }
  perimetro(){
    return (this.lado * 3)
  }
}


export default Triangulo 
