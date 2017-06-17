
import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export  class RecipeService {
  recipeEmitted = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('Rajma Masala',
                                          'Tasty pubjabi rajma masala dish',
                                          'http://yummyindiankitchen.com/wp-content/uploads/2015/05/rajma-masala.jpg',
                                           [new Ingredient('Rajma', 500), new Ingredient('Garam Masala', 2)]),
                              new Recipe('Pani Puri',
                                          'A North Indian speciality',
                                          'https://previews.123rf.com/images/imagefactory2013/imagefactory20131301/imagefactory2013130100022/17327292-Close-up-of-pani-puri-served-in-a-plate-Stock-Photo-chaat-puri.jpg',
                                            [new Ingredient('Puri', 10), new Ingredient('Mint Leaves', 50)])];

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipes() {
    return this.recipes.slice();
  }






}
