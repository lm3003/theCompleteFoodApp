

import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {CommonModule} from '@angular/common';

const authRoutes: Route[] = [
  {path: 'sign-up', component: SignupComponent},
  {path: 'sign-in', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthRoutingModule {

}
