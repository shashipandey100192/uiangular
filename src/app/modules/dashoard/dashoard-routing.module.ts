import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DirectiveComponent } from './directive/directive.component';
import { Myform1Component } from './myform1/myform1.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashoardRoutingModule { }
