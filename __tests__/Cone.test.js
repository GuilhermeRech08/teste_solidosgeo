const Cone = require('../models/Cone')

describe("Testes da versão 1.0.0 - Sólidos Geométricos", ()=>{
    test('Teste unitário da área da base', ()=>{
        //  Ab = pi * r²
        const cone = new Cone(2,2)
        const resultado = 12.566
        expect(cone.calcularAreaBase()).toBeCloseTo(resultado, 3)
    })
    test('Teste unitário da geratriz', ()=>{
        //  Ab = pi * r²
        const cone = new Cone(2,2)
        const resultado = 2.828
        expect(cone.calcularGeratriz()).toBeCloseTo(resultado, 3)
    })
    test('Teste unitário da área lateral', ()=>{
        //  Al = pi * r * g
        const cone = new Cone(2,2)
        const resultado = 17.772
        expect(cone.calcularAreaLateral()).toBeCloseTo(resultado, 3)
    })
    test('Teste unitário da área total', ()=>{
        //  Ab = pi * r²
        const cone = new Cone(2,2)
        const resultado = 30.338
        expect(cone.calcularAreaLateral()).toBeCloseTo(resultado, 3)
    })
    test('Teste unitário do volume', ()=>{
        //  Ab = pi * r²
        const cone = new Cone(2,2)
        const resultado = 8.378
        expect(cone.calcularVolume()).toBeCloseTo(resultado, 3)
    })
    
})