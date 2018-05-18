import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SmartphonesComponent } from "./smartphones/smartphones.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { InternationalComponent } from './international/international.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { ShopComponent } from './shop/shop.component';
import { IphoneXComponent } from "./phones/iphone-x/iphone-x.component";
import { SamsungGalaxyComponent } from "./phones/samsung-galaxy/samsung-galaxy.component";
import { GooglePixelComponent } from './phones/google-pixel/google-pixel.component';
import { PlansComponent } from './plans/plans.component';
import { DealsComponent } from './deals/deals.component';
import { SupportComponent } from './support/support.component';
import { CanaryFlexHdSecurityCameraComponent } from './canary-flex-hd-security-camera/canary-flex-hd-security-camera.component';
import { FitbitComponent } from './fitbit/fitbit.component';
import { BeatsByDreComponent } from './beats-by-dre/beats-by-dre.component';
import { BoseComponent } from './bose/bose.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'smartphones', component: SmartphonesComponent},
    { path: 'myaccount', component: MyaccountComponent},
    { path: 'login', component: LoginComponent},
    { path: 'international', component: InternationalComponent},
    { path: 'store-locator', component: StoreLocatorComponent},
    { path: 'accessories', component: AccesoriesComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'iphonex', component: IphoneXComponent},
    { path: 'samsunggalaxy', component: SamsungGalaxyComponent},
    { path: 'googlepixel', component: GooglePixelComponent},
    { path: 'phone-plans', component: PlansComponent},
    { path: 'deals', component: DealsComponent},
    { path: 'support', component: SupportComponent},
    { path: 'canary-flex-hd-security-camera', component: CanaryFlexHdSecurityCameraComponent},
    { path: 'fitbit', component: FitbitComponent},
    { path: 'beats-by-dre', component: BeatsByDreComponent},
    { path: 'bose', component: BoseComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});