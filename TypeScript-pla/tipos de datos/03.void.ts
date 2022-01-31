// EL PARAMETRO VOID SE UTILIZA PARA FUNCIONES QUE NO RETORNAN NINGUN VALOR

// Donde si se le asigna los valores de undefined y null se pueden reemplazar
// porque son subtipos de any
let one =undefined
one = 'hola'
console.log(one)

let two = null
two = 123
console.log(two)

// Pero si se declara como un valor undefined y null ya no se van a poder cambiar mucho ojo con eso

let three:undefined
three  = undefined
// three = 'hello' -> Esto genera un error porque es undefined lo mismo para null

