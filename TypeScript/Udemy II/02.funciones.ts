
//Una funcion es una porcion de codigo que se pueden utilizar n veces a medida que tu la mandes a llamar
//asi se declara una funcion antiguamente, ahora se  utiliza las funciones flechas
function sumar(a:number,b:number):number{
    return a+b
}
const suma:number = sumar(2,2)
console.log(suma)


//Funciones flecha -> es la forma de utilizar una funcion pero de manera mas moderna
function mostrar():void{
    console.log('Funcion 01')
}

//Si es una funcion flecha de una sola linea podemos obviar los corchetes
const mostrar2 = ():void=>{console.log('Funcion 02')}
//llamamos a la funcion
mostrar()
mostrar2()

//Parametros opcionales dentro de las funciones
const nombresCompletos = (nombre:string,apellido:string,edad?:number)=>{
    
    if(edad){
        console.log(`Hola, ${nombre} ${apellido}, tu edad es -> ${edad}`)
    }else{
        console.log(`Hola, ${nombre} ${apellido}`)
    }
}  //aqui el parametro de edad es opcional si no lo defino es indefinido

nombresCompletos('Alex','Daniel')
nombresCompletos('Alex','Daniel',42)

//Parametros por defecto en typescript

const nombres1 = (nombres:string,apellido:string,edad:number=22)=>{
    console.log((`Hola, ${nombres} ${apellido}, tu edad es -> ${edad}`))
}
nombres1('alex','artica')           //En este caso imprimira el valor por defecto
nombres1('alex','artica',12)        //en este caso imrpimira el valor asignado


//Parametros REST
const cartaPostres =(postre:string,...frutas:string[])=>{
    console.log(`el postre se llama ${postre} y tiene ${frutas}`)
}
cartaPostres('postre1','naranja','platano','fresa')
