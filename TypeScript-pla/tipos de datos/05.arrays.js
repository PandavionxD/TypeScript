// Declarando Arrays en typescript
// DECLARANDO UN ARRAY ESPECIFICO
var numeros;
numeros = [1, 2, 3, 4, 5];
console.log('Tipo de datos de numeros', typeof numeros);
// Declarando de forma estricta en otro tipo de forma
var numeros02;
// numeros02 = ['hello','Juan'] -> Esto genera un error porque ya declare que es un array de numeros
numeros02 = [11, 13, 14, 12, 11, 20, 32, 6, 7, 8, 9, 12];
console.log('Array numero dos', numeros02);
numeros02.push(34, 12, 23);
numeros02.sort(function (a, b) {
    return a - b;
});
console.log(numeros02);
// tambien puedes declrara un array inferido
var num03 = [1, 2, 3, 4, 5];
console.log(typeof num03);
console.log(num03[1]);
