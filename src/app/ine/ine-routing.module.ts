import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { INEPage } from './ine.page';

const routes: Routes = [
  {
    path: '',
    component: INEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class INEPageRoutingModule {}
