//TUPAS EN TYPESCRIPT
//[1,'user]
let usuario: [number,string];
usuario =[1,'luixaviles'];
console.log('user',usuario);
console.log('username',usuario[1]);
console.log('username',usuario[1].length);
console.log('id',usuario[0]);

//TUPLAS CON VARIOS VALORES
//ID,USERNAME,ISPRO
let userinfo:[number,string,boolean];
userinfo =[2,'paparazzi',true];
console.log('userinfo',userinfo);


//ARREGLO DE TUPLAS
let array:[number,string][]=[];
array.push([1,'luixaviles']);
array.push([2,'juanperez']);
array.push([3,'oscaraviles']);
console.log('array',array);

//USO DE FUNCIONES EN ARRAY
//OSCARAVILES -> OSCARAVILES001
array[2][1]=array[2][1].concat('001');
console.log('array',array);

