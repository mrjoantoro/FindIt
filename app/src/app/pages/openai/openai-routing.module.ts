import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenaiPage } from './openai.page';

const routes: Routes = [
  {
    path: '',
    component: OpenaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenaiPageRoutingModule {}
