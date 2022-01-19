// ANY      VOID    NEVER
//ANY SOPORTA CUALQUER TIPO DE VALOR
//EXPLICITO
let idUser:any;
idUser =1;  //number
idUser = '1'; //string
console.log('idUser',idUser);

//TIPO INFERIDO
let otherId;
otherId = 2;
otherId = '2';
console.log('otherId',otherId);

let surprise:any ='Hello Typescript';
const res = surprise.substrings(6);
 console.log('res',res);

//VOID
//TIPO EXPLICITO
function showInfo(user:any):any{
    console.log('UserInfo', user.id,user.username,user.firstname );
}
showInfo({id:1,userName:"Alex Daniel",firstnamme:'Artica Rivera'});

//TIPO INFERIDO
function showFormattedINfo(user:any){
    console.log('User Info', `
    id:${user.id}
    username: ${user.username}
    firstname: ${user.firstname}
    `);
};
showFormattedINfo({id:1,userName:"Alex Daniel",firstnamme:'Artica Rivera'});

//TIPO VOID, COMO TIPO DE DATO EN VARIABLE
let unusable:void;
unusable = null;
unusable = undefined;

//NEVER



