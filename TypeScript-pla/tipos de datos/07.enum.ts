export {}
// hablaremos de ENUM en Typescript

enum Person {
    iduser,
    name,
    apellido,
    edad,
    isPro
}
const pers01:Person = Person.name
console.log(pers01)

enum Pais {
    colombia='COL',
    peru='PER',
    brasil='BRA'
}
const per02:Pais = Pais.peru
console.log(per02)