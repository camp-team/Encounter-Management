import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsModule } from './terms.module';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: TermsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsRoutingModule {}
