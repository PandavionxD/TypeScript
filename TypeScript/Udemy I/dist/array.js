//USO DE CORCHETES []
//TIPO EXPLICITO
var users;
users = ['Luisaviles', 'paparazi', 'lensqueen'];
// users = [1,true,'hola'];  Genera error porque definimos en el tipo explicito que es un arreglo tipo cadena
//TIPO INFERIDO
var otherusers = ['Luisaviles', 'paparazi', 'lensqueen'];
// users = [1,true,'hola']; //error
//ARRAY <TIPO>
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
//ACCEDIENDO A LOS VALORES EN UN ARRAY
// MEDIANTE UN INDICE
console.log('first User', users[0]);
//PROPIEDADES EN ARRAY
console.log('user.length', users.length);
//USO DE FUNCIONES EN ARREGLOS
//AGREGAR NUEVOS USUARIOS
users.push('PlatziUsers', 'AlexArtica', 'KevinCampos');
console.log(users);
//ORDENAR ARREGLO
users.sort();
