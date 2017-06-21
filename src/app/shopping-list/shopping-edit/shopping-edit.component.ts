import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;
  editSubscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;



  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.listEditEmitter.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  onAddBtnClick() {
    const value = this.form.value;
    const ingredientEl = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.onUpdate(this.editItemIndex, ingredientEl);
    } else {
      this.shoppingListService.onShoppingItemAdded(ingredientEl);
    }
    this.editMode = false;
    this.form.reset();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.editItemIndex);
    this.onClear();
  }


  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }
}
