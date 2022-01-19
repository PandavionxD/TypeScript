//CLASES PRIVADAS
export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}
class Picture{
    //PROPIEDADES
    private id:number;
    private title:string;
    private orientation:PhotoOrientation;

    //COMPORTAMIENTO A TRAVEZ DE FUNCIONES
    public constructor(id:number,title:string,orientation:PhotoOrientation){
        this.id = id;
        this.title=title;
        this.orientation=orientation
    }
    //COMPORTAMIENTO DE CLASE
    public toString(){
        return `id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation} `;
    }
}
class Album{
    private id:number;
    private title:string;
    private pictures:Picture[];
    public constructor(id:number,title:string,){
        this.id=id;
        this.title=title;
        this.pictures = [];
    }
    public addPicture(picture:Picture){
        this.pictures.push(picture)
    }
}

const album:Album =  new Album (1,'Personal Pictures'); 
const picture:Picture = new Picture(1,'The Family',PhotoOrientation.Portrait);
album.addPicture(picture);
console.log('album',album);

//ACEDIENDO A LOS MIENBROS PUBLICOS
//NO ALTERA LOS VALORES SI DESCRIBES QUE ES PUBLICO ES POR DEFECTO

// picture.id = 100;   //Public
// picture.title = 'Another Title';    //Public
// album.title = 'Personal Activities';    //Public
//IMPRIMIMOS LOS VALORES
console.log('album',album);
