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
import { LoginComponent } from './coreUI/login/login.component';
import { CoreDashboardComponent } from './coreUI/core-dashboard/core-dashboard.component';
import { CoresalesComponent } from './coreUI/coresales/coresales.component';
import { CorePurchaseComponent } from './coreUI/core-dashboard/core-purchase/core-purchase.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BtcontractComponent,
    BtaboutComponent,
    BthomeComponent,
    LoginComponent,
    CoreDashboardComponent,
    CoresalesComponent,
    CorePurchaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
