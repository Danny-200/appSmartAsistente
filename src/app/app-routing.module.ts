import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./tabpacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'crearpaciente',
    loadChildren: () => import('./tabcrearpaciente/crearpaciente.module').then( m => m.CrearpacientePageModule)
  },
  {
    path: 'tabinicio',
    loadChildren: () => import('./tabinicio/tabinicio.module').then( m => m.TabinicioPageModule)
  },
  {
    path: 'tabperfil',
    loadChildren: () => import('./tabperfil/tabperfil.module').then( m => m.TabperfilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'verpaciente',
    loadChildren: () => import('./verpaciente/verpaciente.module').then( m => m.VerpacientePageModule)
  },
  {
    path: 'crearusuario',
    loadChildren: () => import('./crearusuario/crearusuario.module').then( m => m.CrearusuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
