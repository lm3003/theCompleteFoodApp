import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorage {
  // token: string;

  constructor(private httpService: Http,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  saveData() {
    const token = this.authService.getToken();
   return this.httpService.put('https://ng-thecompletefoodapp.firebaseio.com/recipes.json?auth=' + token,
     this.recipeService.getRecipes());
  }
  fetchData() {
    const token = this.authService.getToken();
    return this.httpService.get('https://ng-thecompletefoodapp.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes = response.json();
          for (const recipe of recipes){
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe []) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }//
}
