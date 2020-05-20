import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaideBarPageRoutingModule } from './saide-bar-routing.module';

import { SaideBarPage } from './saide-bar.page';
import { Routes } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaideBarPageRoutingModule
  ],
  declarations: [SaideBarPage]
})
export class SaideBarPageModule {}
