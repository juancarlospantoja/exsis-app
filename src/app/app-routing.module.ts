import { ColegioModule } from './views/colegio/colegio.module';

import { SidebarnavComponent } from './containers/sidebarnav/sidebarnav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    component: SidebarnavComponent,
    data: {
      title: 'COLEGIO',
    },

  },

  
  {
    path: '',
    component: SidebarnavComponent,
    data: {
      title: 'COLEGIO'
    },
    children: [
      {
        path: '',
        loadChildren: './views/colegio/colegio.module#ColegioModule'

      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
