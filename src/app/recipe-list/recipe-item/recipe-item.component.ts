import { Component, OnInit,Input, } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
recipes: any;

 @Input()
  recipe!: Recipe;
 ngOnInit() {
  
}
}
