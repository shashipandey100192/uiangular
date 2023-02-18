import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ApidetailComponent } from './apidetail/apidetail.component';
import { CustompageComponent } from './custompage/custompage.component';
import { DirectiveComponent } from './directive/directive.component';
import { Myform1Component } from './myform1/myform1.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path:'',
    component: AdminpageComponent
  },
  {
    path:'reactform',
    component:Myform1Component
  },
  {
    path:'directive',
    component:DirectiveComponent
  },
  {
    path:'apidetail',
    component:ApidetailComponent
  },
  {
    path:'apidetail/:id',
    component:ProductsComponent
  },
  {
    path:'inputoutput',
    component:ParentComponent
  },
  {
    path:'custompipe',
    component:CustompageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashoardRoutingModule { }
