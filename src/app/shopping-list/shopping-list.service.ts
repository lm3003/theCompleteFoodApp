import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientEmitter = new Subject<Ingredient[]>();
  listEditEmitter = new Subject<number>();
//
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  getIngredients() {
    return this.ingredients.slice();

  }

  getIngredient(index: number) {
    return this.ingredients.slice()[index];
  }

  onShoppingItemAdded(ingredientEl: Ingredient) {
    this.ingredients.push(ingredientEl);
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push( ...ingredients );
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  onUpdate(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientEmitter.next(this.ingredients.slice());
  }
  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientEmitter.next(this.ingredients.slice());
  }

}
