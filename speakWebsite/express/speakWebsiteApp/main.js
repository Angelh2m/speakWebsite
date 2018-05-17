(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accesories/accesories.component.html":
/*!******************************************************!*\
  !*** ./src/app/accesories/accesories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  accesories works!\n</p>\n"

/***/ }),

/***/ "./src/app/accesories/accesories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/accesories/accesories.component.ts ***!
  \****************************************************/
/*! exports provided: AccesoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesoriesComponent", function() { return AccesoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccesoriesComponent = /** @class */ (function () {
    function AccesoriesComponent() {
    }
    AccesoriesComponent.prototype.ngOnInit = function () {
    };
    AccesoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accesories',
            template: __webpack_require__(/*! ./accesories.component.html */ "./src/app/accesories/accesories.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AccesoriesComponent);
    return AccesoriesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accesories_accesories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accesories/accesories.component */ "./src/app/accesories/accesories.component.ts");
/* harmony import */ var _international_international_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./international/international.component */ "./src/app/international/international.component.ts");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var _smartphones_smartphones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./smartphones/smartphones.component */ "./src/app/smartphones/smartphones.component.ts");
/* harmony import */ var _store_locator_store_locator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store-locator/store-locator.component */ "./src/app/store-locator/store-locator.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/navigation/navigation.component */ "./src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var _services_google_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/google-dialog.service */ "./src/app/services/google-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _accesories_accesories_component__WEBPACK_IMPORTED_MODULE_5__["AccesoriesComponent"],
                _international_international_component__WEBPACK_IMPORTED_MODULE_6__["InternationalComponent"],
                _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_7__["MyaccountComponent"],
                _smartphones_smartphones_component__WEBPACK_IMPORTED_MODULE_8__["SmartphonesComponent"],
                _store_locator_store_locator_component__WEBPACK_IMPORTED_MODULE_9__["StoreLocatorComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTES"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_google_dialog_service__WEBPACK_IMPORTED_MODULE_12__["GoogleDialogService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _smartphones_smartphones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smartphones/smartphones.component */ "./src/app/smartphones/smartphones.component.ts");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var _international_international_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./international/international.component */ "./src/app/international/international.component.ts");
/* harmony import */ var _store_locator_store_locator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-locator/store-locator.component */ "./src/app/store-locator/store-locator.component.ts");






var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'smartphones', component: _smartphones_smartphones_component__WEBPACK_IMPORTED_MODULE_2__["SmartphonesComponent"] },
    { path: 'myaccount', component: _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_3__["MyaccountComponent"] },
    { path: 'international', component: _international_international_component__WEBPACK_IMPORTED_MODULE_4__["InternationalComponent"] },
    { path: 'store-locator', component: _store_locator_store_locator_component__WEBPACK_IMPORTED_MODULE_5__["StoreLocatorComponent"] },
    { path: 'accessories', component: _store_locator_store_locator_component__WEBPACK_IMPORTED_MODULE_5__["StoreLocatorComponent"] },
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false });


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"responsive\" src=\"{{img}}\" alt=\"\">"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.img = '../../assets/home.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/international/international.component.html":
/*!************************************************************!*\
  !*** ./src/app/international/international.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"responsive\" src=\"{{img}}\" alt=\"\">"

/***/ }),

/***/ "./src/app/international/international.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/international/international.component.ts ***!
  \**********************************************************/
/*! exports provided: InternationalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalComponent", function() { return InternationalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternationalComponent = /** @class */ (function () {
    function InternationalComponent() {
        this.img = '../../assets/storeLocator.png';
    }
    InternationalComponent.prototype.ngOnInit = function () {
    };
    InternationalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-international',
            template: __webpack_require__(/*! ./international.component.html */ "./src/app/international/international.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], InternationalComponent);
    return InternationalComponent;
}());



/***/ }),

/***/ "./src/app/myaccount/myaccount.component.html":
/*!****************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"responsive\" src=\"{{img}}\" alt=\"\">"

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.ts ***!
  \**************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyaccountComponent = /** @class */ (function () {
    function MyaccountComponent() {
        this.img = '../../assets/myaccount.png';
    }
    MyaccountComponent.prototype.ngOnInit = function () {
    };
    MyaccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myaccount',
            template: __webpack_require__(/*! ./myaccount.component.html */ "./src/app/myaccount/myaccount.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MyaccountComponent);
    return MyaccountComponent;
}());



/***/ }),

/***/ "./src/app/services/google-dialog.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/google-dialog.service.ts ***!
  \***************************************************/
