import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizaRegistroPage } from './finaliza-registro.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizaRegistroPageRoutingModule {}
