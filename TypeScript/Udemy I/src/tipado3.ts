//NULL  UNDEFINED
//EXPLICITA
let nullVariable:null;
nullVariable = null;
// nullVariable =1 ; //a un valor null no le puedes asignar otro valor que no sea null

let otherVariable = null;
otherVariable = 12;
otherVariable = 'Hola'; //aqui no genera error porque lo toma como un valor any


//UNDEFINED
let undefinedVariable:undefined;
undefinedVariable =undefined;   //a un valor undefined no se puede poner otro valor que no sea undefined

let otherUndefined = undefined;
otherUndefined =1;  //aqui no genera error porque lo toma como un valor any

//NULL Y UNDEFINED COMO SUBTIPOS
// --strickNullChecks
let albumName:string;
albumName = null;
albumName = undefined;
