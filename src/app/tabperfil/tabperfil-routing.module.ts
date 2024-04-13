import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabperfilPage } from './tabperfil.page';

const routes: Routes = [
  {
    path: '',
    component: TabperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabperfilPageRoutingModule {}
