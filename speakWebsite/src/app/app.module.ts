import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// Router
import { APP_ROUTES } from './routes';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { InternationalComponent } from './international/international.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmartphonesComponent,
    AccesoriesComponent,
    InternationalComponent,
    StoreLocatorComponent,
    MyaccountComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
