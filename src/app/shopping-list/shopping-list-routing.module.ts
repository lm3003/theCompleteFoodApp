
import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';
import {CommonModule} from '@angular/common';



const shoppingListRoutes: Route[] = [
  {path: '', component: ShoppingListComponent}
];


@NgModule({
  imports : [RouterModule.forChild(shoppingListRoutes)],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class ShoppingListRoutingModule {

}
