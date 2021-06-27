(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-admin-admin-module"],{

/***/ "CG4r":
/*!********************************************!*\
  !*** ./src/app/view/admin/admin.module.ts ***!
  \********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ "vDsC");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product/add-product.component */ "LbXp");
/* harmony import */ var _get_orders_get_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-orders/get-orders.component */ "fOaw");
/* harmony import */ var _modify_products_modify_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modify-products/modify-products.component */ "iPWK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"],
        _get_orders_get_orders_component__WEBPACK_IMPORTED_MODULE_3__["GetOrdersComponent"],
        _modify_products_modify_products_component__WEBPACK_IMPORTED_MODULE_4__["ModifyProductsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]] }); })();


/***/ }),

/***/ "LbXp":
/*!*****************************************************************!*\
  !*** ./src/app/view/admin/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function AddProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_22_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.updateImageError);
} }
function AddProductComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); ctx_r16.openModal(_r2); return ctx_r16.inputFilePlaceholder = "choose product image"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " update image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddProductComponent_div_22_p_3_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.updateImageError);
} }
function AddProductComponent_ng_template_23_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "choose new image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function AddProductComponent_ng_template_23_Template_input_blur_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onBlurInputFile($event, _r18); })("change", function AddProductComponent_ng_template_23_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r22.updatedImageOnChange($event); return ctx_r22.imageFile($event, _r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_ng_template_23_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.updateImage(ctx_r23.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_ng_template_23_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddProductComponent_ng_template_23_div_12_Template, 6, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.inputFilePlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.updateImageLoading);
} }
function AddProductComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " image name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 1, ctx_r4.fileName, 23), " ");
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function AddProductComponent_div_38_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_38_ng_container_3_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const i_r27 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.deleteSizes(i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r25.selected == "starters" ? "pieces count" : "size name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, (ctx_r25.getSizesForValidation(i_r27, "size").errors == null ? null : ctx_r25.getSizesForValidation(i_r27, "size").errors.required) && ctx_r25.getSizesForValidation(i_r27, "size").touched, ctx_r25.getSizesForValidation(i_r27, "size").errors == null && ctx_r25.getSizesForValidation(i_r27, "size").dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, ctx_r25.getSizesForValidation(i_r27, "price").errors !== null && ctx_r25.getSizesForValidation(i_r27, "price").touched, ctx_r25.getSizesForValidation(i_r27, "price").errors == null && ctx_r25.getSizesForValidation(i_r27, "price").dirty));
} }
function AddProductComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddProductComponent_div_38_ng_container_3_Template, 10, 10, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_38_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.addSizes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("ADD ", ctx_r6.selected, " ", ctx_r6.selected == "starters" ? "pieces" : "sizes", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.getSizes().controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" add ", ctx_r6.selected == "starters" ? "pieces " : "size ", "");
} }
function AddProductComponent_div_39_ng_container_3_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ii_r38 = ctx.index;
    const i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", ii_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r36.getToppingSizesForValidation(i_r34).errors !== null && ctx_r36.getToppingSizesForValidation(i_r34).touched, ctx_r36.getToppingSizesForValidation(i_r34).errors == null && ctx_r36.getToppingSizesForValidation(i_r34).dirty));
} }
function AddProductComponent_div_39_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddProductComponent_div_39_ng_container_3_div_5_ng_container_1_Template, 4, 5, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r35.getToppingsSizes(i_r34).controls);
} }
function AddProductComponent_div_39_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_39_ng_container_3_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const i_r34 = ctx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.deleteToppings(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddProductComponent_div_39_ng_container_3_div_5_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r34 = ctx.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, (ctx_r32.getToppingsForVAlidation(i_r34, "topping").errors == null ? null : ctx_r32.getToppingsForVAlidation(i_r34, "topping").errors.required) && ctx_r32.getToppingsForVAlidation(i_r34, "topping").touched, ctx_r32.getToppingsForVAlidation(i_r34, "topping").errors == null && ctx_r32.getToppingsForVAlidation(i_r34, "topping").dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.getToppingsSizes(i_r34).controls.length);
} }
function AddProductComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add topping");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddProductComponent_div_39_ng_container_3_Template, 6, 6, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_39_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.addToppings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "add topping");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.getToppings().controls);
} }
function AddProductComponent_div_40_ng_container_3_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function AddProductComponent_div_40_ng_container_3_div_5_ng_container_1_Template_input_blur_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r52.validationForSpecialAdditionPrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ii_r51 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", ii_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", true);
} }
function AddProductComponent_div_40_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddProductComponent_div_40_ng_container_3_div_5_ng_container_1_Template, 6, 2, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r48.getSpecialAdditionsSizes(i_r47).controls);
} }
function AddProductComponent_div_40_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_40_ng_container_3_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const i_r47 = ctx.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r55.deleteSpecialAdditions(i_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddProductComponent_div_40_ng_container_3_div_5_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r47 = ctx.index;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, (ctx_r45.getSpecialAdditionForVAlidation(i_r47, "addition").errors == null ? null : ctx_r45.getSpecialAdditionForVAlidation(i_r47, "addition").errors.required) && ctx_r45.getSpecialAdditionForVAlidation(i_r47, "addition").touched, ctx_r45.getSpecialAdditionForVAlidation(i_r47, "addition").errors == null && ctx_r45.getSpecialAdditionForVAlidation(i_r47, "addition").dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r45.getSpecialAdditionsSizes(i_r47).controls.length);
} }
function AddProductComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add Special Addition (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddProductComponent_div_40_ng_container_3_Template, 6, 6, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_40_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.addSpecialAdditions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "add special addition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.getSpecialAdditions().controls);
} }
function AddProductComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.addSpecialAdditions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "add special addition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "FINISH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r11.addProductForm.invalid);
} }
function AddProductComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_ng_template_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.updatProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "update product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r13.addProductForm.invalid);
} }
function AddProductComponent_p_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.addOrUpdateProductError);
} }
class AddProductComponent {
    constructor(fb, toastr, dashboard, renderer, router, activatedRoute, modalService) {
        this.fb = fb;
        this.toastr = toastr;
        this.dashboard = dashboard;
        this.renderer = renderer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.imagefile = null;
        this.index = -1;
        this.toppingIndex = -1;
        this.inputFilePlaceholder = "choose product image";
        this.updatedimage = null;
        this.fileName = "";
        this.isUpdate = false;
        this.updateImageLoading = false;
        this.addOrUpdateProductError = "";
        this.updateImageError = "";
        this.dataLoading = true;
        this.addOrUpdateLoading = false;
        // create the form
        this.addProductForm = this.createAddProductForm("init");
        let imageControl = this.addProductForm.controls.image;
        // update product
        this.paramSub = this.activatedRoute.queryParamMap.subscribe((id) => {
            if (id.params.id) {
                this.selected = id.params.name;
                this.productId = id.params.id;
                this.isUpdate = true;
                this.productByIdSub = this.dashboard.getProductById(id.params.id).subscribe((res) => {
                    this.dataLoading = false;
                    this.updateData = {
                        name: res.name,
                        descripition: res.descripition,
                        sizes: res.sizes,
                        specialsAdditions: res.specialsAdditions,
                        toppings: res.toppings,
                        price: res.price
                    };
                    this.fileName = res.image;
                    imageControl.clearValidators();
                    imageControl.updateValueAndValidity();
                    if (this.selected == "pasta" || this.selected == "desert" || this.selected == "salads") {
                        this.addProductForm.controls.price.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
                        this.addProductForm.controls.price.setValidators(this.priceValidation);
                        this.addProductForm.controls.price.updateValueAndValidity();
                    }
                    for (let i = 0; i < res.sizes.length; i++)
                        this.addSizes();
                    for (let i = 0; i < res.specialsAdditions.length; i++)
                        this.addSpecialAdditions();
                    for (let i = 0; i < res.toppings.length; i++)
                        this.addToppings();
                    this.addProductForm.patchValue(this.updateData);
                }, err => {
                    this.dataLoading = false;
                    this.router.navigate(["notFound"]);
                });
            }
            else {
                this.dataLoading = false;
                this.isUpdate = false;
                this.addProductForm.reset();
                this.selected = "pizza";
                this.buildFormBasedOnSelectedCategory();
            }
        });
    }
    onfocus(fileParent) { this.renderer.setStyle(fileParent, "border", "1px solid #17a2b8"); }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    onSelectedChange(e, fileParent) {
        this.isUpdate = false;
        this.addProductForm.reset();
        this.inputFilePlaceholder = "choose product image";
        this.renderer.setStyle(fileParent, "border", "1px solid #ced4da");
        this.selected = e;
        this.buildFormBasedOnSelectedCategory();
    }
    buildFormBasedOnSelectedCategory() {
        let priceControl = this.addProductForm.controls.price;
        this.addProductForm.controls.image.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.addProductForm.controls.image.updateValueAndValidity();
        if (this.selected == 'pizza') {
            priceControl.clearValidators();
            priceControl.updateValueAndValidity();
            this.addToppings();
            this.addSpecialAdditions();
            this.getSizes().clear();
            this.addSizes();
        }
        else if (this.selected == 'starters' || this.selected == 'drinks') {
            priceControl.clearValidators();
            priceControl.updateValueAndValidity();
            this.getSizes().clear();
            this.addSizes();
            this.getToppings().clear();
            this.getSpecialAdditions().clear();
            this.index = -1;
            this.toppingIndex = -1;
        }
        else if (this.selected == 'pasta' || this.selected == 'desert' || this.selected == 'salads') {
            priceControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
            priceControl.setValidators(this.priceValidation);
            priceControl.updateValueAndValidity();
            this.getSizes().clear();
            this.getToppings().clear();
            this.getSpecialAdditions().clear();
            this.index = -1;
            this.toppingIndex = -1;
        }
    }
    ngOnInit() { }
    //// start makeing and delete inputs for size of starters desert and drinks and pizza
    getSizes() {
        return this.addProductForm.get("sizes");
    }
    addSizes() {
        this.getSizes().push(this.createAddProductForm("sizes"));
    }
    deleteSizes(index) {
        if (this.getSizes().length > 1)
            this.getSizes().removeAt(index);
        else
            this.toastr.warning('atleast one size', '', {
                timeOut: 2000,
            });
    }
    //// end makeing and delete inputs for size of starters desert and drinks and pizza
    //// start makeing and delete inputs for toppings of pizza
    getToppings() {
        return this.addProductForm.get("toppings");
    }
    addToppings() {
        this.toppingIndex++;
        this.getToppings().push(this.createAddProductForm("toppings"));
        this.addToppingsSizes(this.toppingIndex);
    }
    deleteToppings(index) {
        if (this.getToppings().length > 1) {
            this.getToppings().removeAt(index);
            this.toppingIndex--;
        }
        else
            this.toastr.warning('atleast one topping', '', {
                timeOut: 2000,
            });
    }
    getToppingsSizes(i) {
        return this.getToppings().at(i).get('sizes');
    }
    addToppingsSizes(i) {
        this.getToppingsSizes(i).push(this.createAddProductForm("toppingsSizes"));
    }
    //// end makeing and delete inputs for toppings of pizza
    //// start makeing and delete inputs for specialِAddition of pizza
    getSpecialAdditions() {
        return this.addProductForm.get("specialsAdditions");
    }
    addSpecialAdditions() {
        this.index++;
        this.getSpecialAdditions().push(this.createAddProductForm("specialsAdditions"));
        this.addSpecialAdditionsSizes(this.index);
        this.getSpecialAdditionsSizes(this.index).controls[0].get("size").setValue(" price:");
        this.addSpecialAdditionsSizes(this.index);
        this.getSpecialAdditionsSizes(this.index).controls[1].get("size").setValue("extra price:");
    }
    deleteSpecialAdditions(index) {
        this.index--;
        this.getSpecialAdditions().removeAt(index);
    }
    getSpecialAdditionsSizes(i) {
        return this.getSpecialAdditions().at(i).get('sizes');
    }
    addSpecialAdditionsSizes(i) {
        this.getSpecialAdditionsSizes(i).push(this.createAddProductForm("specialAdditionsSizes"));
    }
    //// end makeing and delete inputs for specialِAddition of pizza
    ///// start get inputs to add  valid or invalid clases
    getSpecialAdditionForVAlidation(i, controlName) {
        return this.getSpecialAdditions().controls[i].get(controlName);
    }
    getToppingsForVAlidation(i, controlName) {
        return this.getToppings().controls[i].get(controlName);
    }
    getToppingSizesForValidation(i) {
        return this.getToppings().controls[i].get('sizes').controls[0].get('price');
    }
    getSizesForValidation(i, controlName) {
        return this.getSizes().controls[i].get(controlName);
    }
    validationForSpecialAdditionPrice(e) {
        if (e.target.value.length == 0 || e.target.value <= 0) {
            this.renderer.addClass(e.target, "is-invalid");
        }
        else {
            this.renderer.removeClass(e.target, "is-invalid");
        }
    }
    validationForSpecialAdditionPriceKeyup(e) {
        if (e.target.value.length > 0 && e.target.value > 0) {
            this.renderer.removeClass(e.target, "is-invalid");
            this.renderer.addClass(e.target, "is-valid");
        }
        else {
            this.renderer.removeClass(e.target, "is-valid");
        }
    }
    get getName() {
        return this.addProductForm.get("name");
    }
    get getImage() {
        return this.addProductForm.get("image");
    }
    get getPrice() {
        return this.addProductForm.get("price");
    }
    ///// end get inputs to add  valid or invalid clases
    //////////// start build dynamic form for add product   ////////////
    createAddProductForm(itemType) {
        let formItem = this.fb.group({});
        switch (itemType) {
            case "init":
                formItem = this.fb.group({
                    image: "",
                    name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    descripition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    sizes: this.fb.array([]),
                    toppings: this.fb.array([]),
                    specialsAdditions: this.fb.array([]),
                    price: ""
                });
                break;
            case 'sizes':
                formItem = this.fb.group({
                    size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.priceValidation]]
                });
                break;
            case 'toppings':
                formItem = this.fb.group({
                    topping: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    sizes: this.fb.array([])
                });
                break;
            case 'specialsAdditions':
                formItem = this.fb.group({
                    addition: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    sizes: this.fb.array([])
                });
                break;
            case 'specialAdditionsSizes':
                formItem = this.fb.group({
                    size: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.priceValidation]],
                });
                break;
            case 'toppingsSizes':
                formItem = this.fb.group({
                    price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.priceValidation]],
                    size: ['extra', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
                });
        }
        return formItem;
    }
    //////////// end build dynamic form for add product   ////////////
    onBlurInputFile(e, fileParent) {
        if (!e.target.files[0])
            this.renderer.setStyle(fileParent, "border", "1px solid red");
    }
    imageFile(e, fileParent) {
        if (e.target.files[0]) {
            this.inputFilePlaceholder = e.target.files[0].name;
            this.renderer.setStyle(fileParent, "border", "1px solid green");
        }
        else {
            this.inputFilePlaceholder = "choose product image";
            this.renderer.setStyle(fileParent, "border", "1px solid red");
        }
        this.imagefile = e.target.files[0];
    }
    // start add product function 
    submit() {
        this.addOrUpdateLoading = true;
        let formValues = this.addProductForm.value;
        let formData = new FormData();
        formData.append("image", this.imagefile);
        formData.append("category", this.selected);
        formData.append("name", formValues.name);
        formData.append("descripition", formValues.descripition);
        if (this.selected == 'starters' || this.selected == 'drinks' || this.selected == 'pizza') {
            formData.append("sizes", JSON.stringify(formValues.sizes));
        }
        else if (this.selected == 'pasta' || this.selected == 'desert' || this.selected == 'salads') {
            formData.append("price", `${formValues.price}`);
        }
        if (this.selected == 'pizza') {
            formData.append("toppings", JSON.stringify(formValues.toppings));
            formData.append("specialsAdditions", JSON.stringify(formValues.specialsAdditions));
        }
        this.addProductSub = this.dashboard.addProduct(formData).subscribe(res => {
            this.addOrUpdateLoading = false;
            this.addOrUpdateProductError = "";
            this.getCatSub = this.dashboard.getCategoriesNames().subscribe((res) => {
                this.dashboard.categoriesNames = res.categoriesNames;
            }, err => this.router.navigate(["notfound"]));
            this.toastr.success('product added succesfuly', '', {
                timeOut: 3000,
            });
            this.router.navigate(['dashboard/modify']);
        }, err => {
            this.addOrUpdateLoading = false;
            this.addOrUpdateProductError = err.error.message || err.error.error;
        });
    }
    // end add product function
    updatProduct() {
        this.addOrUpdateLoading = true;
        let values = this.addProductForm.value;
        this.updateProductSub = this.dashboard.updateProduct(this.productId, values.name, values.descripition, values.price, values.sizes, values.toppings, values.specialsAdditions).subscribe(res => {
            this.addOrUpdateLoading = false;
            this.addOrUpdateProductError = "";
            this.toastr.success('product updated succesfuly', '', {
                timeOut: 3000,
            });
            this.router.navigate(['dashboard/modify']);
        }, err => {
            this.addOrUpdateLoading = false;
            this.addOrUpdateProductError = err.error.message;
        });
    }
    updatedImageOnChange(e) {
        this.updatedimage = e.target.files[0];
    }
    updateImage(id) {
        this.updateImageLoading = true;
        if (this.updatedimage) {
            let updatedImageForm = new FormData();
            updatedImageForm.append("image", this.updatedimage);
            updatedImageForm.append("id", id);
            this.updateImageSub = this.dashboard.updateImage(updatedImageForm).subscribe(res => {
                this.updateImageLoading = false;
                this.updateImageError = "";
                this.toastr.success('image updated succesfuly', '', {
                    timeOut: 2000,
                });
                this.modalRef.hide();
                this.router.navigate(['dashboard/modify']);
            }, err => {
                this.updateImageLoading = false;
                this.updateImageError = err.error.message;
                this.modalRef.hide();
            });
        }
        else {
            this.updateImageLoading = false;
            alert("no file chosen");
        }
    }
    priceValidation(control) {
        if (control.value <= 0)
            return { negativeValue: true };
        return null;
    }
    ngOnDestroy() {
        if (this.paramSub)
            this.paramSub.unsubscribe();
        if (this.productByIdSub)
            this.productByIdSub.unsubscribe();
        if (this.addProductSub)
            this.addProductSub.unsubscribe();
        if (this.getCatSub)
            this.getCatSub.unsubscribe();
        if (this.updateProductSub)
            this.updateProductSub.unsubscribe();
        if (this.updateImageSub)
            this.updateImageSub.unsubscribe();
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 51, vars: 35, consts: [["class", "d-flex justify-content-center align-items-center loadinggg", 4, "ngIf"], [1, "container", "pb-5"], ["appearance", "fill", 1, "scroll", "w-100"], [1, "scroll", 3, "value", "valueChange", "selectionChange"], ["value", "pizza"], ["value", "pasta"], ["value", "desert"], ["value", "salads"], ["value", "starters"], ["value", "drinks"], [1, "parent", "m-auto"], [4, "ngIf"], ["template", ""], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "product name", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "pt-2", "style", "overflow: hidden;", 4, "ngIf"], [1, "form-group", 3, "hidden"], [1, "customFile", "overflow-hidden"], ["fileParent", ""], ["type", "file", "formControlName", "image", 1, "form-control", 3, "ngClass", "focus", "blur", "change"], ["class", "brdr mb-3", "formArrayName", "sizes", 4, "ngIf"], ["class", "brdr mb-3", "formArrayName", "toppings", 4, "ngIf"], ["class", "brdr mb-3", "formArrayName", "specialsAdditions", 4, "ngIf"], ["type", "button", "class", "my-3 btn btn-success", 3, "click", 4, "ngIf"], ["type", "number", "formControlName", "price", "placeholder", "product price", 1, "form-control", 3, "ngClass"], ["name", "", "id", "", "placeholder", "descripition", "formControlName", "descripition", "cols", "30", "rows", "5", 1, "form-control", 3, "ngClass"], ["class", "text-center", 4, "ngIf"], ["type", "submit", "class", "w-100 btn btn-primary", 3, "disabled", 4, "ngIf", "ngIfElse"], ["updateProduct", ""], ["class", "my-3 alert alert-danger", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "loadinggg"], [1, "lds-ellipsis"], [1, "btn", "btn-primary", "w-100", "my-3", 3, "click"], [1, "my-3", "alert", "alert-danger"], [1, "modal-body", "text-center"], [1, "modal-title", "pull-left", "m-0"], [1, "customFile", "my-3", "overflow-hidden"], ["parent", ""], ["type", "file", 1, "form-control", 3, "blur", "change"], [1, "btn", "btn-success", "mr-3", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "text-center"], [1, "pt-2", 2, "overflow", "hidden"], [1, "font-weight-bold"], ["formArrayName", "sizes", 1, "brdr", "mb-3"], [2, "text-transform", "uppercase"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "my-2", "p-3", 3, "formGroupName"], [1, "row", "position-relative", 2, "border-bottom", "1px solid #d6d5d5"], [1, "fas", "fa-times", "ss", 3, "click"], ["formControlName", "size", "type", "text", 1, "form-control", 3, "ngClass", "placeholder"], ["type", "number", "formControlName", "price", "placeholder", "Price", 1, "form-control", 3, "ngClass"], ["formArrayName", "toppings", 1, "brdr", "mb-3"], ["type", "button", 1, "mt-3", "btn", "btn-success", 3, "click"], [1, "my-4", "px-3", "position-relative", 2, "border-bottom", "1px solid #d6d5d5", "padding-top", "20px", "padding-bottom", "20px", 3, "formGroupName"], [1, "fas", "fa-times", "s", 3, "click"], ["formControlName", "topping", "type", "text", "placeholder", "topping name", 1, "form-control", 3, "ngClass"], ["formArrayName", "sizes", 4, "ngIf"], ["formArrayName", "sizes"], [1, "d-flex", "align-items-center", 3, "formGroupName"], [1, "form-group", "w-100"], ["type", "number", "formControlName", "price", "placeholder", "extra price", 1, "form-control", 3, "ngClass"], ["formArrayName", "specialsAdditions", 1, "brdr", "mb-3"], ["formControlName", "addition", "type", "text", "placeholder", "addition name", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "size", 2, "border", "none", "width", "80px", "font-weight", "bold", "background-color", "white"], ["type", "number", "formControlName", "price", 1, "form-control", 3, "blur"], ["type", "button", 1, "my-3", "btn", "btn-success", 3, "click"], ["type", "submit", 1, "w-100", "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "w-100", 3, "disabled", "click"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddProductComponent_div_0_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AddProductComponent_Template_mat_select_valueChange_5_listener($event) { return ctx.selected = $event; })("selectionChange", function AddProductComponent_Template_mat_select_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return ctx.onSelectedChange($event.value, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "pizza");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "pasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "desert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "salads");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "starters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddProductComponent_div_22_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddProductComponent_ng_template_23_Template, 13, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_25_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddProductComponent_p_31_Template, 5, 4, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function AddProductComponent_Template_input_focus_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return ctx.onfocus(_r5); })("blur", function AddProductComponent_Template_input_blur_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return ctx.onBlurInputFile($event, _r5); })("change", function AddProductComponent_Template_input_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return ctx.imageFile($event, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddProductComponent_div_38_Template, 7, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AddProductComponent_div_39_Template, 6, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddProductComponent_div_40_Template, 6, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddProductComponent_button_41_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AddProductComponent_div_46_Template, 6, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddProductComponent_button_47_Template, 2, 1, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AddProductComponent_ng_template_48_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AddProductComponent_p_50_Template, 2, 1, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 21, ctx.selected), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addProductForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c0, (ctx.getName.errors == null ? null : ctx.getName.errors.required) && ctx.getName.touched, ctx.getName.errors == null && ctx.getName.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.inputFilePlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c0, (ctx.getImage.errors == null ? null : ctx.getImage.errors.required) && ctx.getImage.touched, ctx.getImage.errors == null && ctx.getImage.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getSizes().controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getToppings().controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getSpecialAdditions().controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selected == "pizza" && ctx.getSpecialAdditions().controls.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.selected == "pizza" || ctx.selected == "drinks" || ctx.selected == "starters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](29, _c0, ctx.getPrice.errors !== null && ctx.getPrice.touched, ctx.getPrice.errors == null && ctx.getPrice.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c0, (ctx.addProductForm.controls.descripition.errors == null ? null : ctx.addProductForm.controls.descripition.errors.required) && ctx.addProductForm.controls.descripition.touched, ctx.addProductForm.controls.descripition.errors == null && ctx.addProductForm.controls.descripition.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addOrUpdateLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUpdate)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addOrUpdateProductError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".customFile[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  border: 1px solid #ced4da;\n  border-radius: 5px;\n}\n.customFile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: gray;\n  font-size: 16px;\n}\n.customFile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 2;\n}\n.brdr[_ngcontent-%COMP%] {\n  border: 1px solid #dad7d7;\n  border-radius: 6px;\n  padding: 19px;\n}\n.fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -3px;\n}\n.fa-times.ss[_ngcontent-%COMP%] {\n  top: -28px;\n}\n.fa-times.s[_ngcontent-%COMP%] {\n  top: 0;\n}\n@media (min-width: 768px) {\n  .parent[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQUVSO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFHSjtBQUFBO0VBQWdCLFVBQUE7QUFJaEI7QUFIQTtFQUFlLE1BQUE7QUFPZjtBQU5BO0VBRUk7SUFBUSxVQUFBO0VBU1Y7QUFDRiIsImZpbGUiOiJhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21GaWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxufVxyXG4uYnJkciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkN2Q3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTlweDtcclxufVxyXG4uZmEtdGltZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0zcHg7XHJcbiBcclxufVxyXG4uZmEtdGltZXMuc3N7ICAgdG9wOiAtMjhweDt9XHJcbi5mYS10aW1lcy5zeyAgIHRvcDogMH1cclxuQG1lZGlhICAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5wYXJlbnR7d2lkdGg6IDcwJTt9XHJcbiAgIH0iXX0= */"] });


