import { Routes } from '@angular/router';
import {authGuard} from './services/guard/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./modules/login/login.component').then(m => m.LoginComponent) },
  { path: 'home', loadComponent: () => import('./shareds/modules/home/home.component').then(m => m.HomeComponent), canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
