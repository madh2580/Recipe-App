import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id!: number;
  editMode = false;
  recipeForm!: FormGroup;
ingredients: any;
  // fb: any;

  

  constructor ( private route: ActivatedRoute,
                private recipeService: RecipeService, private fb: FormBuilder) {
      }
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params ['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
     }
    
  onSubmit() {
    console.log(this.recipeForm);
  }
  private initForm() {
   let recipeName = '';
   let recipeImagePath = '';
   let recipeDescription = '';
   let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      console.log('allu', recipe)
      recipeName = recipe.name;
      recipeImagePath = recipe.imagepath;
      recipeDescription = recipe.descripation;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          
         }
      }
    }

    this.recipeForm= new FormGroup({
      'name' : new FormControl(recipeName),
      'imagepath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }
}


