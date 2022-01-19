//UNION
//10 = '10'
let idUsuario:number | string;
idUsuario=10;
idUsuario ='10';

//BUSCAR USERNAME DADO UN ID
function getUsernameById(id:number|string){
    //lOGICA DEL NEGOCIO Y BUSCAR EL ID DEL USUARIO
    return 'luixaviles';
}
getUsernameById(20);
getUsernameById('20');

//ALIAS
type IdUser = number | string;
let idUsuario1:IdUser;
idUsuario1=10;
idUsuario1 ='10';

//BUSCAR USERNAME DADO UN ID
function getUsernameById1(id:IdUser){
    //lOGICA DEL NEGOCIO Y BUSCAR EL ID DEL USUARIO
    return 'luixaviles';
}
getUsernameById(20);
getUsernameById('20');


//TIPOS LITERALES
//100X100, 500X500, 1000X1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture:SquareSize =  '200x200';   //error
let smallPicture:SquareSize ='100x100' ;
let mediumPicture:SquareSize = '500x500';
