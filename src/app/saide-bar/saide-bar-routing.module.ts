import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaideBarPage } from './saide-bar.page';

const routes: Routes = [
  {
    path: '',
    component: SaideBarPage,
    children:[
        {
          path: 'home',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        },
        {
          path: 'create-new-event',
          loadChildren: () => import('../create-new-event/create-new-event.module').then( m => m.CreateNewEventPageModule)
        },
        {
          path: 'audition',
          loadChildren: () => import('../audition/audition.module').then( m => m.AuditionPageModule)
        },
        {
          path: 'concert',
          loadChildren: () => import('../concert/concert.module').then( m => m.ConcertPageModule)
        },
        {
          path: 'show',
          loadChildren: () => import('../show/show.module').then( m => m.ShowPageModule)
        },
       
        {
          path: 'profile/:id',
          loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
        },
        {
          path: 'update-event/:idEvent',
          loadChildren: () => import('../update-event/update-event.module').then( m => m.UpdateEventPageModule)
        }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaideBarPageRoutingModule {}
