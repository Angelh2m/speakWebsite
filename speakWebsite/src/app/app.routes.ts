import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SmartphonesComponent } from "./smartphones/smartphones.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { InternationalComponent } from './international/international.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { ShopComponent } from './shop/shop.component';
import { IphoneXComponent } from "./phones/iphone-x/iphone-x.component";

const appRoutes: Routes = [
    { path: '', component: ShopComponent},
    { path: 'smartphones', component: SmartphonesComponent},
    { path: 'myaccount', component: MyaccountComponent},
    { path: 'international', component: InternationalComponent},
    { path: 'store-locator', component: StoreLocatorComponent},
    { path: 'accessories', component: StoreLocatorComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'iphone-x', component: IphoneXComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});