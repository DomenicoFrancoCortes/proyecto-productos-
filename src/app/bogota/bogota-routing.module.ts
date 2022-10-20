import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BogotaPage } from './bogota.page';

const routes: Routes = [
  {
    path: '',
    component: BogotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BogotaPageRoutingModule {}
