import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'report', loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'find', loadChildren: () => import('./pages/find/find.module').then( m => m.FindPageModule)
  },
  {
    path: 'item/:id', loadChildren: () => import('./pages/item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
  },
  {
    path: 'profile', loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
