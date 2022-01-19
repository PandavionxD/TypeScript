interface Persona{
    //Atributos
    nombre:string
}

const caminar = (persona:Persona):void =>{
    console.log(`la persona ${persona.nombre} esta caminando`)
}
let nueva_persona ={nombre:'Manuel'}
console.log(nueva_persona)
