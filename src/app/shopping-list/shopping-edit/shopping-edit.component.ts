import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // shoppingListArray: HTMLInputElement[] = [];
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddBtnClick() {
    // this.shoppingListArray.push(nameInputEl, amountInputEl);
    // console.log(this.shoppingListArray);
    // this.sendShoppingListElement.emit(this.shoppingListArray);
    const ingredientName = this.nameRef.nativeElement.value;
    const ingredientAmount = this.amountRef.nativeElement.value;
    const ingredientEl = new Ingredient(ingredientName, ingredientAmount);

    this.shoppingListService.onShoppingItemAdded(ingredientEl);
  }

}
