import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearusuarioPageRoutingModule } from './crearusuario-routing.module';
import { CrearusuarioPage } from './crearusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearusuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearusuarioPage]
})
export class CrearusuarioPageModule {}
