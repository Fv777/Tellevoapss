import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModpwPage } from './modpw.page';

const routes: Routes = [
  {
    path: '',
    component: ModpwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModpwPageRoutingModule {}
