import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabinicio',
        loadChildren: () => import('../tabinicio/tabinicio.module').then(m => m.TabinicioPageModule)
      },
      {
        path: 'tabcrearpaciente',
        loadChildren: () => import('../tabcrearpaciente/crearpaciente.module').then(m => m.CrearpacientePageModule)
      },
      {
        path: 'tabpacientes',
        loadChildren: () => import('../tabpacientes/pacientes.module').then(m => m.PacientesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabinicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabinicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
