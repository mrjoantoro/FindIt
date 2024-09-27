import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'report', loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'find', loadChildren: () => import('./pages/find/find.module').then( m => m.FindPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'item/:id', loadChildren: () => import('./pages/item-detail/item-detail.module').then( m => m.ItemDetailPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'profile', loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
