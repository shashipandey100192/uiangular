import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BthomeComponent } from './bootstrapUI/bthome/bthome.component';
import { HomeComponent } from './coreUI/home/home.component';


const routes: Routes = [
  {
    path:'uihome',
    component:HomeComponent
  },
  {
    path:'bthome',
    component:BthomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
