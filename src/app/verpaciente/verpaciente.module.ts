import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerpacientePageRoutingModule } from './verpaciente-routing.module';

import { VerpacientePage } from './verpaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerpacientePageRoutingModule
  ],
  declarations: [VerpacientePage]
})
export class VerpacientePageModule {}
