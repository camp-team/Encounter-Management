import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsModule } from './terms.module';


const routes: Routes = [
  {
    path: '',
    component: TermsModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
