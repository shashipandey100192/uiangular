import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from './layout/full/full.component';



const routes: Routes = [
{
  path:'',
  component:BlankComponent,
  children:[
    {
      path:'',
      redirectTo:'auth',
      pathMatch:'full'
    },
    {
      path:'auth',
      loadChildren: ()=> import('./modules/auth/auth.module').then(m => m.AuthModule)
    }
  ]
},
{
  path:'',
  component:FullComponent,
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path:'dashboard',
      loadChildren: ()=> import('./modules/dashoard/dashoard.module').then(m => m.DashoardModule)
    }

  ]

}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
