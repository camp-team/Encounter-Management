import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawComponent } from './law/law.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LawComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawRoutingModule {}
