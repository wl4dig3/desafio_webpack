class Poligono {
  constructor() {
    this.base = +(document.getElementById('base').value) || null
    this.lado = +(document.getElementById('lado').value) || null
    this.altura = +(document.getElementById('altura').value) || null
    this.apotema = +(document.getElementById('apotema').value) || null
    this.radio = +(document.getElementById('radio').value) || null
  }
}

export default Poligono
