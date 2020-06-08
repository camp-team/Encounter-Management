import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreateRoutingModule } from './user-create-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [UserCreateComponent],
  imports: [
    CommonModule,
    UserCreateRoutingModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class UserCreateModule {}
