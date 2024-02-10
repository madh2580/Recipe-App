import { Ingredient } from "../shopping-list/Shared/ingredient.model";

export class Recipe {
    public name!:string;
    public descripation!: string;
    public imagepath!:string;
    public ingredients!: Ingredient [];

    constructor( name: string, dec: string, imagepath:string, ingredients: Ingredient[]){
        this.name = name;
        this.descripation = dec;
        this.imagepath = imagepath;
        this.ingredients = ingredients;
        
    }
}