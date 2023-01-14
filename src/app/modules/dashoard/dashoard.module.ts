import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoardRoutingModule } from './dashoard-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';


@NgModule({
  declarations: [
    AdminpageComponent
  ],
  imports: [
    CommonModule,
    DashoardRoutingModule
  ]
})
export class DashoardModule { }
