import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewEventPage } from './create-new-event.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNewEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewEventPageRoutingModule {}
