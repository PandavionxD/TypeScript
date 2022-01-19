//CLASES PRIVADAS
export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

// GET Y SET

class Picture{
    //PROPIEDADES
    private _id:number;
    private _title:string;
    private _orientation:PhotoOrientation;

    get id (){
        return this._id;
    }
    set id (id:number){
        this._id=id;
    }
    get title (){
        return this._title;
    }
    set title  (title:string){
        this._title=title;
    }
    get orientation (){
        return this._orientation;
    }
    set orientation (o:PhotoOrientation){
        this._orientation=o;
    }

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
    private _id:number;
    private _title:string;
    private pictures:Picture[];
    public constructor(id:number,title:string,){
        this.id=id;
        this.title=title;
        this.pictures = [];
    }
    get id(){
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }
    get title(){
        return this,this._title;
    }
    set title(t:string){
        this._title=t;
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
//NO ALTERA LOS VALORES SI DESCRIBES QUE ES PUBLICO ES POR DEFECTO PERO EN ESTE CASO SON PRIVADOS SE UTILIZA LOS METODOS GET Y SET

picture.id = 100;   //Privados
picture.title = 'Another Title';    //Privados
album.title = 'Personal Activities';    //Privados
//IMPRIMIMOS LOS VALORES
console.log('album',album);