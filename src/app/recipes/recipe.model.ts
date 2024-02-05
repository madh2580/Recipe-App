export class Recipe {
    public name!:string;
    public descripation!: string;
    public imagepath!:string;

    constructor( name: string, dec: string, imagepath:string){
        this.name = name;
        this.descripation = dec;
        this.imagepath = imagepath;
        
    }
}