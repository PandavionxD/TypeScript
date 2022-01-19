//NULL  UNDEFINED
//EXPLICITA
var nullVariable;
nullVariable = null;
// nullVariable =1 ; //a un valor null no le puedes asignar otro valor que no sea null
var otherVariable = null;
otherVariable = 12;
otherVariable = 'Hola'; //aqui no genera error porque lo toma como un valor any
//UNDEFINED
var undefinedVariable;
undefinedVariable = undefined; //a un valor undefined no se puede poner otro valor que no sea undefined
var otherUndefined = undefined;
otherUndefined = 1; //aqui no genera error porque lo toma como un valor any
//NULL Y UNDEFINED COMO SUBTIPOS
// --strickNullChecks
var albumName;
albumName = null;
albumName = undefined;
