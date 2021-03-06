import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  inEditMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.inEditMode = params['id'] != null;
        this.OnInit();
      }
    )
  }

  private OnInit() {
    let recipeName = '';
    let recipeDescription = '';
    let imagePath = '';
    const recipeIngredients = new FormArray([]);

    if (this.inEditMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredientObj of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredientObj.name, Validators.required),
              'amount': new FormControl(ingredientObj.amount,
              [ Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
//
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [ Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
    );
  }


  onSubmit() {
    if (this.inEditMode) {
      this.recipeService.onRecipeUpdated(this.id, this.recipeForm.value);
    } else {
      this.recipeService.onRecipeAdded(this.recipeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getIngredients(recipeForm) {
    return recipeForm.get('ingredients').controls;
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}

