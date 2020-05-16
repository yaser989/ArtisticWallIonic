import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewEventPageRoutingModule } from './create-new-event-routing.module';

import { CreateNewEventPage } from './create-new-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewEventPageRoutingModule
  ],
  declarations: [CreateNewEventPage]
})
export class CreateNewEventPageModule {}
