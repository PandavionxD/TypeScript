//CLASES PRIVADAS
export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

// GET Y SET
//CLASE SUPER
//abstract me sirve para que no se creen objetos de la super clase
//REACT ONLY solo lectura
 abstract class Obj {
    protected  readonly _id:number;
    protected _title:string;
    constructor(id:number,title:string){
        this._id=id;
        this._title=title
    }
    get id (){
        return this._id;
    }
    // set id (id:number){
    //     this._id=id;
    // }
    get title (){
        return this._title;
    }
    set title  (title:string){
        this._title=title;
    }
}


class Picture extends Obj{
    //PROPIEDADES
    private _orientation:PhotoOrientation;

    get orientation (){
        return this._orientation;
    }
    set orientation (o:PhotoOrientation){
        this._orientation=o;
    }

    //COMPORTAMIENTO A TRAVEZ DE FUNCIONES
    public constructor(id:number,title:string,orientation:PhotoOrientation){
        super(id,title);
        this.orientation=orientation
    }
    //COMPORTAMIENTO DE CLASE
    public toString(){
        return `id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation} `;
    }
}
class Album extends Obj{
    private pictures:Picture[];
    public constructor(id:number,title:string,){
        super(id,title);
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
//NO ALTERA LOS VALORES SI DESCRIBES QUE ES PUBLICO ES POR DEFECTO PERO EN ESTE CASO SON PRIVADOS SE UTILIZA LOS METODOS GET Y SET

// picture.id = 100;   //Privados   //no se va poder ejecutar ya que este valor solo es de lectura
picture.title = 'Another Title';    //Privados
album.title = 'Personal Activities';    //Privados
//IMPRIMIMOS LOS VALORES
console.log('album',album);