/*! exports provided: GoogleDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDialogService", function() { return GoogleDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';
var GoogleDialogService = /** @class */ (function () {
    function GoogleDialogService(http) {
        this.http = http;
        this.response = [];
        this.token = 'ya29.c.El-7BVxHBhdLA51Wo_fF19yuEPfLTU51ROR_knyOw6yuDEWhWKtbj_2E2c_7kmwchtX_MTTFN5-Lj2T2gn9W8BPJpZoNjNBbsU-LdRUvs3kUImCVHqGsX8caxK_47XttFw';
    }
    GoogleDialogService.prototype.getHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'authorization': "Bearer " + this.token
        });
        return headers;
    };
    GoogleDialogService.prototype.getCall = function (myData) {
        var url;
        var data = myData;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'authorization': "Bearer " + this.token,
            'queryInput': myData
        });
        console.log(headers);
        return this.http.post(url, { headers: headers });
    };
    GoogleDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleDialogService);
    return GoogleDialogService;
}());



/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <li>\n        <a routerLink=\"/\">home</a>\n    </li>\n    <li>\n        <a routerLink=\"myaccount\">my Account</a>\n    </li>\n    <li>\n        <a routerLink=\"smartphones.html\">smartphones</a>\n    </li>\n    <li>\n        <a routerLink=\"store-locator\">storelocator</a>\n    </li>\n</nav>\n\n<div class=\"callout\" style=\"position: absolute;right: 400px;top: 40px;z-index: 1000;\">\n    <div class=\"bubble\">\n        <div class=\"si-wrapper\">\n            <textarea [(ngModel)]='spokenText' class=\"speech-input\" style=\"display: block; padding-right: 25px;\" placeholder=\"Div Multi Line\" rows=\"10\" cols=\"40\"></textarea>\n            <button type=\"button\" class=\"si-btn\" style=\"cursor: pointer; top: 3.25px; width: 26px; height: 26px;\">\n                speech input\n              \n            </button>\n            <button class=\"si-btn\">\n                    BUTTON@\n                    <span class=\"si-mic\">\n                        </span>\n                   \n                        <span class=\"si-holder\">\n                        </span>\n            </button>\n        </div>\n    </div>\n    <div class=\"triUp\"></div>\n    <dir>{{spokenText}}</dir>\n</div>"

