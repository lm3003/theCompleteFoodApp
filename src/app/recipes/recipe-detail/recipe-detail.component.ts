import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeData: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeData = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onToShoppingListClick() {
    this.recipeService.addIngredients(this.recipeData.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo : this.route});
  }

  onDeleteRecipe() {
    this.recipeService.onRecipeDeleted(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
