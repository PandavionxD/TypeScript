// ANY      VOID    NEVER
//ANY SOPORTA CUALQUER TIPO DE VALOR
//EXPLICITO
var idUser;
idUser = 1; //number
idUser = '1'; //string
console.log('idUser', idUser);
//TIPO INFERIDO
var otherId;
otherId = 2;
otherId = '2';
console.log('otherId', otherId);
var surprise = 'Hello Typescript';
var res = surprise.substrings(6);
console.log('res', res);
//VOID
//TIPO EXPLICITO
function showInfo(user) {
    console.log('UserInfo', user.id, user.username, user.firstname);
}
showInfo({ id: 1, userName: "Alex Daniel", firstnamme: 'Artica Rivera' });
//TIPO INFERIDO
function showFormattedINfo(user) {
    console.log('User Info', "\n    id:" + user.id + "\n    username: " + user.username + "\n    firstname: " + user.firstname + "\n    ");
}
;
showFormattedINfo({ id: 1, userName: "Alex Daniel", firstnamme: 'Artica Rivera' });
//TIPO VOID, COMO TIPO DE DATO EN VARIABLE
var unusable;
unusable = null;
unusable = undefined;
//NEVER
