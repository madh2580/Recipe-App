import { Component ,ElementRef, EventEmitter, ViewChild,Output} from '@angular/core';
import { ingredient } from '../shopping-list/Shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
   @ViewChild( 'nameInput' ) nameInputRef!: ElementRef;
   @ViewChild( 'amountInput') amountInputRef!: ElementRef;
   @Output() ingredientAdd = new EventEmitter<ingredient>();
  onAddItem() {
    const ingname = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(ingname, ingamount);
    this.ingredientAdd.emit(newIngredient);

  }

}
