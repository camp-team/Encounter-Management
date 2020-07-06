import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    CommonModule,
    SharedModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
  ],
})
export class EditModule {}
