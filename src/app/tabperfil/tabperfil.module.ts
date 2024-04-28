import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabperfilPageRoutingModule } from './tabperfil-routing.module';

import { TabperfilPage } from './tabperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabperfilPageRoutingModule
  ],
  declarations: [TabperfilPage]
})
export class TabperfilPageModule {}
