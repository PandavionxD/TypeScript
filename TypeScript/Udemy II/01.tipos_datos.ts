
// Tipos de datos string
let nombre :string ='Alex'
nombre = 'Juan'
console.log(nombre + ' Carlos')


// Tipos de datos booleanos True o False
let verdadero:boolean = true
verdadero = false

// Tipos de datos number
let num1:number = 12
num1 =23

//Tipos arrays
let numeros:number[]= [1,2,3,4,5]
let apellidos:string[]= ['Alex','Juan','Carlos']
//Se puede especificar de que tipo de otra forma
let coleccionNumeros:Array<number> = [4,5,6]

//Tipos Tupla
//Se puede poner diferentes valores
let tupla:[number,string,boolean]
tupla = [12,'hola',true]

//recorrer tupla o listas por indexacion
console.log(tupla[2])
