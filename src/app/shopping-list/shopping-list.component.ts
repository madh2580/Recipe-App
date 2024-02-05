import { Component } from '@angular/core';
import { ingredient } from './Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: ingredient []= [
    new ingredient('apples',4),
    new ingredient( 'Mangos',5),
  ];

}
