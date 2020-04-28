import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawRoutingModule } from './law-routing.module';
import { LawComponent } from './law/law.component';


@NgModule({
  declarations: [LawComponent],
  imports: [
    CommonModule,
    LawRoutingModule
  ]
})
export class LawModule { }