/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/google-dialog.service */ "./src/app/services/google-dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, _googleDialogService) {
        this.router = router;
        this._googleDialogService = _googleDialogService;
        this.name = "Hello!!!!!";
        this.spokenText = '';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        /*global webkitSpeechRecognition */
        this.startDialog();
    };
    NavigationComponent.prototype.startDialog = function () {
        var name = 'LOADED!';
        // let hello = ()=>{
        // 	this.name
        // }
        // hello();
        // check for support (webkit only)
        if (!('webkitSpeechRecognition' in window))
            return;
        var talkMsg = 'Speak now';
        // seconds to wait for more input after last
        var defaultPatienceThreshold = 6;
        var capitalize = function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
        var inputEls = document.getElementsByClassName('speech-input');
        // console.log("the number of input elements with speech-input "+ inputEls.lengtn);
        [].forEach.call(inputEls, function (inputEl) {
            var patience = parseInt(inputEl.dataset.patience, 6) || defaultPatienceThreshold;
            var micBtn, micIcon, holderIcon, newWrapper;
            var shouldCapitalize = true;
            // gather inputEl data
            var nextNode = inputEl.nextSibling;
            var parent = inputEl.parentNode;
            var inputRightBorder = parseInt(getComputedStyle(inputEl).borderRightWidth, 10);
            var buttonSize = 0.8 * (inputEl.dataset.buttonsize || inputEl.offsetHeight);
            /* *
            *  Button command selector
            */
            var wrapper = inputEl.parentNode;
            var micBtn = wrapper.querySelector('.si-btn');
            // append wrapper where input was
            if (newWrapper)
                parent.insertBefore(wrapper, nextNode);
            // setup recognition
            var prefix = '';
            var isSentence;
            var recognizing = false;
            var timeout;
            var oldPlaceholder = null;
            var wakeup = false;
            // var recognition = new webkitSpeechRecognition();
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            var recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            // if lang attribute is set on field use that
            // (defaults to use the lang of the root element)
            if (inputEl.lang)
                recognition.lang = inputEl.lang;
            var restartTimer = function () {
                timeout = setTimeout(function () {
                    recognition.stop();
                }, patience * 500);
            };
            recognition.onstart = function () {
                oldPlaceholder = inputEl.placeholder;
                inputEl.placeholder = inputEl.dataset.ready || talkMsg;
                recognizing = true;
                inputEl.value = "";
                micBtn.classList.add('listening');
                restartTimer();
            };
            recognition.onend = function () {
                recognizing = false;
                clearTimeout(timeout);
                micBtn.classList.remove('listening');
                if (oldPlaceholder !== null) {
                    inputEl.placeholder = oldPlaceholder;
                }
                var transcript = inputEl.value;
                if (transcript.toUpperCase() === "HELLO") {
                    wakeup = true;
                }
                if (transcript.toUpperCase() === "SCROLL DOWN") {
                    console.log("SCROLL DOWN");
                    wakeup = true;
                    window.scrollBy(0, 500);
                }
                if (transcript.toUpperCase() === "SCROLL UP") {
                    console.log("GO BACK");
                    wakeup = true;
                    window.scrollBy(0, -500);
                }
                if (transcript.toUpperCase() === "GO BACK") {
                    console.log("GO BACK");
                    wakeup = true;
                    window.history.back();
                }
                else {
                    apicall(inputEl.value);
                }
            };
            var apicall = function (invar) {
                console.log("inside the apicall function " + invar);
                var myData = {
                    queryInput: {
                        text: {
                            text: invar,
                            languageCode: "en"
                        }
                    },
                    queryParams: {
                        timeZone: "America/New_York"
                    }
                };
                //   console.log(myData);
                // var Data = JSON.stringify(myData);
                // let x = this._googleDialogService.getCall(Data);
                // x.subscribe(resp =>{
                // 	console.log(resp);
                // });
                var url = "https://dialogflow.googleapis.com/v2/projects/vze-bot/agent/sessions/8d31966d-6930-4d74-aec3-2c3ff27fa4d0:detectIntent";
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(myData),
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ya29.c.El-7Bfm909ZldcaOKKs92K1NKS0njva2jQvd5CV9Xj7_HGX6C21Xwl4MeCdLADZcfGAcLnJYR9EvcT2sH1E1wi3c6Qle4lP-trzF0z6lir83pF4OqVKzOtOwT_Kgd-7jbQ'
                    })
                }).then(function (res) { return res.json(); })
                    .catch(function (error) { return console.error('Error:', error); })
                    .then(function (response) {
                    respHandle(response);
                });
                //   $.ajax({
                // 		type: 'POST',
                // 		contentType: "application/json",
                // 		dataType: "json",
                // 		beforeSend: function (xhr) {
                // 			xhr.setRequestHeader('Authorization', 'Bearer ya29.c.El-6BXRT_sg0cR2VWUscfVVTswjt5sBrEmgfkY1NNtjgE7GIAjhi4beCz4lsjaJdLluge2YeoHyePeTaVKk1rUkPX2ju7yMb5nf00FS3jfZ4UU0E3zYGZymRGFWC3UC6mQ');
                // 		},
                // 		// make sure you respect the same origin policy with this url:
                // 		// http://en.wikipedia.org/wiki/Same_origin_policy
                // 		data: "{\"queryInput\":{\"text\":{\"text\":\""+invar+"\",\"languageCode\":\"en\"}},\"queryParams\":{\"timeZone\":\"America/New_York\"}}",
                // 		success: function(msg){
                // 			//alert('wow ' + msg);
                // 			//console.log(msg);
                // 			//resp = jQuery.parseJSON(msg);
                // 			//resp = eval(msg);
                // 			//resp = JSON.stringify(msg);
                // 			//resp = JSON.parse(msg);
                // 			respHandle(msg);
                // 			//console.log(eval(msg));
                // 		}
                // 	});
            };
            var resp, resp2;
            var fulfilmentMsg;
            var textResp;
            var intent;
            var agentResp1, agentResp2, errormessage;
            var respHandle = function (agentResp) {
                //resp = JSON.parse(agentResp);
                resp2 = eval(agentResp);
                //console.log(resp);
                console.log('THE RESPONSE!', resp2);
                intent = resp2.queryResult.intent.displayName;
                if (intent === "smartphones_page" || intent === "accessories") {
                    fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
                    agentResp1 = resp2.queryResult.fulfillmentMessages["0"].text.text["0"];
                    //   console.log( index + ": " + value );
                    //   textResp = value;
                    //   textResp = JSON.parse(fulfilmentMsg) 
                    //   console.log(textResp);
                    //   console.log("index "+index+" the text response "+textResp.text.text[0]);
                    //   if(index === 0){
                    // 	  agentResp1 = textResp.text.text[0]; 
                    //   }else if(index == 1){
                    // 	  agentResp2 = textResp.text.text[0]
                    //   }
                    console.log("redirect to smartphone page", agentResp1);
                    //   this.router.navigate([agentResp1]);
                    window.location.href = "http://localhost:4200/" + agentResp1;
                }
                else {
                    fulfilmentMsg = resp2.queryResult.fulfillmentMessages;
                    [].forEach.call(fulfilmentMsg, function (index, value) {
                        console.log(index + ": " + value);
                        textResp = eval(value);
                        console.log(textResp);
                        console.log("index " + index + " the text response " + textResp.text.text[0]);
                        errormessage = textResp.text.text[0];
                        inputEl.value = errormessage;
                    });
                }
            };
            var finalTranscript = '';
            recognition.onresult = function (event) {
                clearTimeout(timeout);
                // get SpeechRecognitionResultList object
                var resultList = event.results;
                // go through each SpeechRecognitionResult object in the list
                var interimTranscript = '';
                for (var i = event.resultIndex; i < resultList.length; ++i) {
                    var result = resultList[i];
                    // get this result's first SpeechRecognitionAlternative object
                    var firstAlternative = result[0];
                    if (result.isFinal) {
                        finalTranscript += firstAlternative.transcript;
                    }
                    else {
                        interimTranscript += firstAlternative.transcript;
                    }
                }
                // capitalize transcript if start of new sentence
                var transcript = finalTranscript || interimTranscript;
                transcript = !prefix || isSentence ? capitalize(transcript) : transcript;
                // append transcript to cached input value
                /*console.log("transcript "+ transcript);
                
                else{*/
                inputEl.value = transcript;
                // set cursur and scroll to end
                inputEl.focus();
                if (inputEl.tagName === 'INPUT') {
                    inputEl.scrollLeft = inputEl.scrollWidth;
                }
                else {
                    inputEl.scrollTop = inputEl.scrollHeight;
                }
                //wakeup = false;
                //}
                restartTimer();
            };
            micBtn.addEventListener('click', function (event) {
                event.preventDefault();
                // stop and exit if already going
                if (recognizing) {
                    recognition.stop();
                    return;
                }
                // Cache current input value which the new transcript will be appended to
                var endsWithWhitespace = inputEl.value.slice(-1).match(/\s/);
                prefix = !inputEl.value || endsWithWhitespace ? inputEl.value : inputEl.value + ' ';
                // check if value ends with a sentence
                isSentence = prefix.trim().slice(-1).match(/[\.\?\!]/);
                // restart recognition
                finalTranscript = '';
                recognition.start();
            }, false);
            //enable the below line to listen after page load
            //recognition.start();
        });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/navigation/navigation.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_google_dialog_service__WEBPACK_IMPORTED_MODULE_1__["GoogleDialogService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/smartphones/smartphones.component.html":
/*!********************************************************!*\
  !*** ./src/app/smartphones/smartphones.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"responsive\" src=\"{{img}}\" alt=\"\">"

/***/ }),

