(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-view-admin-admin-module~src-app-view-categories-categories-module"],{

/***/ "+Cnu":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
  \*********************************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */


const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
const expandAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }))
];
/** @type {?} */
const collapseAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _builder
     */
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when collapsing is started
         */
        this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when expansion is started
         */
        this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.isExpanded;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        }));
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        }));
    }
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => callback());
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => this._player.onDone(callback));
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"])); };
CollapseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CollapseDirective, selectors: [["", "collapse", ""]], hostVars: 10, hostBindings: function CollapseDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
    } }, inputs: { isAnimated: "isAnimated", display: "display", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, exportAs: ["bs-collapse"] });
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }
];
CollapseDirective.propDecorators = {
    collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    collapses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expands: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.in',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-expanded',] }],
    isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-hidden',] }],
    isCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapse',] }],
    isCollapsing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapsing',] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    collapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                host: {
                    '[class.collapse]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }]; }, { collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], collapses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], expands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.in']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.show']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-expanded']
        }], isCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-hidden']
        }], isCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapse']
        }], isCollapsing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapsing']
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], collapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.ɵfac = function CollapseModule_Factory(t) { return new (t || CollapseModule)(); };
CollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CollapseModule });
CollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CollapseModule, { declarations: [CollapseDirective], exports: [CollapseDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-collapse.js.map

/***/ }),

/***/ "+acd":
/*!**************************************************!*\
  !*** ./src/app/Resolvers/categories.resolver.ts ***!
  \**************************************************/
/*! exports provided: CategoriesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesResolver", function() { return CategoriesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");


class CategoriesResolver {
    constructor(dashboard) {
        this.dashboard = dashboard;
    }
    resolve(route, state) {
        return this.dashboard.getCategories();
    }
}
CategoriesResolver.ɵfac = function CategoriesResolver_Factory(t) { return new (t || CategoriesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"])); };
CategoriesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesResolver, factory: CategoriesResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "N7fZ":
/*!*************************************!*\
  !*** ./src/app/shared/text.pipe.ts ***!
  \*************************************/
/*! exports provided: TextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPipe", function() { return TextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextPipe {
    transform(text, seeMoreIndex, index) {
        let output;
        if (seeMoreIndex == index) {
            output = text.slice(0);
            return output;
        }
        else {
            output = text.slice(0, 20);
            return output;
        }
    }
}
TextPipe.ɵfac = function TextPipe_Factory(t) { return new (t || TextPipe)(); };
TextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "text", type: TextPipe, pure: true });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.pipe */ "N7fZ");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.pipe */ "ZPLk");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const accordion = [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot()];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot()
        ], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_text_pipe__WEBPACK_IMPORTED_MODULE_1__["TextPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]], exports: [_text_pipe__WEBPACK_IMPORTED_MODULE_1__["TextPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]] }); })();


/***/ }),

/***/ "S8xs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js ***!
  \***********************************************************************************************/
/*! exports provided: AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return AccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return AccordionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "lUod");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service, provides default values for the AccordionComponent.
 */




const _c0 = ["*"];
const _c1 = function (a0) { return { "text-muted": a0 }; };
function AccordionPanelComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r0.isDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.heading, " ");
} }
const _c2 = [[["", "accordion-heading", ""]], "*"];
const _c3 = ["[accordion-heading]", "*"];
class AccordionConfig {
    constructor() {
        /**
         * Whether the other panels should be closed when a panel is opened
         */
        this.closeOthers = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
    }
}
AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
/** @nocollapse */ AccordionConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AccordionConfig_Factory() { return new AccordionConfig(); }, token: AccordionConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
class AccordionComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this.groups = [];
        Object.assign(this, config);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    removeGroup(group) {
        /** @type {?} */
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AccordionConfig)); };
AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionComponent, selectors: [["accordion"]], hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"], hostVars: 1, hostBindings: function AccordionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", ctx.closeOthers);
    } }, inputs: { isAnimated: "isAnimated", closeOthers: "closeOthers" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/** @nocollapse */
AccordionComponent.ctorParameters = () => [
    { type: AccordionConfig }
];
AccordionComponent.propDecorators = {
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeOthers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'accordion',
                template: `<ng-content></ng-content>`,
                host: {
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist',
                    class: 'panel-group',
                    style: 'display: block'
                }
            }]
    }], function () { return [{ type: AccordionConfig }]; }, { isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOthers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
class AccordionPanelComponent {
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /**
     * Is accordion group open or closed. This property supports two-way binding
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null).then((/**
             * @return {?}
             */
            () => {
                this.isOpenChange.emit(value);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                /* tslint:disable: no-console */
                console.log(error);
            }));
        }
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AccordionComponent)); };
AccordionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostAttrs: [1, "panel", 2, "display", "block"], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("panel-open", ctx.isOpen);
    } }, inputs: { isOpen: "isOpen", panelClass: "panelClass", heading: "heading", isDisabled: "isDisabled" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c3, decls: 9, vars: 6, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionPanelComponent_Template_div_click_1_listener() { return ctx.toggleOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.panelClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseDirective"]], styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"] });
/** @nocollapse */
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [AccordionComponent,] }] }
];
AccordionPanelComponent.propDecorators = {
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.panel-open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'panel',
                    style: 'display: block'
                },
                styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]
            }]
    }], function () { return [{ type: AccordionComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [AccordionComponent]
            }] }]; }, { isOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.panel-open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: AccordionModule, providers: [] };
    }
}
AccordionModule.ɵfac = function AccordionModule_Factory(t) { return new (t || AccordionModule)(); };
AccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccordionModule });
AccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccordionModule, { declarations: function () { return [AccordionComponent, AccordionPanelComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]]; }, exports: function () { return [AccordionComponent, AccordionPanelComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-accordion.js.map

/***/ }),

/***/ "ZPLk":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchPipe {
    transform(products, inputValue) {
        if (!inputValue)
            return products;
        return products.filter(item => {
            if (item.name) {
                return item.name.toLowerCase().includes(inputValue.toLowerCase());
            }
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=default~src-app-view-admin-admin-module~src-app-view-categories-categories-module.js.map