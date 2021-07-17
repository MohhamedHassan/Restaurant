(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Nym":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth-layout/auth-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 10, vars: 4, consts: [[1, "py-5", 2, "background-color", "#EBEBEB", "min-height", "100vh"], [1, "authLayout", "p-2", "p-md-5", "bg-white"], ["width", "50", "src", "assets/pizzahutLogo-en.png", "alt", ""], [1, "d-flex", "my-3"], ["routerLinkActive", "active", "routerLink", "../auth/login", 1, "mr-4", "font-weight-bold", "text-secondary", 3, "routerLinkActiveOptions"], ["routerLink", "../auth/register", "routerLinkActive", "active", 1, "font-weight-bold", "text-secondary", 3, "routerLinkActiveOptions"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Acount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".authLayout[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 10px;\n}\n.authLayout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  outline: none;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n.authLayout[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: black !important;\n  border-bottom: 3px solid #dd1133;\n}\n@media (max-width: 768px) {\n  .authLayout[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .authLayout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0FBQ1I7QUFHQTtFQUNJO0lBQ0ksVUFBQTtFQUFOO0VBQ007SUFDSSxlQUFBO0VBQ1Y7QUFDRiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYXV0aExheW91dCB7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMjIxLCAxNywgNTEpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhICAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmF1dGhMYXlvdXQge1xyXG4gICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\430 G3\Desktop\restaurant\src\main.ts */"zUnb");


/***/ }),

