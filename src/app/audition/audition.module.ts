import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditionPageRoutingModule } from './audition-routing.module';

import { AuditionPage } from './audition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuditionPageRoutingModule
  ],
  declarations: [AuditionPage]
})
export class AuditionPageModule {}
