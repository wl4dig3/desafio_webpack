import Poligono from './Poligono'

class Cuadrado extends Poligono{
  constructor(){
    super()
  }
  area(){
    return (this.lado * this.lado)
  }
  perimetro(){
    return (this.lado * 4) 
  }
}

export default Cuadrado
