const Cone = require('./models/Cone')

const cone = new Cone(2,2)

const geratriz = cone.geratriz
console.log(`geratriz = ${geratriz}`)
const areaBase = cone.calcularAreaBase()
const areaLateral = cone.calcularAreaLateral()
console.log(`area da base = ${areaBase.toFixed(3)}`)
console.log(`area lateral = ${areaLateral.toFixed(3)}`)

const geratriz2 = cone.geratriz
console.log(`geratriz = ${geratriz}`)