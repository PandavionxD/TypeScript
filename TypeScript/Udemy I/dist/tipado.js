//Number    Boolean     String
//Tipo de manera explicita
//Tipo Number
var phone;
//asignando valor numerico
phone = 1;
phone = 987654321;
// phone ='hola';   ESTO VA MARCAR ERROR PORQUE NO ADMITE UNA CADENA
console.log(phone);
//Tipo Inferido
var phoneNumber = 987654321;
phoneNumber = 999999999;
// phoneNumber = true;     ESTO MARCA ERROR PORQUE YA LE ASIGNO EL TIPO NUMBER
//HEXADECIMAL
var hex = 0xf00d;
//BINARIO
var binary = 10;
//OCTAL
var octal = 484;
//TIPO BOOLEAN ->(TRUE Y FALSE)
//TIPADO EXPLICITO
var isPro;
isPro = true;
// isPro=123;       ESTO MARCA ERROR PORQUE YA SE LE ASIGNO UN TIPO BOOLEANO
//TIPADO INFERIDO
var isUserPro = false;
isUserPro = true;
// isUserPro = 10;     ESTO MARCA ERROR PORQUE YA ESTA INFERIDO QUE ES BOOLEAN
//TIPO DE DATO STRING
var userName = 'Luis Aviles';
userName = 'Alex Artica';
console.log(userName);
// TEMPLATE STRING
// USO DE BACK-TICK `
var userInfo;
userInfo = "\n    Userinfo:\n    UserName: " + userName + "\n    FirstName: " + (userName + 'Aviles') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('UserInfo', userInfo);
