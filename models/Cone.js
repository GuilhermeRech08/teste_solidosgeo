class Cone{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
        this.geratriz = 0
    }

    calcularAreaBase(){
        return Math.PI * this.raio * this.raio
    }

    calcularGeratriz(){
        return this.geratriz = Math.sqrt((this.altura * this.altura) + (this.raio * this.raio))
    }

    calcularAreaLateral(){
        return Math.PI * this.raio * this.calcularGeratriz()
    }

    calcularAreaTotal(){
        return Math.PI * this.raio * (this.calcularAreaBase() + this.raio)
    }

    calcularVolume(){
        return (1/3) * this.calcularAreaBase() * this.altura
    }
}

module.exports = Cone