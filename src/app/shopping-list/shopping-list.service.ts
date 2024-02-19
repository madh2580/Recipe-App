import { Subject } from "rxjs";
import { Ingredient } from "./Shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient []= [
        new Ingredient('apples',4),
        new Ingredient( 'Mangos',5),
      ];
  


   getIngredients() {
    return this.ingredients.slice();
   }  
   getIngredient(index: number) {
    return this.ingredients[index];
   }
   addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
   }
   addIngredients(ingredients:Ingredient[]) {
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());

   }
   UpdateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());

   }
   deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());

   }
}