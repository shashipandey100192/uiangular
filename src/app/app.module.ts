import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './coreUI/home/home.component';
import { AboutComponent } from './coreUI/about/about.component';
import { ContactComponent } from './coreUI/contact/contact.component';
import { BtcontractComponent } from './bootstrapUI/btcontract/btcontract.component';
import { BtaboutComponent } from './bootstrapUI/btabout/btabout.component';
import { BthomeComponent } from './bootstrapUI/bthome/bthome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BtcontractComponent,
    BtaboutComponent,
    BthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