/***/ "./src/app/smartphones/smartphones.component.ts":
/*!******************************************************!*\
  !*** ./src/app/smartphones/smartphones.component.ts ***!
  \******************************************************/
/*! exports provided: SmartphonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphonesComponent", function() { return SmartphonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartphonesComponent = /** @class */ (function () {
    function SmartphonesComponent() {
        this.img = '../../assets/smartphones.png';
    }
    SmartphonesComponent.prototype.ngOnInit = function () {
        this.img = '../../assets/smartphones.png';
    };
    SmartphonesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smartphones',
            template: __webpack_require__(/*! ./smartphones.component.html */ "./src/app/smartphones/smartphones.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SmartphonesComponent);
    return SmartphonesComponent;
}());



/***/ }),

/***/ "./src/app/store-locator/store-locator.component.html":
/*!************************************************************!*\
  !*** ./src/app/store-locator/store-locator.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"responsive\" src=\"{{img}}\" alt=\"\">"

/***/ }),

/***/ "./src/app/store-locator/store-locator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/store-locator/store-locator.component.ts ***!
  \**********************************************************/
/*! exports provided: StoreLocatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLocatorComponent", function() { return StoreLocatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreLocatorComponent = /** @class */ (function () {
    function StoreLocatorComponent() {
        this.img = '../../assets/storeLocator.png';
    }
    StoreLocatorComponent.prototype.ngOnInit = function () {
    };
    StoreLocatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-locator',
            template: __webpack_require__(/*! ./store-locator.component.html */ "./src/app/store-locator/store-locator.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], StoreLocatorComponent);
    return StoreLocatorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ahm/Desktop/speakWebsite/speakWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map