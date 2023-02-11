import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoardRoutingModule } from './dashoard-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { Myform1Component } from './myform1/myform1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { ApidetailComponent } from './apidetail/apidetail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AdminpageComponent,
    Myform1Component,
    DirectiveComponent,
    ApidetailComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
 
  ],
  imports: [
    CommonModule,
    DashoardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    
  ]
})
export class DashoardModule { }
