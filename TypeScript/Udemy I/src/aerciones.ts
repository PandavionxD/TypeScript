// <tipo>  ANGLE BRACKET SYNTAX
export {};
let username:any;
username = 'luixaviles';
username ='luis';

//tenemos una cadena, TS confia en mi!.
let message:string  = (<string>username).length>5?
    `Welcome ${username}`: 'Username is too short';
console.log('message',message);

let usernameWithId:any = 'LuixAviles01';
//COMO OBTENER EL USERNAME
let message1:string = (<string>usernameWithId).substring(0,10);
console.log(message1);

//SINTAXIS AS
message = (username as string).length>5?
    `Welcome ${username}`: 'Username is too short';
console.log('message',message);

let helloUser:any;
helloUser = 'hello user desde typescript!!'
username = (helloUser as string).substring(6);
console.log('username',username);

