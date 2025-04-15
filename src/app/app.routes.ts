import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{
  path:'',
  redirectTo:'home',
  pathMatch:"full"
},{
  path:'home',
  component:HomeComponent
},{
   path:'signin',
   component:SigninComponent
},{
  path:'signup',
  component:SignupComponent
}];
