import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdwNewPage } from './pdw-new.page';

const routes: Routes = [
  {
    path: '',
    component: PdwNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdwNewPageRoutingModule {}
