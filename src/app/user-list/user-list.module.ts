import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserListRoutingModule, MatCardModule],
})
export class UserListModule {}
