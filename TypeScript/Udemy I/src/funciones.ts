//FUNCIONES EN TYPESCRIPT
//CREAR UNA FOTOGRAFIA
//USAMOS JAVASCRIPT
// function createPicture (title,date,size){
//     //title
// }

type SquareSize1 = '100x100'|'500x500'|'1000x1000';
//USAMOS TYPESCRIPT, definimos tipos para parametros
function createPicture1(title:string,date:string,size:SquareSize1){
    //Se crea la fotografia
    console.log('create picture using', title,date,size);
}

createPicture1('My brithdat','2020-03-10','1000x1000');

//PARAMETROS OPCIONALES EN FUNCIONES
function createPicture(title?:string,date?:string,size?:SquareSize1){
    //Se crea la fotografia
    console.log('create picture using', title,date,size);
}
createPicture('My brithdat','2020-03-10','1000x1000');
createPicture('My brithdat','2020-03-10');
createPicture('My brithdat');
createPicture();

//FLAT ARRAY FUNCTION
let creatPic =(title:string,date:string,size:SquareSize1):object =>{
    // return {
    //     title:title,
    //     date:date,
    //     size:size
    // };
    return {
        title,
        date,
        size
    }
};

const picture = creatPic('Platzi session','2020-03-10','100x100');
console.log('picture',picture);