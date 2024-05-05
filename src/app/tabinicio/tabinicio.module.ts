import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabinicioPageRoutingModule } from './tabinicio-routing.module';

import { TabinicioPage } from './tabinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabinicioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TabinicioPage]
})
export class TabinicioPageModule {}
