import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerpacientePage } from './verpaciente.page';

const routes: Routes = [
  {
    path: '',
    component: VerpacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerpacientePageRoutingModule {}
