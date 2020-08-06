import Poligono from './Poligono'

class Decagono extends Poligono {
  constructor(){
    super()
  }
  area(){
    return ( this.lado * this.apotema * 10) / 2
  }
  perimetro(){
    return 10 * this.lado
  }
}

export default Decagono


