import Poligono from './poligono'

class Octagono extends Poligono {
  constructor() {
    super()
  }
    
    area(){
      return (this.base * this.apotema) / 2
    }
    perimetro(){
      return this.lado * 8
    }
}

export default Octagono 
