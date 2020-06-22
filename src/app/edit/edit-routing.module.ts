import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
// import { FormGuard } from '../guards/form.guard';

const routes: Routes = [
  {
    path: '',
    component: EditComponent,
    // canDeactivate: [FormGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRoutingModule {}
