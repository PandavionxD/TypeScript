// CREANDO OBJETOS EN TYPESCRIPT
var persona01;
persona01 = {
    id: 1,
    username: 'Alex',
    firstname: 'Artica',
    edad: 24
};
console.log(persona01);
//  console.log(persona01.id) -> Esto genera error
var persona02 = {
    id: 2,
    username: 'Daniel',
    firstname: 'Rivera',
    edad: 23
};
var rpta = persona02 instanceof Object;
var rpta1 = persona01 instanceof Object;
console.log(persona02.username);
console.log('Persona01 es un object', rpta1);
console.log('Persona02 es un object', rpta);
// Hay que tener cuidado cuando declaras un object en typescript
