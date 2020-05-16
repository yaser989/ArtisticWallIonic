import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditionPage } from './audition.page';

const routes: Routes = [
  {
    path: '',
    component: AuditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditionPageRoutingModule {}
