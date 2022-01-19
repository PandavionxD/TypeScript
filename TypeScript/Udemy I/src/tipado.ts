//Number    Boolean     String
//Tipo de manera explicita
//Tipo Number
let phone:number;
//asignando valor numerico
phone =1;
phone=987654321;
// phone ='hola';   ESTO VA MARCAR ERROR PORQUE NO ADMITE UNA CADENA
console.log(phone);

//Tipo Inferido
let phoneNumber = 987654321;
phoneNumber =999999999;
// phoneNumber = true;     ESTO MARCA ERROR PORQUE YA LE ASIGNO EL TIPO NUMBER

//HEXADECIMAL
let hex:number = 0xf00d;
//BINARIO
let binary:number = 0b1010;
//OCTAL
let octal:number = 0o744;

//TIPO BOOLEAN ->(TRUE Y FALSE)
//TIPADO EXPLICITO
let isPro:boolean;
isPro= true;
// isPro=123;       ESTO MARCA ERROR PORQUE YA SE LE ASIGNO UN TIPO BOOLEANO

//TIPADO INFERIDO
let isUserPro = false;
isUserPro =true;
// isUserPro = 10;     ESTO MARCA ERROR PORQUE YA ESTA INFERIDO QUE ES BOOLEAN

//TIPO DE DATO STRING
let userName:string = 'Luis Aviles';
userName = 'Alex Artica';
console.log(userName);

// TEMPLATE STRING
// USO DE BACK-TICK `
let userInfo:string;
userInfo = `
    Userinfo:
    UserName: ${userName}
    FirstName: ${userName + 'Aviles'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('UserInfo', userInfo);