

import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AppRouter} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from '../auth/auth-guard.service';
import {DataStorage} from '../shared/data-storage.service';
import {RecipeService} from '../recipes/recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    AppRouter,
  ],
  exports: [
    AppRouter,
    HeaderComponent
  ],
  providers: [
  ]
})
export class CoreModule {

}
