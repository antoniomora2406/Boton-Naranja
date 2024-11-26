import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioRegPage } from './formulario-reg.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioRegPageRoutingModule {}
