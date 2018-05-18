import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { InternationalComponent } from './international/international.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { GoogleDialogService } from './services/google-dialog.service';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { IphoneXComponent } from './phones/iphone-x/iphone-x.component';
import { SamsungGalaxyComponent } from './phones/samsung-galaxy/samsung-galaxy.component';
import { GooglePixelComponent } from './phones/google-pixel/google-pixel.component';
import { PlansComponent } from './plans/plans.component';
import { DealsComponent } from './deals/deals.component';
import { SupportComponent } from './support/support.component';
import { CanaryFlexHdSecurityCameraComponent } from './canary-flex-hd-security-camera/canary-flex-hd-security-camera.component';
import { FitbitComponent } from './fitbit/fitbit.component';
import { BeatsByDreComponent } from './beats-by-dre/beats-by-dre.component';
import { BoseComponent } from './bose/bose.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoriesComponent,
    InternationalComponent,
    MyaccountComponent,
    SmartphonesComponent,
    StoreLocatorComponent,
    HomeComponent,
    NavigationComponent,
    ShopComponent,
    IphoneXComponent,
    SamsungGalaxyComponent,
    GooglePixelComponent,
    PlansComponent,
    DealsComponent,
    SupportComponent,
    CanaryFlexHdSecurityCameraComponent,
    FitbitComponent,
    BeatsByDreComponent,
    BoseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GoogleDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
