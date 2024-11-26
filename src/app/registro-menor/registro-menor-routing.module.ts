import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMenorPage } from './registro-menor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMenorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMenorPageRoutingModule {}
