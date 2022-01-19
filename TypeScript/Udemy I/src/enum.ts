//ORIENTACION PARA FOTOGRAFIAS
// const landscape =0;
// const portrait=1;
// const square =2;
// const panorama=3;

enum PhotoOrientation{
    Landscape, //1
    Portrait,   //2
    Square,     //3
    Panorama,   //4
}
const landscape:PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape',landscape);
console.log('landscape',PhotoOrientation[0]);

enum PictureOrientation{
    Landscape=10, //10
    Portrait,       //11
    Square,         //12
    Panorama,       //13
};
console.log('Portrait',PictureOrientation.Portrait);

enum Country{
    Bolivia = 'BOL',
    Colombia = 'COL',
    Mexico = 'ME',
    Estados_Unidos = 'USA',
    Peru = 'PE'
}
const country:Country =Country.Peru;
console.log('country',country);
