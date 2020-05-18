import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-new-event',
    loadChildren: () => import('./create-new-event/create-new-event.module').then( m => m.CreateNewEventPageModule)
  },
  {
    path: 'audition',
    loadChildren: () => import('./audition/audition.module').then( m => m.AuditionPageModule)
  },
  {
    path: 'concert',
    loadChildren: () => import('./concert/concert.module').then( m => m.ConcertPageModule)
  },
  {
    path: 'show',
    loadChildren: () => import('./show/show.module').then( m => m.ShowPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'update-event/:idEvent',
    loadChildren: () => import('./update-event/update-event.module').then( m => m.UpdateEventPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
