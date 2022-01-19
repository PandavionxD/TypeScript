//USO DE CORCHETES []
//TIPO EXPLICITO
let users:string[];
users = ['Luisaviles','paparazi','lensqueen'];
// users = [1,true,'hola'];  Genera error porque definimos en el tipo explicito que es un arreglo tipo cadena

//TIPO INFERIDO
let otherusers=['Luisaviles','paparazi','lensqueen'];
// users = [1,true,'hola']; //error

//ARRAY <TIPO>
let pictureTitles:Array<string>;
pictureTitles =['Favorite Sunset', 'Vacation Time', 'Landscape'];

//ACCEDIENDO A LOS VALORES EN UN ARRAY
// MEDIANTE UN INDICE
console.log('first User',users[0]);

//PROPIEDADES EN ARRAY
console.log('user.length',users.length);

//USO DE FUNCIONES EN ARREGLOS
//AGREGAR NUEVOS USUARIOS
users.push('PlatziUsers','AlexArtica','KevinCampos');
console.log(users);
//ORDENAR ARREGLO
users.sort();