/***/ "0AbP":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DashboardService {
    constructor(http) {
        this.http = http;
        this.showNavBar = true;
    }
    getCategories() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/categories`);
    }
    getCategoriesById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/categories/${id}`);
    }
    getCategoriesNames() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/categories/names`);
    }
    deleteCategory(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/categories/delete/${id}`);
    }
    addProduct(product) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/products/add`, product, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*'
            })
        });
    }
    getProductById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/products/product/${id}`);
    }
    deleteProduct(id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: {
                "id": `${id}`
            }
        };
        return this.http.request('delete', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/products/delete`, options);
    }
    updateProduct(id, name, descripition, price, sizes, toppings, specialsAdditions) {
        const body = {
            "id": `${id}`,
            // "newData": {
            name, descripition, price, sizes, toppings, specialsAdditions
            // }
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/products/update`, body);
    }
    updateImage(image) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/products/image/update`, image);
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "https://resturant-api.herokuapp.com"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");


class HomeComponent {
    constructor() {
        this.slides = [];
        this.activeSlideIndex = 0;
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    ngOnInit() {
    }
    addSlide() {
        this.slides.push({
            image: `assets/${this.slides.length % 8 + 1}.jpg`
        });
    }
    removeSlide(index) {
        const toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 0, consts: [[2, "min-height", "100vh", "background-color", "#EBEBEB"], [1, "py-3"], [1, "container"], ["src", "assets/3.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], ["src", "assets/2.jpg", "alt", "second slide", 2, "display", "block", "width", "100%"], ["src", "assets/1.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"], [1, "home", "container", "py-3"], ["width", "50", "src", "../../../assets/pizzahutLogo-en.png", "alt", ""], [1, "my-2", 2, "text-transform", "uppercase"], [1, "fixed-bottom", "py-3", "text-white", "d-flex", "justify-content-center", "align-items-center", "text-center", 2, "background-color", "#202020"], [1, "m-0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "try our new pizza hut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Introducing the all new \u201CPizza hut Egypt\u201D app for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " easy ordering and great exclusive deals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A9 2021 Pizza Hut Restaurants LLC. Featured products available at participating locations only. All rights reserved. Terms & Conditions apply.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  background-image: url('home.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaG9tZS5wbmcnKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "text-center", "pt-5"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ERROR 404 NOT FOUND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/cart.service */ "c14U");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");









function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hi ", ctx_r0.authService.userProfile == null ? null : ctx_r0.authService.userProfile.profile.firstName, "");
} }
function AppComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
function AppComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function AppComponent_div_23_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login to add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_23_ng_container_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r12.sideNav = false ? undefined : false; return ctx_r12.preventScroll = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_23_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "there are no categories yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["products", a1]; };
function AppComponent_div_23_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_23_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r15.sideNav = false ? undefined : false; return ctx_r15.preventScroll = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, name_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", name_r14, "");
} }
function AppComponent_div_23_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 45);
} }
function AppComponent_div_23_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.cartservice.totalAmount, "");
} }
function AppComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_23_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r17.sideNav = !ctx_r17.sideNav; return ctx_r17.preventScroll = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_23_ng_container_7_Template, 5, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_23_li_8_Template, 2, 0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_23_li_9_Template, 2, 6, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_23_Template_p_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.yourCartISEmpty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_23_i_12_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_23_span_13_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("movSideNAv", ctx_r6.sideNav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.authService.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r6.dashboard.categoriesNames == null ? null : ctx_r6.dashboard.categoriesNames.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dashboard.categoriesNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.cartservice.cartData.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.cartservice.cartData.length > 0);
} }
const _c2 = function (a0, a1) { return { "d-none": a0, "d-block": a1 }; };
class AppComponent {
    constructor(fb, cartservice, toastr, authService, dashboard) {
        this.fb = fb;
        this.cartservice = cartservice;
        this.toastr = toastr;
        this.authService = authService;
        this.dashboard = dashboard;
        this.title = 'restaurant';
        this.sideNav = false;
        this.preventScroll = false;
        for (let i = 0; i < this.cartservice.cartData.length; i++) {
            this.cartservice.totalAmount += this.cartservice.cartData[i].quantity;
        }
        if (authService.isLogin()) {
            this.authService.prepearUserData();
        }
        this.dashboard.getCategoriesNames().subscribe((res) => {
            this.dashboard.categoriesNames = res.categoriesNames;
        }, err => alert(err.error.message));
    }
    ngOnInit() {
    }
    yourCartISEmpty() {
        if (this.cartservice.totalAmount == 0) {
            this.toastr.success('Your Cart Is Empty', '', {
                timeOut: 2000,
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 14, consts: [[1, "container"], [1, "upper-nav", "d-flex", "justify-content-between", "align-items-center", "py-2"], [1, "list-unstyled", "d-flex", "align-items-center"], ["routerLink", "/home"], ["src", "assets/pizzahutLogo-en.png", "alt", "", 1, "hesdImg", 2, "width", "70px"], ["class", "d-flex align-items-center", "mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf", "ngIfElse"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/dashboard/add", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/profile"], [1, "mr-2", "far", "fa-user-circle"], ["mat-menu-item", "", "routerLink", "/profile/orders", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "mr-2", "fas", "fa-sign-out-alt"], ["notUser", ""], [1, "font-weight-bold", "d-none", "d-md-block"], [1, "fas", "fa-phone-alt"], ["class", "bg-dark", 4, "ngIf"], [1, "over", 3, "click"], ["mat-button", "", 1, "d-flex", "align-items-center", 3, "matMenuTriggerFor"], [1, "redOnHover"], [1, "ml-2", "fas", "fa-sort-down", 2, "margin-top", "-7px"], ["mat-menu-item", "", "routerLink", "/dashboard/add"], [1, "fas", "fa-database", "mr-2"], ["mat-menu-item", "", "routerLink", "/profile/orders"], [1, "mr-2", "fas", "fa-pizza-slice"], ["routerLinkActive", "authActive", "routerLink", "auth/login", 1, "d-none", "d-md-block", 3, "routerLinkActiveOptions"], [1, "fas", "fa-arrow-alt-circle-right", "mr-1"], ["routerLinkActive", "authActive", "routerLink", "auth/register", 3, "routerLinkActiveOptions"], [1, "far", "mr-1", "fa-user-circle"], [1, "bg-dark"], [1, "lower-nav", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-bars", "d-md-none", "text-white", 3, "click"], [1, "list-unstyled", "sideNav", "d-md-flex", "sideNav"], [1, "red", "mb-3", "py-3", "d-md-none"], ["src", "assets/logo.PNG", "alt", "", 1, "mb-2", "mr-2"], [4, "ngIf"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "routerLink", "click", 4, "ngFor", "ngForOf"], ["src", "assets/pizzahutLogo-en.png", "width", "50", "alt", "", 1, "d-md-none"], ["routerLink", "products/cart", 1, "font-weight-bold", "text-white", 2, "cursor", "pointer", 3, "click"], ["class", "mr-2 fas fa-lock", 4, "ngIf"], ["class", "bg-danger p-1 px-2 mr-2 rounded", 4, "ngIf"], [1, "d-none", "d-md-inline"], [1, "my-3"], ["routerLink", "auth/login", 3, "click"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "routerLink", "click"], [1, "mr-2", "fas", "fa-lock"], [1, "bg-danger", "p-1", "px-2", "mr-2", "rounded"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_li_7_Template, 5, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_button_10_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_button_14_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { return ctx.authService.signout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_ng_template_18_Template, 8, 4, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " call us - 19999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_23_Template, 16, 7, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_24_listener() { ctx.sideNav = !ctx.sideNav; return ctx.preventScroll = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("preventScroll", ctx.preventScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-bottom", ctx.dashboard.showNavBar ? " 2px solid transparent" : " 2px solid black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userProfile)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.profile == null ? null : ctx.authService.userProfile.profile.role) == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.profile == null ? null : ctx.authService.userProfile.profile.role) == "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dashboard.showNavBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c2, !ctx.sideNav, ctx.sideNav));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: bold;\n  outline: none;\n  transition: 0.5s;\n}\nnav[_ngcontent-%COMP%]   .upper-nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nnav[_ngcontent-%COMP%]   .upper-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 30px;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .upper-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\nnav[_ngcontent-%COMP%]   .upper-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: red;\n}\nnav[_ngcontent-%COMP%]   .lower-nav[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nnav[_ngcontent-%COMP%]   .lower-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  padding: 20px;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .lower-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f93c3c;\n}\nnav[_ngcontent-%COMP%]   .movSideNAv[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\nnav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #f93c3c;\n}\nnav[_ngcontent-%COMP%]   .authActive[_ngcontent-%COMP%] {\n  color: red;\n}\n.over[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 1111;\n}\n@media (max-width: 768px) {\n  .hesdImg[_ngcontent-%COMP%] {\n    width: 50px !important;\n  }\n\n  .sideNav[_ngcontent-%COMP%] {\n    background: white;\n    position: absolute;\n    top: 0;\n    left: -90%;\n    transition: 0.5s;\n    z-index: 11111;\n    width: 90%;\n    height: 100%;\n  }\n  .sideNav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 7px !important;\n  }\n\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    color: gray !important;\n    text-transform: capitalize !important;\n  }\n\n  .lower-nav[_ngcontent-%COMP%] {\n    padding: 7px;\n  }\n\n  .red[_ngcontent-%COMP%] {\n    background-color: #f93c3c;\n    padding: 10px;\n  }\n  .red[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: transparent;\n    border: 1px solid white;\n    color: white;\n    border-radius: 6px;\n    padding: 5px 75px;\n    font-weight: bold;\n  }\n  .red[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 15px;\n    text-transform: lowercase !important;\n  }\n}\n.preventScroll[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100vh;\n}\n.redOnHover[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksU0FBQTtBQURSO0FBR0k7RUFBTSxpQkFBQTtFQUFrQixhQUFBO0VBQWMsZ0JBQUE7QUFFMUM7QUFBUTtFQUNJLGVBQUE7QUFFWjtBQUFRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFWjtBQURZO0VBQUssZ0JBQUE7QUFJakI7QUFGZ0I7RUFBSyxVQUFBO0FBS3JCO0FBRUc7RUFDQyx5QkFBQTtBQUFKO0FBRU87RUFJSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBSFg7QUFIVztFQUNJLHlCQUFBO0FBS2Y7QUFJQTtFQUNBLGtCQUFBO0FBRkE7QUFJQTtFQUFTLHlCQUFBO0FBRFQ7QUFFQTtFQUFZLFVBQUE7QUFDWjtBQUNBO0VBQ0ksa0JBQUE7RUFDSixNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBRUE7QUFDQTtFQUNJO0lBQVMsc0JBQUE7RUFHWDs7RUFGRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBS047RUFKTTtJQUNJLHVCQUFBO0VBTVY7O0VBQU07SUFBSSxzQkFBQTtJQUNGLHFDQUFBO0VBSVI7O0VBREk7SUFDSSxZQUFBO0VBSVI7O0VBRkk7SUFDSSx5QkFBQTtJQUNBLGFBQUE7RUFLUjtFQUpRO0lBQ0UsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFNVjtFQUpNO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxvQ0FBQTtFQU1WO0FBQ0Y7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUlKO0FBRkE7RUFBa0IsVUFBQTtBQU1sQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmF2IHtcclxuICAgIHVsLHAge1xyXG4gICAgICAgIG1hcmdpbjowXHJcbiAgICB9XHJcbiAgICBsaXsgICBmb250LXdlaWdodDogYm9sZDtvdXRsaW5lOiBub25lO3RyYW5zaXRpb246IC41czt9XHJcbiAgICAudXBwZXItbmF2e1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDozMHB4OyBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBzcGFue3RyYW5zaXRpb246IC41czt9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgc3Bhbntjb2xvcjpyZWR9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIC5sb3dlci1uYXYgIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBcclxuICAgICAgIGxpIHtcclxuICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5M2MzYzs7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgfVxyXG4ubW92U2lkZU5BdntcclxubGVmdDowICAhaW1wb3J0YW50XHJcbn1cclxuLmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogI2Y5M2MzYzt9XHJcbi5hdXRoQWN0aXZle2NvbG9yOiByZWQ7fVxyXG59XHJcbi5vdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOjA7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xyXG56LWluZGV4OiAxMTExO1xyXG59XHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaGVzZEltZ3t3aWR0aDogNTBweCAhaW1wb3J0YW50O31cclxuICAgIC5zaWRlTmF2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogLTkwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgei1pbmRleDogMTExMTE7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIG5hdiB7XHJcbiAgICAgICAgbGkge2NvbG9yOmdyYXkgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sb3dlci1uYXYge1xyXG4gICAgICAgICAgcGFkZGluZzo3cHhcclxuICAgICAgfVxyXG4gICAgICAucmVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTNjM2M7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDc1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbn1cclxuLnByZXZlbnRTY3JvbGx7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5yZWRPbkhvdmVyOmhvdmVye2NvbG9yOnJlZH1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authService.prepearUserData();
    }
    canActivate(route, state) {
        var _a, _b;
        if (this.authService.isLogin() && ((_b = (_a = this.authService.userProfile) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0 ? void 0 : _b.role) == 'admin')
            return true;
        this.router.navigate(['/home']);
        return false;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth-layout/auth-layout.component */ "/Nym");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "hkG8");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"]] }); })();


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.service */ "0AbP");






class CartService {
    constructor(http, router, toastr, dashboard) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.dashboard = dashboard;
        this.totalPrice = 0;
        this.totalAmount = 0;
        this.alreadyExist = false;
        this.sameTopping = false;
        this.sameToppingCounter = 0;
        this.sameAdditionCounter = 0;
        this.sizesCounter = 0;
        if (localStorage.getItem("cart") == null)
            this.cartData = [];
        else
            this.cartData = JSON.parse(localStorage.getItem("cart"));
    }
    addToCart(cartItem) {
        this.alreadyExist = false;
        this.sameTopping = false;
        this.sameToppingCounter = 0;
        this.sameAdditionCounter = 0;
        if (localStorage.getItem("cart") == null)
            this.cartData = [];
        else
            this.cartData = JSON.parse(localStorage.getItem("cart"));
        if (this.cartData.length == 0) {
            this.cartData.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(this.cartData));
        }
        else {
            outer: for (let i = 0; i < this.cartData.length; i++) {
                this.sameAdditionCounter = 0;
                this.sameToppingCounter = 0;
                this.sameTopping = false;
                if (this.cartData[i].product == cartItem.product && this.cartData[i].size == cartItem.size && cartItem.category !== 'pizza') {
                    this.alreadyExist = true;
                    this.cartData[i].quantity += cartItem.quantity;
                    localStorage.setItem("cart", JSON.stringify(this.cartData));
                    break;
                }
                if (this.cartData[i].product == cartItem.product && this.cartData[i].size == cartItem.size && cartItem.category == 'pizza') {
                    for (let chosenTopping = 0; chosenTopping < cartItem.toppings.length; chosenTopping++) {
                        if (cartItem.toppings[chosenTopping].topping == this.cartData[i].toppings[chosenTopping].topping && cartItem.toppings[chosenTopping].quantity == this.cartData[i].toppings[chosenTopping].quantity) {
                            this.sameToppingCounter += 1;
                            if (this.sameToppingCounter == cartItem.toppings.length) {
                                this.sameTopping = true;
                            }
                        }
                        else {
                            this.sameTopping = false;
                            break;
                        }
                    }
                    if (this.sameTopping) {
                        for (let chosenAdditionInedx = 0; chosenAdditionInedx < cartItem.specialAdditions.length; chosenAdditionInedx++) {
                            if (cartItem.specialAdditions[chosenAdditionInedx].addition == this.cartData[i].specialAdditions[chosenAdditionInedx].addition && cartItem.specialAdditions[chosenAdditionInedx].quantity == this.cartData[i].specialAdditions[chosenAdditionInedx].quantity) {
                                this.sameAdditionCounter += 1;
                                if (this.sameAdditionCounter == cartItem.specialAdditions.length) {
                                    this.cartData[i].quantity += cartItem.quantity;
                                    localStorage.setItem("cart", JSON.stringify(this.cartData));
                                    this.sameTopping = true;
                                    break outer;
                                }
                            }
                            else {
                                this.sameTopping = false;
                                break;
                            }
                        }
                    }
                }
            }
            if (cartItem.category == "pizza") {
                if (!this.sameTopping) {
                    this.cartData.push(cartItem);
                    localStorage.setItem("cart", JSON.stringify(this.cartData));
                }
            }
            if (cartItem.category != "pizza") {
                if (!this.alreadyExist) {
                    this.cartData.push(cartItem);
                    localStorage.setItem("cart", JSON.stringify(this.cartData));
                }
            }
        }
    }
    getCartData() {
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.sizesCounter = 0;
        this.breakouter = false;
        outer: if (this.cartData.length) {
            for (let i = 0; i < this.cartData.length; i++) {
                if (this.breakouter)
                    break;
                this.totalAmount += this.cartData[i].quantity;
                this.cartData[i].toppingsPrice = 0;
                this.cartData[i].additionPrice = 0;
                this.sizesCounter = 0;
                this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/api/products/product/${this.cartData[i].product}`).subscribe(res => {
                    this.cartData[i].chosenProduct = res;
                    if (this.cartData[i].chosenProduct.sizes.length) {
                        for (let ii = 0; ii < this.cartData[i].chosenProduct.sizes.length; ii++) {
                            if (this.cartData[i].size == this.cartData[i].chosenProduct.sizes[ii].size) {
                                this.cartData[i].chosenSize = this.cartData[i].chosenProduct.sizes[ii];
                                break;
                            }
                            else {
                                this.sizesCounter++;
                                if (this.sizesCounter == this.cartData[i].chosenProduct.sizes.length) {
                                    this.breakouter = true;
                                    this.cartData = [];
                                    localStorage.setItem("cart", JSON.stringify(this.cartData));
                                    if (this.dashboard.categoriesNames.length) {
                                        this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`]);
                                    }
                                    else {
                                        this.router.navigate([`../products/empty`]);
                                    }
                                    this.toastr.success('there is an update occurred', '', {
                                        timeOut: 2000,
                                    });
                                    break;
                                }
                            }
                        }
                    }
                    if (this.cartData.length) {
                        this.getToppingAndAdditionPrice(i);
                    }
                    if (this.cartData.length) {
                        this.getTotalPrice(i);
                    }
                }, err => {
                    this.cartData = [];
                    localStorage.setItem("cart", JSON.stringify(this.cartData));
                    this.breakouter = true;
                    this.getCartData();
                    if (this.dashboard.categoriesNames.length) {
                        this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`]);
                    }
                    else {
                        this.router.navigate([`../products/empty`]);
                    }
                    this.toastr.success('there is an update occurred', '', {
                        timeOut: 2000,
                    });
                    return this.cartData;
                });
            }
        }
        return this.cartData;
    }
    updateAmount(quantity, i) {
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.cartData[i].quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(this.cartData));
        for (let i = 0; i < this.cartData.length; i++) {
            this.cartData[i].toppingsPrice = 0;
            this.cartData[i].additionPrice = 0;
            this.getToppingAndAdditionPrice(i);
            this.totalAmount += this.cartData[i].quantity;
            this.getTotalPrice(i);
        }
    }
    deleteItem(i) {
        this.totalAmount = 0;
        this.totalPrice = 0;
        for (let i = 0; i < this.cartData.length; i++) {
            this.cartData[i].toppingsPrice = 0;
            this.cartData[i].additionPrice = 0;
        }
        this.cartData.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(this.cartData));
        if (this.cartData.length == 0) {
            if (this.dashboard.categoriesNames.length) {
                this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`]);
            }
            else {
                this.router.navigate([`../products/empty`]);
            }
        }
        for (let i = 0; i < this.cartData.length; i++) {
            this.getToppingAndAdditionPrice(i);
            this.totalAmount += this.cartData[i].quantity;
            this.getTotalPrice(i);
        }
    }
    getToppingAndAdditionPrice(i) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let toopingAndAdditionUpdated = false;
        let counter = 0;
        if (((_a = this.cartData[i]) === null || _a === void 0 ? void 0 : _a.chosenProduct.toppings.length) && ((_b = this.cartData[i]) === null || _b === void 0 ? void 0 : _b.toppings.length)) {
            toppingsOuter: for (let topping of this.cartData[i].toppings) {
                counter = 0;
                for (let storedTopping of (_c = this.cartData[i]) === null || _c === void 0 ? void 0 : _c.chosenProduct.toppings) {
                    if (topping.topping == storedTopping.topping) {
                        toopingAndAdditionUpdated = false;
                        break;
                    }
                    else {
                        counter++;
                        if (counter == ((_d = this.cartData[i]) === null || _d === void 0 ? void 0 : _d.chosenProduct.toppings.length)) {
                            toopingAndAdditionUpdated = true;
                            break toppingsOuter;
                        }
                    }
                }
            }
        }
        if (((_e = this.cartData[i]) === null || _e === void 0 ? void 0 : _e.chosenProduct.specialsAdditions.length) && this.cartData[i].specialAdditions && !toopingAndAdditionUpdated) {
            counter = 0;
            additionOuter: for (let addition of this.cartData[i].specialAdditions) {
                counter = 0;
                for (let storedAddition of (_f = this.cartData[i]) === null || _f === void 0 ? void 0 : _f.chosenProduct.specialsAdditions) {
                    if (addition.addition == storedAddition.addition) {
                        toopingAndAdditionUpdated = false;
                        break;
                    }
                    else {
                        counter++;
                        if (counter == ((_g = this.cartData[i]) === null || _g === void 0 ? void 0 : _g.chosenProduct.specialsAdditions.length)) {
                            toopingAndAdditionUpdated = true;
                            break additionOuter;
                        }
                    }
                }
            }
        }
        if (!toopingAndAdditionUpdated) {
            if (((_h = this.cartData[i]) === null || _h === void 0 ? void 0 : _h.chosenProduct.toppings.length) && ((_j = this.cartData[i]) === null || _j === void 0 ? void 0 : _j.toppings.length)) {
                for (let tpngIndex = 0; tpngIndex < this.cartData[i].toppings.length; tpngIndex++) {
                    if (this.cartData[i].toppings[tpngIndex].quantity == "plus") {
                        this.cartData[i].toppingsPrice += this.cartData[i].chosenProduct.toppings[tpngIndex].sizes[0].price;
                    }
                }
            }
            if (((_k = this.cartData[i]) === null || _k === void 0 ? void 0 : _k.chosenProduct.specialsAdditions.length) && this.cartData[i].specialAdditions) {
                for (let adtionIndex = 0; adtionIndex < this.cartData[i].specialAdditions.length; adtionIndex++) {
                    if (this.cartData[i].specialAdditions[adtionIndex].quantity == "plus") {
                        this.cartData[i].additionPrice += this.cartData[i].chosenProduct.specialsAdditions[adtionIndex].sizes[1].price;
                    }
                    else if (this.cartData[i].specialAdditions[adtionIndex].quantity == "with") {
                        this.cartData[i].additionPrice += this.cartData[i].chosenProduct.specialsAdditions[adtionIndex].sizes[0].price;
                    }
                }
            }
        }
        else {
            this.breakouter = true;
            this.cartData = [];
            localStorage.setItem("cart", JSON.stringify(this.cartData));
            if (this.dashboard.categoriesNames.length) {
                this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`]);
            }
            else {
                this.router.navigate([`../products/empty`]);
            }
            this.toastr.success('there is an update occurred', '', {
                timeOut: 2000,
            });
        }
    }
    getTotalPrice(i) {
        if (this.cartData[i].chosenProduct.sizes.length) {
            this.totalPrice += (this.cartData[i].toppingsPrice * this.cartData[i].quantity) + (this.cartData[i].additionPrice * this.cartData[i].quantity) + (this.cartData[i].chosenSize.price * this.cartData[i].quantity);
        }
        else {
            this.totalPrice += this.cartData[i].chosenProduct.price * this.cartData[i].quantity;
        }
    }
    checkout(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/api/orders/add`, body);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class AdminComponent {
    constructor(dashboard, router) {
        this.dashboard = dashboard;
        this.router = router;
        this.dashboard.showNavBar = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() { this.dashboard.showNavBar = true; }
    navigate() {
        this.dashboard.getCategoriesNames().subscribe((res) => {
            this.dashboard.categoriesNames = res.categoriesNames;
            this.router.navigate([`/home`]);
        }, err => alert(err.error.message));
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 13, vars: 4, consts: [[1, "authLayout", "container"], [1, "btn", "btn-primary", "mt-4", 3, "click"], [1, "fas", "fa-home"], [1, "d-md-flex", "justify-content-center", "py-5"], ["routerLinkActive", "active", "routerLink", "../dashboard/add", 1, "mr-4", "mb-3", "font-weight-bold", "text-secondary"], ["routerLink", "../dashboard/modify", "routerLinkActive", "active", 1, "mr-4", "mb-3", "font-weight-bold", "text-secondary", 3, "routerLinkActiveOptions"], ["routerLink", "../dashboard/orders", "routerLinkActive", "active", 1, "font-weight-bold", "mb-3", "text-secondary", 3, "routerLinkActiveOptions"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_2_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ADD PRODUCT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MODIFY PRODUCT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "GET ORDERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  outline: none;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: black !important;\n  border-bottom: 3px solid #dd1133;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0FBRUoiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDIyMSwgMTcsIDUxKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "hkG8":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");


class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const tokenReq = request.clone({
            setHeaders: {
                Authorization: `${this.authService.getToken()}`
            }
        });
        return next.handle(tokenReq);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthService {
    constructor(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
    }
    signUp(userInfo) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/api/signup`, userInfo);
    }
    signIn(userInfo) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/api/signin`, userInfo);
    }
    signout() {
        this.userProfile = "";
        this.router.navigate(["auth/login"]);
        localStorage.removeItem("token");
    }
    getToken() {
        return localStorage.getItem("token");
    }
    isLogin() {
        return !!localStorage.getItem("token");
    }
    getUserProfile() {
        return this.httpclient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/api/users/user`);
    }
    prepearUserData() {
        if (this.isLogin()) {
            this.getUserProfile().subscribe(res => {
                this.userProfile = res;
            }, err => {
                localStorage.removeItem('token');
                alert(err.error.message);
            });
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-layout/auth-layout.component */ "/Nym");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/admin.guard */ "Tk1w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: 'full'
    },
    {
        path: "products",
        loadChildren: () => Promise.all(/*! import() | src-app-view-categories-categories-module */[__webpack_require__.e("default~src-app-view-admin-admin-module~src-app-view-categories-categories-module"), __webpack_require__.e("src-app-view-categories-categories-module")]).then(__webpack_require__.bind(null, /*! src/app/view/categories/categories.module */ "YYhF")).then(m => m.CategoriesModule)
    },
    {
        path: "profile",
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-view-profile-profile-module */ "src-app-view-profile-profile-module").then(__webpack_require__.bind(null, /*! src/app/view/profile/profile.module */ "kXCW")).then(m => m.ProfileModule)
    },
    {
        path: "auth",
        component: _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-view-auth-auth-module */ "src-app-view-auth-auth-module").then(__webpack_require__.bind(null, /*! src/app/view/auth/auth.module */ "3y/0")).then(m => m.AuthModule)
            }
        ]
    },
    {
        path: "dashboard",
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]],
        children: [
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() | src-app-view-admin-admin-module */[__webpack_require__.e("default~src-app-view-admin-admin-module~src-app-view-categories-categories-module"), __webpack_require__.e("src-app-view-admin-admin-module")]).then(__webpack_require__.bind(null, /*! src/app/view/admin/admin.module */ "CG4r")).then(m => m.AdminModule)
            }
        ]
    },
    { path: "**", component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map