/***/ }),

/***/ "MOE4":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OrdersService {
    constructor(http) {
        this.http = http;
    }
    getOrders() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/api/orders`);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fOaw":
/*!***************************************************************!*\
  !*** ./src/app/view/admin/get-orders/get-orders.component.ts ***!
  \***************************************************************/
/*! exports provided: GetOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrdersComponent", function() { return GetOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/orders.service */ "MOE4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");




function GetOrdersComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " order time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GetOrdersComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.orderTime, " ");
} }
function GetOrdersComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GetOrdersComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.status, " ");
} }
function GetOrdersComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GetOrdersComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.price, " ");
} }
function GetOrdersComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " recieve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GetOrdersComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.recieve, " ");
} }
function GetOrdersComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function GetOrdersComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
class GetOrdersComponent {
    constructor(ordersService, activatedRoute) {
        var _a;
        this.ordersService = ordersService;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = ['orderTime', 'status', 'price', 'recieve'];
        if (this.activatedRoute.snapshot.data.orders && this.activatedRoute.snapshot.data.orders.hasOwnProperty('recieveOrders')) {
            this.orders = (_a = this.activatedRoute.snapshot.data.orders.recieveOrders) === null || _a === void 0 ? void 0 : _a.pickUpOrders;
            this.dataSource = this.orders;
        }
    }
    ngOnInit() {
    }
}
GetOrdersComponent.ɵfac = function GetOrdersComponent_Factory(t) { return new (t || GetOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
GetOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetOrdersComponent, selectors: [["app-get-orders"]], decls: 16, vars: 3, consts: [[1, "container", "pb-5"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "orderTime"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "price"], ["matColumnDef", "recieve"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function GetOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetOrdersComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GetOrdersComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GetOrdersComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GetOrdersComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GetOrdersComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GetOrdersComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GetOrdersComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GetOrdersComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GetOrdersComponent_tr_14_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GetOrdersComponent_tr_15_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2V0LW9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLFdBQUE7QUFFTiIsImZpbGUiOiJnZXQtb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7d2lkdGg6IDEwMCU7fSJdfQ== */"] });


/***/ }),

/***/ "iPWK":
/*!*************************************************************************!*\
  !*** ./src/app/view/admin/modify-products/modify-products.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModifyProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyProductsComponent", function() { return ModifyProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/search.pipe */ "ZPLk");
/* harmony import */ var _shared_text_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/text.pipe */ "N7fZ");













function ModifyProductsComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "there are no categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModifyProductsComponent_ng_container_2_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r6.name);
} }
function ModifyProductsComponent_ng_container_2_ng_template_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModifyProductsComponent_ng_container_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Are you sure you want to remove this category ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_ng_template_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DISMISS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_ng_template_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r10.deleteCategory(ctx_r10.selectedCategory._id); return ctx_r10.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CONFIRM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModifyProductsComponent_ng_container_2_ng_template_9_div_8_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading);
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_ng_container_14_span_10_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.seeMoreIndex = ctx_r19.seeMoreIndex == i_r12 ? -1 : i_r12; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.seeMoreIndex == i_r12 ? "less" : "more....");
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "product size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "size price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const size_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", size_r24.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, size_r24.price), "");
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "accordion", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "accordion-group", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_14_ng_container_2_Template, 11, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r11.sizes);
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_15_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "topping name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "topping price : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r29 = ctx.$implicit;
    const topping_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topping_r27.topping, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, size_r29.price), "");
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_15_ng_container_2_div_1_Template, 10, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const topping_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", topping_r27.sizes);
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "accordion", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "accordion-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_15_ng_container_2_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r11.toppings);
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_16_ng_container_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", size_r35.size, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, size_r35.price));
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "addition name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_16_ng_container_2_div_6_Template, 6, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const specialsAddition_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", specialsAddition_r33.addition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", specialsAddition_r33.sizes);
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_accordion_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "accordion", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "accordion-group", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_16_ng_container_2_Template, 8, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r11.specialsAdditions);
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_ng_template_17_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Are you sure you want to remove this product ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_ng_container_14_ng_template_17_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DISMISS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_ng_container_14_ng_template_17_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r40.deleteProduct(product_r11._id, ctx_r40.selectedCategory.products.length, ctx_r40.selectedCategory._id, ctx_r40.selectedCategory.name); return ctx_r40.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CONFIRM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModifyProductsComponent_ng_container_2_ng_container_14_ng_template_17_div_8_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.loading);
} }
function ModifyProductsComponent_ng_container_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModifyProductsComponent_ng_container_2_ng_container_14_span_10_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_14_Template, 3, 2, "accordion", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_15_Template, 3, 2, "accordion", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ModifyProductsComponent_ng_container_2_ng_container_14_accordion_16_Template, 3, 2, "accordion", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModifyProductsComponent_ng_container_2_ng_container_14_ng_template_17_Template, 9, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_ng_container_14_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const product_r11 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.updateProduct(product_r11._id, product_r11.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_ng_container_14_Template_i_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.openModal(_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 8, product_r11.descripition, ctx_r5.seeMoreIndex, i_r12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r11.descripition.length > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, product_r11.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r11.sizes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r11.toppings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r11.specialsAdditions.length);
} }
function ModifyProductsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ModifyProductsComponent_ng_container_2_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.selectCategory($event.value); })("valueChange", function ModifyProductsComponent_ng_container_2_Template_mat_select_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModifyProductsComponent_ng_container_2_mat_option_3_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModifyProductsComponent_ng_container_2_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModifyProductsComponent_ng_container_2_ng_template_9_Template, 9, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModifyProductsComponent_ng_container_2_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModifyProductsComponent_ng_container_2_ng_container_14_Template, 22, 14, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r1.selectedCategory.name), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 7, ctx_r1.selectedCategory.products, ctx_r1.searchValue));
} }
class ModifyProductsComponent {
    constructor(dashboard, toastr, router, modalService, activatedroute) {
        this.dashboard = dashboard;
        this.toastr = toastr;
        this.router = router;
        this.modalService = modalService;
        this.activatedroute = activatedroute;
        this.seeMoreIndex = -1;
        this.searchValue = "";
        this.loading = false;
        if (this.activatedroute.snapshot.data.categories.hasOwnProperty("categories")) {
            this.categories = this.activatedroute.snapshot.data.categories.categories;
            if (this.categories.length) {
                this.selected = this.categories[0].name;
                this.selectedCategory = this.categories[0];
            }
        }
        else {
            this.categories = [];
        }
    }
    selectCategory(e) {
        if (this.categories.length) {
            for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].name == e) {
                    this.selectedCategory = this.categories[i];
                }
            }
        }
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
    }
    deleteProduct(productId, length, categoryId, categoryName) {
        this.loading = true;
        this.deleteProductSub = this.dashboard.deleteProduct(productId).subscribe((res) => {
            this.loading = false;
            this.getNamesP = this.dashboard.getCategories().subscribe((res) => {
                this.categories = res.categories;
                this.selectCategory(categoryName);
                if (length == 1) {
                    this.deleteCategory(categoryId);
                }
                this.toastr.success('product deleted succesfuly', '', {
                    timeOut: 3000,
                });
            }, (err) => alert(err.error.message));
        }, (err) => {
            this.loading = false;
            alert(err.error.message);
        });
    }
    updateProduct(id, name) {
        this.router.navigate(["../dashboard/add"], { queryParams: { id, name } });
    }
    deleteCategory(id) {
        this.loading = true;
        this.deletCatSub = this.dashboard.deleteCategory(id).subscribe((res) => {
            this.loading = false;
            this.getNameC = this.dashboard.getCategories().subscribe((res) => {
                if (res.hasOwnProperty("categories")) {
                    this.categories = res.categories;
                    this.selectedCategory = this.categories[0];
                    this.selected = this.categories[0].name;
                }
                else {
                    this.categories = [];
                    this.dashboard.categoriesNames = [];
                }
                this.toastr.success('category deleted succesfuly', '', {
                    timeOut: 3000,
                });
            }, (err) => alert(err.error.message));
        }, (err) => {
            this.loading = false;
            alert(err.error.message);
        });
    }
    ngOnDestroy() {
        if (this.deleteProductSub)
            this.deleteProductSub.unsubscribe();
        if (this.getNamesP)
            this.getNamesP.unsubscribe();
        if (this.deletCatSub)
            this.deletCatSub.unsubscribe();
        if (this.getNameC)
            this.getNameC.unsubscribe();
    }
}
ModifyProductsComponent.ɵfac = function ModifyProductsComponent_Factory(t) { return new (t || ModifyProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ModifyProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModifyProductsComponent, selectors: [["app-modify-products"]], decls: 3, vars: 2, consts: [[1, "container"], [4, "ngIf"], ["appearance", "fill", 1, "scroll", "w-100", "my-4"], [1, "scroll", 3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-5"], [1, "mr-3", "mb-0", "categoryName", 2, "font-size", "50px"], [1, "fas", "fa-trash-alt", "m-0", 2, "font-size", "20px", 3, "click"], ["deletecategory", ""], [1, "my-4"], ["type", "text", "placeholder", "search.....", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [4, "ngFor", "ngForOf"], [3, "value"], [1, "modal-body", "text-center"], [1, "text-secondary"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-secondary", "mr-3", 3, "click"], [1, "btn", "btn-success", 3, "click"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], [1, "lds-ellipsis"], [1, "col-md-4", "mb-5"], ["alt", "", 1, "img-fluid", "mb-4", 2, "height", "170px", 3, "src"], [1, "font-weight-bold", "my-2"], ["style", "cursor:pointer", "class", "text-danger", 3, "click", 4, "ngIf"], ["class", "my-3", 3, "isAnimated", 4, "ngIf"], ["template", ""], [1, "btn", "btn-primary", "mr-3", 3, "click"], [1, "fas", "fa-trash-alt", 2, "font-size", "20px", 3, "click"], [1, "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "my-3", 3, "isAnimated"], ["heading", "Sizes"], [1, "font-weight-bold"], ["heading", "Toppings"], ["class", "my-4", 4, "ngFor", "ngForOf"], ["heading", "special Additions"], ["class", "d-flex ", 4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "font-weight-bold", "mr-2"]], template: function ModifyProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModifyProductsComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModifyProductsComponent_ng_container_2_Template, 16, 10, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionComponent"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionPanelComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"], _shared_text_pipe__WEBPACK_IMPORTED_MODULE_12__["TextPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["@media (max-width: 768px) {\n  .categoryName[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kaWZ5LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUk7SUFBZSwwQkFBQTtFQUFqQjtBQUNGIiwiZmlsZSI6Im1vZGlmeS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgLmNhdGVnb3J5TmFtZSB7Zm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7fVxyXG4gICAgfSJdfQ== */"] });


/***/ }),

/***/ "o+I9":
/*!**********************************************!*\
  !*** ./src/app/Resolvers/orders.resolver.ts ***!
  \**********************************************/
/*! exports provided: OrdersResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersResolver", function() { return OrdersResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/orders.service */ "MOE4");


class OrdersResolver {
    constructor(orders) {
        this.orders = orders;
    }
    resolve(route, state) {
        return this.orders.getOrders();
    }
}
OrdersResolver.ɵfac = function OrdersResolver_Factory(t) { return new (t || OrdersResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"])); };
OrdersResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersResolver, factory: OrdersResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vDsC":
/*!****************************************************!*\
  !*** ./src/app/view/admin/admin-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/admin.guard */ "Tk1w");
/* harmony import */ var src_app_Resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Resolvers/categories.resolver */ "+acd");
/* harmony import */ var src_app_Resolvers_orders_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Resolvers/orders.resolver */ "o+I9");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-product/add-product.component */ "LbXp");
/* harmony import */ var _get_orders_get_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-orders/get-orders.component */ "fOaw");
/* harmony import */ var _modify_products_modify_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-products/modify-products.component */ "iPWK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: "",
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"],
        canActivate: [src_app_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]],
    },
    {
        path: "add",
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"],
        canActivate: [src_app_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]],
    },
    {
        path: "orders",
        component: _get_orders_get_orders_component__WEBPACK_IMPORTED_MODULE_5__["GetOrdersComponent"],
        canActivate: [src_app_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]],
        resolve: { orders: src_app_Resolvers_orders_resolver__WEBPACK_IMPORTED_MODULE_3__["OrdersResolver"] }
    },
    {
        path: "modify",
        component: _modify_products_modify_products_component__WEBPACK_IMPORTED_MODULE_6__["ModifyProductsComponent"],
        resolve: { categories: src_app_Resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_2__["CategoriesResolver"] },
        canActivate: [src_app_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]]
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-view-admin-admin-module.js.map