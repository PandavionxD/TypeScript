//HERENCIA
export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}
interface Entity{
    id:number,
    title:string    
}
interface Album extends Entity{
    //Copia los atributos de Entity 
    description: string
};
interface Picture extends Entity{
    //Copia los atributos de Entity
    orientation:PhotoOrientation
};
const album:Album={
    id:12,
    title:'Lost Canvas',
    description:'Esto es una album de lost Canvas una genial serie'
};
const picture:Picture={
    id:1,
    title:'family',
    orientation:PhotoOrientation.Panorama
};
let newPicture = {} as Picture;
newPicture.id = 23;
newPicture.title = 'Canvas';
console.log('picture',picture);
console.log('NewPicture',newPicture);