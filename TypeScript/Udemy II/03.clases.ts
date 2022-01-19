// Clases es un a plantilla de un objeto
// Metodos y Propiedades de un objeto 
// una clase puede ser un carro
// donde sus propiedades pueden ser color, numero de ruedas, marca, etc. 
// sus metodos pueden ser arrancar acelerar frenar ,etc.

//Primera clase
class Vehiculo {
    marca:string
    fecha:string
    puertas:number
    //Para poder instanciar una clase se necesita su metodo constructor
    constructor(_marca:string,_fecha:string,_puertas:number){
        this.marca= _marca
        this.fecha = _fecha
        this.puertas = _puertas
    }
    acelerar():void{
        console.log('Ojo, estoy acelerando.')
    }
    frenar():void{
        console.log('Ojo, estoy frenando.')
    }
}
//Instanciamos la clase
const coche =  new Vehiculo('Ford','12/03/2021',1)
//como accedemos a las propiedades de la clase
coche.marca
coche.fecha
coche.puertas
//cuando son metodos se tiene que poner parentesis para ejecutarlo porque es una funcion
coche.acelerar()


//Creando ota clase para ver temas de herencia
class Padre {
    nombre:string
    edad:number
    constructor(_nombre:string,_edad:number){
        this.nombre = _nombre
        this.edad = _edad
    }
    mostrarNombre():void{
        console.log(this.nombre)
    }
}
class Hijo extends Padre{
    apellido:string
    constructor(_nombre:string,_edad:number,_apellido:string){
        super(_nombre,_edad)
        this.apellido=_apellido
    }
    mostrarNombreHijo():void{
        console.log(this.nombre)
    }
}

const nuevoHijo = new Hijo('Alex',12,'Gamarra')
console.log(nuevoHijo.mostrarNombre())
console.log(nuevoHijo.mostrarNombreHijo())


//Modificadores Publicos
class Animal{
    public nombre:string
    public tamano:number
    public constructor(_nombre:string,_tamaño:number){
        this.nombre = _nombre
        this.tamano = _tamaño
    }
    public moverse():void{
        console.log('me estoy moviendo')
    }
}
const obj = new Animal('Serpiente',2)
obj.nombre

//Modificadores Privados
class Animal1{
    private nombre:string
    private tamano:number
    public constructor(_nombre:string,_tamaño:number){
        this.nombre = _nombre
        this.tamano = _tamaño
    }
    public moverse():void{
        console.log('me estoy moviendo')
    }
}
const obj1 = new Animal1('Serpiente',2)
obj1.moverse() //Solo se puede acceder a este metodo ya que es publico no se puede acceder a sus propiedades

//Modificadores Protegidos
class Padre1{
    protected nombre:string
    constructor(_nombre:string){
        this.nombre = _nombre
    }
}
class Hijo1 extends Padre1{
    public apellido:string
    constructor(_nombre:string,_apellido:string){
        super(_nombre)
        this.apellido = _apellido
    }
    mostrarNombre():void{
        console.log(this.nombre)
    }
}

const ob3 = new Hijo1('daniel','perez')
//si un objeto es privado la que hereda no puede utilizarlo pero con protect si puede acceder pero no es posible llamarlo desde 


//set y get
class Persona{
    private nombre:string
    constructor(_nombre:string){
        this.nombre=_nombre
    }
    
    public get getnombre() : string {
        return this.nombre
    }
    
    public set setnombre(nombre : string) {
        this.nombre = nombre;
    }
}
const ob4 = new Persona('Alex')
console.log(ob4.getnombre)
ob4.setnombre = 'Daniel'
console.log(ob4.getnombre)