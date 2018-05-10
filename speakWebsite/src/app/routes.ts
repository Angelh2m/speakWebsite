import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SmartphonesComponent } from "./smartphones/smartphones.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { InternationalComponent } from './international/international.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'smartphones', component: SmartphonesComponent},
    { path: 'myaccount', component: MyaccountComponent},
    { path: 'international', component: InternationalComponent},
    { path: 'store-locator', component: StoreLocatorComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});