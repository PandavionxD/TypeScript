//FUNCION PARA MOSTRAR UNA FOTOGRAFIA
export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture{
    title:string,
    date:string,
    orientation:PhotoOrientation
};

function showPicture(picture:Picture){
    console.log(`[Title: ${picture.title}, 
                Date: ${picture.date},
                Orientaation: ${picture.orientation}]`);
}
let myPic={
    title : 'Test Title',
    date : '2020-03-16',
    orientation : PhotoOrientation.Landscape
};
let myPic1={
    title:'Test Title',
    date: '202003',
    orientation : PhotoOrientation.Portrait
};
showPicture(myPic);
showPicture(myPic1);

interface PictureConfig{
    title?:string,
    date?:string,
    orientation?:PhotoOrientation
}
function generatePicture(config:PictureConfig){
    const pic ={title:'default',date:'2020'}
    if (config.title){
        pic.title=config.title
    }
    if(config.date){
        pic.date = config.date
    }
    return pic
}
let picture = generatePicture({});
console.log('Picture:',picture); //rercibe los valores por decto establecidos
picture = generatePicture({title:'Travel picture'});
console.log('Picture:',picture);
picture = generatePicture({title:'Travel picture',date:'2020-03-16'});
console.log('Picture:',picture);

//INTERFAZ USUARIO
interface User{
    readonly id: number, //Se convierte en solo lectura no se va poder modificar
    username:string,
    isPro:boolean
}
let user:User;
user = {
    id:10,
    username:'luixaviles',
    isPro:true
};
console.log('user',user);
user.username = 'paparazzi';
console.log('user',user);
// user.id=12; -> GENERAR ERROR PORQUE ES SOLO LECTURA


