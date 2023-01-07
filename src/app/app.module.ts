import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavbarComponent } from './components/mynavbar/mynavbar.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { MyreactiveformComponent } from './components/myreactiveform/myreactiveform.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MynavbarComponent,
    SimpleformComponent,
    MyreactiveformComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
