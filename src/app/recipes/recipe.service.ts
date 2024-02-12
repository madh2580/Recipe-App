import { EventEmitter, Injectable } from '@angular/core';
import  {Recipe} from  './recipe.model';
import { Ingredient } from '../shopping-list/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
          'Testy Schnitzel',
        'A Super-Testy Schnitzel - just awesome!',
        'https://www.healthbenefitstimes.com/glossary/wp-content/uploads/2020/08/Recipe.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
        new Recipe(
          'Big Fast Burgur',
          'What else you need to say?',
        'https://i.pinimg.com/originals/ab/b1/8e/abb18eea3fe18e97c4d5e3e7aae91e23.png',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]),
   ]; 
   constructor (private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }  
  getRecipe (index:number) {
    return this.recipes[index];
  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }
}



