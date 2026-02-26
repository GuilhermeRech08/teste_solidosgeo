class Cilindro{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }

    calcularAreaBase(){
        return Math.PI * this.raio * this.raio
    }

    calcularAreaLateral(){
        return 2 * Math.PI * this.raio * this.altura
    }

    calcularAreaTotal(){
        return 2 * this.calcularAreaBase() + this.calcularAreaLateral()
    }

    calcularVolume(){
        return this.calcularAreaBase() * this.altura
    }
}

module.exports = Cilindro