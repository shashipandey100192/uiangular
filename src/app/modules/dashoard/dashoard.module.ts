import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoardRoutingModule } from './dashoard-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { Myform1Component } from './myform1/myform1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AdminpageComponent,
    Myform1Component,
    DirectiveComponent
  ],
  imports: [
    CommonModule,
    DashoardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashoardModule { }
