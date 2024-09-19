import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { authGuard } from './core/guards/auth.guard';
import { blankgaurdGuard } from './core/services/blankgaurd.guard';
import { PageNotFoundComponent } from './components/page-not-found/pageNotFound';

export const routes: Routes = 
[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',canActivate:[authGuard],component:HomeComponent,title:'home 📓🔑'},
    {path:'signup',canActivate:[blankgaurdGuard],component:SignupComponent,title:'signup'},
    {path:'signin',canActivate:[blankgaurdGuard],component:SigninComponent,title:'signin'},
    {path:'**',component:PageNotFoundComponent,title:'🔑📓'},
];