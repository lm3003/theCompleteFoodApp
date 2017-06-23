
import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export  class RecipeService {

  private recipes: Recipe[] = [new Recipe('Rajma Masala',
                                          'Tasty pubjabi rajma masala dish',
                                          'http://yummyindiankitchen.com/wp-content/uploads/2015/05/rajma-masala.jpg',
                                           [new Ingredient('Rajma', 500), new Ingredient('Garam Masala', 2)]),
                                            new Recipe('Pani Puri',
                                              'A North Indian speciality',
                                              'https://previews.123rf.com/images/imagefactory2013/' +
                                              'imagefactory20131301/imagefactory2013130100022/' +
                                              '17327292-Close-up-of-pani-puri-served-in-a-plate-Stock-Photo-chaat-puri.jpg',
                                            [new Ingredient('Puri', 10), new Ingredient('Mint Leaves', 50)])];
  recipeChangedEmitter = new Subject<Recipe []>();

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  onRecipeAdded(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChangedEmitter.next(this.recipes.slice());
  }

  onRecipeUpdated(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChangedEmitter.next(this.recipes.slice());
  }

  onRecipeDeleted(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChangedEmitter.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe []) {
    this.recipes = recipes;
    this.recipeChangedEmitter.next(this.recipes.slice());
  }






}
