import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class UserDetailModule {}
