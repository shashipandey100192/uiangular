import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyreactiveformComponent } from './components/myreactiveform/myreactiveform.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'simpleform',
    component:SimpleformComponent
  },
  {
    path:'reactiveform',
    component:MyreactiveformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
