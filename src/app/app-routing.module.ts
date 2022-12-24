import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BthomeComponent } from './bootstrapUI/bthome/bthome.component';
import { AboutComponent } from './coreUI/about/about.component';
import { CoreDashboardComponent } from './coreUI/core-dashboard/core-dashboard.component';
import { CorePurchaseComponent } from './coreUI/core-dashboard/core-purchase/core-purchase.component';
import { CoresalesComponent } from './coreUI/coresales/coresales.component';
import { HomeComponent } from './coreUI/home/home.component';


const routes: Routes = [
 
  {
    path:'uihome',
    component:HomeComponent
  },
  {
    path:'uihome/dashboard',
    component:CoreDashboardComponent
  },
  {
    path:'uihome/sales-detail',
    component:CoresalesComponent
  },
  {
    path:'bthome',
    component:BthomeComponent
  },
  {
    path:'uihome/purchase',
    component:CorePurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
