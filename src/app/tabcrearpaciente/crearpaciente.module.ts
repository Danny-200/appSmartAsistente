import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearpacientePage } from './crearpaciente.page';
import { CrearpacientePageRoutingModule } from './crearpaciente-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearpacientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearpacientePage]
})
export class CrearpacientePageModule {}
