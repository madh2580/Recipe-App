import { Component ,ElementRef,OnInit,ViewChild,} from '@angular/core';
import { Ingredient } from '../shopping-list/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild( 'nameInput' ) nameInputRef!: ElementRef;
   @ViewChild( 'amountInput') amountInputRef!: ElementRef;

   constructor(private slService: ShoppingListService) {

   }
   ngOnInit(){

   }
   
   
  onAddItem() {
    const ingname = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingname, ingamount);
    this.slService.addIngredient(newIngredient);

  }
}


