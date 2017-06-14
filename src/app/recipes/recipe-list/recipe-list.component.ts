import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import {current} from "codelyzer/util/syntaxKind";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ new Recipe('Test Recipe', 'Simple Test Recipe Description',
      'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-06.jpg'), new Recipe('Test Recipe1', 'Simple' +
    ' Test Recipe Description',
    'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-06.jpg')];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {  }

  ngOnInit() {

  }

  onReceiveRecipeData(recipeData: Recipe){
    this.recipeSelected.emit(recipeData);
  }



}
