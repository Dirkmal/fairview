"use strict";
(self["webpackChunkfairview"] = self["webpackChunkfairview"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_funeral_funeral_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/funeral/funeral.component */ 9932);
/* harmony import */ var _pages_pathology_pathology_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pathology/pathology.component */ 9591);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ 5996);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);
/* harmony import */ var _pages_services_gallery_services_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/services-gallery/services-gallery.component */ 2882);
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/faq/faq.component */ 6459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'funeral', component: _pages_funeral_funeral_component__WEBPACK_IMPORTED_MODULE_1__.FuneralComponent },
    { path: 'pathology', component: _pages_pathology_pathology_component__WEBPACK_IMPORTED_MODULE_2__.PathologyComponent },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent },
    { path: 'gallery', component: _pages_services_gallery_services_gallery_component__WEBPACK_IMPORTED_MODULE_5__.ServicesGalleryComponent },
    // { path: 'gallery2', component: Gallery2Component },
    { path: 'help', component: _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__.FaqComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav/nav.component */ 994);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




class AppComponent {
    constructor() {
        this.title = 'Fairview';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav.component */ 994);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _pages_funeral_funeral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/funeral/funeral.component */ 9932);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/banner/banner.component */ 3994);
/* harmony import */ var _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/flip-card/flip-card.component */ 1365);
/* harmony import */ var _pages_pathology_pathology_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pathology/pathology.component */ 9591);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ 5996);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 6183);
/* harmony import */ var _pages_services_gallery_services_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/services-gallery/services-gallery.component */ 2882);
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/faq/faq.component */ 6459);
/* harmony import */ var _pages_gallery2_gallery2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/gallery2/gallery2.component */ 612);
/* harmony import */ var _components_other_gallery_other_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/other-gallery/other-gallery.component */ 2929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__.NavComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _pages_funeral_funeral_component__WEBPACK_IMPORTED_MODULE_5__.FuneralComponent,
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__.BannerComponent,
        _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_7__.FlipCardComponent,
        _pages_pathology_pathology_component__WEBPACK_IMPORTED_MODULE_8__.PathologyComponent,
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent,
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__.AboutComponent,
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__.GalleryComponent,
        _pages_services_gallery_services_gallery_component__WEBPACK_IMPORTED_MODULE_12__.ServicesGalleryComponent,
        _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent,
        _pages_gallery2_gallery2_component__WEBPACK_IMPORTED_MODULE_14__.Gallery2Component,
        _components_other_gallery_other_gallery_component__WEBPACK_IMPORTED_MODULE_15__.OtherGalleryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule] }); })();


/***/ }),

/***/ 3994:
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function BannerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function BannerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class BannerComponent {
    constructor() {
        this.images = [];
        this.curr_slide = 0;
        this.background_img = '';
    }
    ngOnInit() {
        this.background_img = this.images[this.curr_slide];
        if (this.slider) {
            setInterval(() => {
                this.setImage(this.images.length);
            }, 3000);
        }
    }
    setImage(count) {
        if (this.curr_slide >= (count - 1)) {
            this.curr_slide = -1;
        }
        this.curr_slide++;
        this.background_img = this.images[this.curr_slide];
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], inputs: { images: "images", slider: "slider", height: "height", captionTemplate: "captionTemplate", ctaTemplate: "ctaTemplate" }, decls: 3, vars: 7, consts: [[1, "banner", 3, "ngStyle"], [4, "ngTemplateOutlet"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BannerComponent_ng_container_2_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + ctx.background_img + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.captionTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.ctaTemplate);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".banner[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 300px;\n  padding: 20px;\n  color: black;\n  position: relative;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRCIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMzAwcHg7XHRcblx0cGFkZGluZzogMjBweDtcblx0Y29sb3I6IGJsYWNrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG9wYWNpdHk6IDAuOTtcbn1cblxuLy8gbGFyZ2VyIHNjcmVlbnNcbi8vIC5iYW5uZXIge1x0XG4vLyBcdHBhZGRpbmc6IDMwcHggNDBweDtcbi8vIH0iXX0= */"] });


/***/ }),

/***/ 1365:
/*!*************************************************************!*\
  !*** ./src/app/components/flip-card/flip-card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlipCardComponent": () => (/* binding */ FlipCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function FlipCardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function FlipCardComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
class FlipCardComponent {
    constructor() {
        /**
         * Can only have either a background image or a background color on a card.
         * If a card has a background image, the opposite side has a background color.
         * In unlikely event of requiring a combination of both =>
         * add the style object as a third param to Object.assign
         */
        this.left_card_style = {};
        this.right_card_style = {};
        this.reverse = false; // to activate the CSS reverse class on mobile 
    }
    set left_bg(bg) {
        this.left_card_style = Object.assign({}, { 'background-image': 'url(' + bg + ')' });
    }
    set right_bg(bg) {
        this.right_card_style = Object.assign({}, { 'background-image': 'url(' + bg + ')' });
    }
    set left_bg_col(col) {
        this.left_card_style = Object.assign({}, { 'background-color': col });
    }
    set right_bg_col(col) {
        this.right_card_style = Object.assign({}, { 'background-color': col });
    }
    ngOnInit() {
    }
}
FlipCardComponent.ɵfac = function FlipCardComponent_Factory(t) { return new (t || FlipCardComponent)(); };
FlipCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardComponent, selectors: [["app-flip-card"]], inputs: { leftCard: "leftCard", rightCard: "rightCard", left_bg: "left_bg", right_bg: "right_bg", left_bg_col: "left_bg_col", right_bg_col: "right_bg_col", reverse: "reverse" }, decls: 5, vars: 6, consts: [[1, "row"], [1, "half", "col", "m6", "valign-wrapper", 3, "ngStyle"], [4, "ngTemplateOutlet"]], template: function FlipCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FlipCardComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlipCardComponent_ng_container_4_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reverse", ctx.reverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.left_card_style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.leftCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.right_card_style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.rightCard);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".half[_ngcontent-%COMP%] {\n\tmin-height: 350px;\n\twidth: 100%;\n\tbackground-color: #F5F2D6;\n\tbackground-position: center; \n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tposition: relative;\n\ttext-align: center;\n}\n\n.row[_ngcontent-%COMP%] {\n\tmargin-bottom: 0;\n}\n\n@media only screen and (min-width: 768px) {\n\t.half[_ngcontent-%COMP%] {\n\t\theight: 400px;\n\t\tpadding: 3em;\n\t}\n}\n\n@media only screen and (max-width: 600px) {\n\t\n\t.reverse[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\tflex-direction: column-reverse;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaXAtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7Q0FDYjtBQUNEOztBQUVBO0NBQ0MsNERBQTREO0NBQzVEO0VBQ0MsYUFBYTtFQUNiLDhCQUE4QjtDQUMvQjtBQUNEIiwiZmlsZSI6ImZsaXAtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYge1xuXHRtaW4taGVpZ2h0OiAzNTBweDtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGNUYyRDY7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm93IHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXHQuaGFsZiB7XG5cdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRwYWRkaW5nOiAzZW07XG5cdH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXHQvKiogVG8gc2hvdyBhIGNhcmQgaW4gcmV2ZXJzZSBvbiBtb2JpbGUsIHNlZSBGdW5lcmFsIHBhZ2UgKiovXG5cdC5yZXZlcnNlIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0fVxufSJdfQ== */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 36, vars: 0, consts: [[1, "page-footer"], [1, "info"], ["href", "tel:+2348038340495", 1, "accent_yellow_text"], ["href", "tel:+2349035933512", 1, "accent_yellow_text"], ["href", "mailto:contact@fairviewnigeria.com", 1, "accent_yellow_text"], ["href", "https://web.facebook.com/pages/category/Medical---Health/Fairview-Nigeria-371895583362174/", "title", "Facebook", "target", "_blank", 1, "social"], ["src", "../../../assets/images/fb.svg"], ["href", "https://instagram.com/fairview_nigeria", "title", "Instagram", "target", "_blank", 1, "social"], ["src", "../../../assets/images/ig.svg"], ["href", "https://wa.me/2348038340495?text=Hi%20I%20am%20", "title", "WhatsApp", "target", "_blank", 1, "social"], ["src", "../../../assets/images/wa.svg"], [1, "footer-copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div")(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " (234)-803-834-0495 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " (234)-903-593-3512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div")(11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " contact@fairviewnigeria.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Business hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sun - Sat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " (24 hours) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div")(22, "span")(23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span")(26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span")(29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 1, Ademola Adesida street, off Igbatoro road, Akure, Ondo State, Nigeria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A9 2020 Fairview Nigeria. All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".page-footer[_ngcontent-%COMP%] {\n  height: auto;\n  font-size: 0.8em;\n  padding-top: 20px;\n  color: #fff;\n  background-color: #5f375b;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 1em;\n}\n\n.info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  height: 2em;\n  width: 2em;\n  margin: 0.5em 1em;\n}\n\n.info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2em;\n  width: 2em;\n}\n\n@media only screen and (min-width: 768px) {\n  .page-footer[_ngcontent-%COMP%] {\n    padding: 20px 2em;\n  }\n\n  .info[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0csV0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0FBQ0Q7O0FBRUE7RUFDQztJQUNDLGlCQUFBO0VBQ0E7O0VBRUQ7SUFDQyxtQkFBQTtFQUNBO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtZm9vdGVyIHtcdFxuXHRoZWlnaHQ6IGF1dG87XG5cdGZvbnQtc2l6ZTogMC44ZW07XG5cdHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjM3NWI7XG59XG5cbi5pbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmluZm8+ZGl2IHtcblx0bWFyZ2luOiAwIDFlbTtcbn1cblxuLmluZm8+ZGl2PmRpdiB7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbmZvIC5zb2NpYWwge1xuXHRoZWlnaHQ6IDJlbTtcblx0d2lkdGg6IDJlbTtcblx0bWFyZ2luOiAuNWVtIDFlbTtcbn1cblxuLmluZm8gLnNvY2lhbCBpbWcge1xuXHRoZWlnaHQ6IDJlbTtcblx0d2lkdGg6IDJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXHQucGFnZS1mb290ZXIge1xuXHRcdHBhZGRpbmc6IDIwcHggMmVtO1xuXHR9XG5cdFxuXHQuaW5mbyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxufSJdfQ== */"] });


/***/ }),

/***/ 6183:
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function GalleryComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const cat_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.toggleVisible(cat_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r2);
} }
function GalleryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col s12 m6 l4 gallery_img filter ", item_r5.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.caption, " ");
} }
class GalleryComponent {
    constructor() {
        this.all = 'all';
        this.categories = [];
    }
    ngOnInit() {
        //get unique categories
        this.categories = this.items.map((item => item.category)).filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
    }
    toggleVisible(filter) {
        if (filter == 'all') {
            document.querySelectorAll(`.filter`).forEach(item => {
                item['hidden'] = false;
            });
        }
        else {
            document.querySelectorAll(`.filter`).forEach(item => {
                item['hidden'] = true;
            });
            document.querySelectorAll(`.${filter}`).forEach(item => {
                item['hidden'] = false;
            });
        }
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { items: "items" }, decls: 8, vars: 2, consts: [[1, ""], [1, "row"], [1, "col", "s12", "center"], [1, "btn", "filter-button", 3, "click"], ["class", "btn filter-button", 3, "click", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngFor", "ngForOf"], [3, "src"], [1, "overlay"], [1, "caption"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_3_listener() { return ctx.toggleVisible("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryComponent_button_5_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleryComponent_div_7_Template, 5, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".gallery_img[_ngcontent-%COMP%] {\n  padding-right: 1em;\n  padding-left: 1em;\n  margin-bottom: 1em;\n  width: 20em;\n  height: 280px;\n  position: relative;\n}\n\n.gallery_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100% !important;\n  width: 100% !important;\n  border: 3px solid #a36f9d;\n  border-radius: 1em;\n  display: block;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 20%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: rgba(0, 0, 0, 0.5882352941);\n  margin: 0 1em;\n  border-radius: 0 0 1em 1em;\n}\n\n.gallery_img[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.caption[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0 0.4em;\n}\n\n.btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #a36f9d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeV9pbWcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgd2lkdGg6IDIwZW07XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5nYWxsZXJ5X2ltZyBpbWcge1xuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNhMzZmOWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMjAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk2O1xuICAgIG1hcmdpbjogMCAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDFlbSAxZW07XG59XG5cbi5nYWxsZXJ5X2ltZzpob3ZlciAub3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmNhcHRpb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICAgIG1hcmdpbjogMCAwLjRlbTtcbn1cblxuLmJ0biAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTM2ZjlkO1xufSJdfQ== */"] });


/***/ }),

/***/ 994:
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _assets_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/links */ 9344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function NavComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", link_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r2.title, " ");
} }
function NavComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", link_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r3.title, " ");
} }
class NavComponent {
    constructor() {
        this.links = new _assets_links__WEBPACK_IMPORTED_MODULE_0__.Links;
    }
    ngOnInit() {
        this.nav_links = this.links.links;
    }
    ngAfterViewInit() {
        const sidenav = document.querySelectorAll('.sidenav');
        const instance = M.Sidenav.init(sidenav);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 17, vars: 2, consts: [[1, "navbar-fixed"], ["data-target", "slide-out", 1, "sidenav-trigger"], [1, "medium", "material-icons"], [1, "nav-wrapper"], ["href", "home", 1, "banner_img"], ["src", "../../../assets/images/logo/banner_transparent.png"], [1, "hide-on-med-and-down"], [4, "ngFor", "ngForOf"], ["id", "slide-out", 1, "sidenav", 2, "transform", "translateX(-105%)"], ["href", "home"], [3, "href"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav")(2, "a", 1)(3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "ul")(7, "li")(8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NavComponent_li_11_Template, 3, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 8)(13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavComponent_li_16_Template, 3, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nav_links);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nav_links);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["nav[_ngcontent-%COMP%] {\n\tbackground-color: white;\n\tpadding: 0 20px;\n\tbox-shadow: none;\n}\n\nnav[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: auto;\n\tmargin-right: auto;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\t\n\ttext-transform: capitalize;\n\tfont-size: 1.1rem;\n\tfont-family: 'PT Serif', Georgia, serif;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.banner_img):hover {\n\tbackground-color: rgba(95, 55, 91, 0.7);\n\tcolor: white!important;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.banner_img[_ngcontent-%COMP%]:hover {\n\tbackground-color: rgba(0,0,0,0);\n}\n\n.banner_img[_ngcontent-%COMP%] {\n\tpadding: 0;\n\tmargin: 0 15px;\n}\n\n.banner_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\theight: 45px;\n\tmargin-top: 5px;\n}\n\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tmargin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0NBQ3BCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQix1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyx1Q0FBdUM7Q0FDdkMsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0Ym94LXNoYWRvdzogbm9uZTtcbn1cblxubmF2IC5uYXYtd3JhcHBlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5uYXYgdWwge1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxudWwgYSB7XHRcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRmb250LWZhbWlseTogJ1BUIFNlcmlmJywgR2VvcmdpYSwgc2VyaWY7XG59XG5cbm5hdiB1bCBhOm5vdCguYmFubmVyX2ltZyk6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCA1NSwgOTEsIDAuNyk7XG5cdGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbm5hdiB1bCBhLmJhbm5lcl9pbWc6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuXG4uYmFubmVyX2ltZyB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMCAxNXB4O1xufVxuXG4uYmFubmVyX2ltZyBpbWcge1xuXHRoZWlnaHQ6IDQ1cHg7XG5cdG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnNpZGVuYXYgbGkge1xuXHRtYXJnaW46IDE1cHg7XG59Il19 */"] });


/***/ }),

/***/ 2929:
/*!*********************************************************************!*\
  !*** ./src/app/components/other-gallery/other-gallery.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherGalleryComponent": () => (/* binding */ OtherGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function OtherGalleryComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherGalleryComponent_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const cat_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.toggleVisible(cat_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r2);
} }
function OtherGalleryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col s12 m6 l4 gallery_img filter ", item_r5.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.caption, " ");
} }
class OtherGalleryComponent {
    constructor() {
        this.all = 'all';
        this.categories = [];
    }
    ngOnInit() {
        //get unique categories
        this.categories = this.items.map((item => item.category)).filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        console.log(this.categories);
    }
    toggleVisible(filter) {
        if (filter == 'all') {
            document.querySelectorAll(`.filter`).forEach(item => {
                item['hidden'] = false;
            });
        }
        else {
            document.querySelectorAll(`.filter`).forEach(item => {
                item['hidden'] = true;
                console.log(item);
            });
            document.querySelectorAll(`.${filter}`).forEach(item => {
                item['hidden'] = false;
            });
        }
    }
}
OtherGalleryComponent.ɵfac = function OtherGalleryComponent_Factory(t) { return new (t || OtherGalleryComponent)(); };
OtherGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherGalleryComponent, selectors: [["app-other-gallery"]], inputs: { items: "items" }, decls: 8, vars: 2, consts: [[1, ""], [1, "row"], [1, "col", "s12", "center"], [1, "btn", "filter-button", 3, "click"], ["class", "btn filter-button", 3, "click", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngFor", "ngForOf"], [3, "src"], [1, "overlay"], [1, "caption"]], template: function OtherGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherGalleryComponent_Template_button_click_3_listener() { return ctx.toggleVisible("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OtherGalleryComponent_button_5_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OtherGalleryComponent_div_7_Template, 5, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".gallery_img[_ngcontent-%COMP%] {\n  padding-right: 1em;\n  padding-left: 1em;\n  margin-bottom: 1em;\n  width: 20em;\n  height: 280px;\n  position: relative;\n}\n\n.gallery_img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.gallery_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100% !important;\n  width: 100% !important;\n  display: block;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 20%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: rgba(0, 0, 0, 0.5882352941);\n}\n\n.gallery_img[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.caption[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0 0.4em;\n}\n\n.btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #a36f9d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90aGVyLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLGdDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoib3RoZXItZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5X2ltZyB7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB3aWR0aDogMjBlbTtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdhbGxlcnlfaW1nOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nYWxsZXJ5X2ltZyBpbWcge1xuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMjAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk2O1xufVxuXG4uZ2FsbGVyeV9pbWc6aG92ZXIgLm92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5jYXB0aW9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgICBtYXJnaW46IDAgMC40ZW07XG59XG5cbi5idG4gLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzNmY5ZDtcbn0iXX0= */"] });


/***/ }),

/***/ 4986:
/*!********************************!*\
  !*** ./src/app/models/mail.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mail": () => (/* binding */ Mail)
/* harmony export */ });
class Mail {
}


/***/ }),

/***/ 3794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/banner/banner.component */ 3994);


function AboutComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Get To Know Us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " With over 30 years of experience in the medical field, we\u2019re not just experts in Histopathology, we also have a deep understanding of the intricacies of working with doctors, hospitals, and mortuaries to lay a loved one to rest. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
class AboutComponent {
    constructor() {
        this.banner_img = ['../../../assets/images/about/1.jpg'];
        this.profile = '../../../assets/images/about/2.jpg';
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 23, vars: 3, consts: [["bannerCaption", ""], [3, "images", "captionTemplate"], [1, "container"], [1, "row", "first"], [1, "col", "l6"], [1, "heading"], [1, "row", "second", "accent_yellow"], [1, "heading", "center"], [1, "circular", 3, "src"], [1, "caption"], [1, "body"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AboutComponent_ng_template_0_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "FUNERARY SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Our comprehensive funerary services include The Peaceful Rest private mortuary and Fairview Funeral Parlour where we cater to every aspect of the journey. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "PATHOLOGY SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Our fully-fledged Pathology department conducts histopathology examinations, tissue diagnosis, autopsies (post-mortems) and more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6)(16, "div", 4)(17, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "About Our Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Professor Olusegun Sylvester Ojo gained his Bachelor of Medicine and Surgery from the College of Medicine, University of Lagos in 1983. He is a published author and has been a professor of Pathology and a consultant Histopathologist at Obafemi Awolowo University, Ile-Ife, for the last 30 years. He specializes in the liver and alimentary tract disorders. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.banner_img)("captionTemplate", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent], styles: [".caption[_ngcontent-%COMP%] {\n\tcolor: white;\n}\n\n.caption[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n\tcolor: white!important;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n\tpadding: 0;\n}\n\n.first[_ngcontent-%COMP%] {\n\ttext-align: center;\t\n    padding-bottom: 0;\n    margin-bottom: 0;\n}\n\n.second[_ngcontent-%COMP%] {\n\tpadding: 1em;\n\tmargin: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n\n@media only screen and (min-width: 768px) {\n\t.caption[_ngcontent-%COMP%] {\n\t\twidth: 50%;\n\t}\n\n\t.first[_ngcontent-%COMP%] {\n\t\tpadding: 1em;\n\t}\n\n\t.second[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\t\tpadding: 2em;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsWUFBWTtDQUNiOztDQUVBO0VBQ0MsWUFBWTtDQUNiO0FBQ0QiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXB0aW9uIHtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uY2FwdGlvbiAuaGVhZGluZyB7XG5cdGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbi5yb3cgLmNvbCB7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5maXJzdCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcdFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zZWNvbmQge1xuXHRwYWRkaW5nOiAxZW07XG5cdG1hcmdpbjogMDtcbn1cblxuaW1nIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LmNhcHRpb24ge1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cblxuXHQuZmlyc3Qge1xuXHRcdHBhZGRpbmc6IDFlbTtcblx0fVxuXG5cdC5zZWNvbmQgcCB7XG5cdFx0cGFkZGluZzogMmVtO1xuXHR9XG59Il19 */"] });


/***/ }),

/***/ 5996:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _models_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/mail */ 4986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mail.service */ 5585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




class ContactComponent {
    constructor(mailer) {
        this.mailer = mailer;
        this.mail = new _models_mail__WEBPACK_IMPORTED_MODULE_0__.Mail;
    }
    ngOnInit() {
    }
    sendMessage(f) {
        if (this.mail !== null) {
            this.mailer.sendMail(this.mail).subscribe((res) => {
                if (res && res.status === 200) {
                    console.log(res);
                    alert("Your message has been sent and we will respond as soon as posible");
                    f.reset();
                }
                else {
                    console.log(res);
                    alert("An error occurred sending your message. Please try again");
                }
            });
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mail_service__WEBPACK_IMPORTED_MODULE_1__.MailService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 54, vars: 5, consts: [[1, "main_body"], [1, "heading", "center"], ["id", "map"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15832.535667954144!2d5.2385625!3d7.2255625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1f00e9712afb6bf!2sFairview%20Nigeria!5e0!3m2!1sen!2sng!4v1592667099660!5m2!1sen!2sng", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0"], ["href", "mailto:contact@fairviewnigeria.com"], ["href", "tel:+2348038340495"], ["href", "tel:+2349035933512"], [1, "container"], [1, "row"], [1, "col", "s12", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "input-field", "col", "s12"], ["id", "full_name", "type", "text", "name", "fullname", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], ["for", "full_name"], ["id", "email", "type", "email", "name", "contact_email", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], ["for", "email"], ["id", "subject", "type", "text", "name", "subject", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], ["for", "subject"], ["id", "message", "name", "msg", "required", "", 1, "materialize-textarea", 3, "ngModel", "ngModelChange"], ["for", "message"], ["type", "submit", 1, "btn", "btn-block", "col", "s12", 3, "disabled"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Contact Us Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Our experienced team is here to discuss any questions you might have and talk you through the many services we offer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p")(8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Locate us at:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " 1, Ademola Adesida street, off Igbatoro road, Akure, Ondo State, Nigeria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "For enquiries, send us an email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " contact@fairviewnigeria.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Or call us on");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " (234)-803-834-0495 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " (234)-903-593-3512");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Business hours: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Sun - Sat (24 hours)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 7)(29, "div", 8)(30, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.sendMessage(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 8)(33, "div", 11)(34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_34_listener($event) { return ctx.mail.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 8)(38, "div", 11)(39, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_39_listener($event) { return ctx.mail.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8)(43, "div", 11)(44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_44_listener($event) { return ctx.mail.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 8)(48, "div", 11)(49, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_49_listener($event) { return ctx.mail.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "What can we help you with?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " SEND ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mail.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mail.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mail.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mail.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["#map[_ngcontent-%COMP%] {\n\twidth: 90%;\n\theight: 400px;\n\tmargin: 0 auto;\n\tbackground-color: grey;\n}\n\n#map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 100%;\n\tborder:  1px solid #5F375B;\n}\n\np[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tpadding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsY0FBYztDQUNkLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcblx0d2lkdGg6IDkwJTtcblx0aGVpZ2h0OiA0MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbiNtYXAgaWZyYW1lIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyOiAgMXB4IHNvbGlkICM1RjM3NUI7XG59XG5cbnAge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDFlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 6459:
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/banner/banner.component */ 3994);


function FaqComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "image credits: mindandi @ Freepik.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14)(4, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " How can we help? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class FaqComponent {
    constructor() {
        this.banner_img = ['../../../assets/images/help/b2.jpg'];
    }
    ngOnInit() {
        M.AutoInit();
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 54, vars: 4, consts: [["copyright", ""], [3, "images", "slider", "captionTemplate", "height"], [1, "main_body", "justify_text"], [1, "center"], [1, "container"], [1, "row"], [1, "collapsible"], [1, "collapsible-header"], [1, "material-icons"], [1, "collapsible-body"], ["href", "tel:+2348038340495"], ["href", "tel:+2349035933512"], [1, "copyright_bottom"], ["href", "https://www.freepik.com/free-photo/solitude-copy-women-sorrow-casual-lonely_1239154.htm#query=grief&position=1&from_view=search"], [1, "caption", "valign-wrapper"], [1, "heading"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FaqComponent_ng_template_0_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Experiencing the loss of a loved one can be daunting, figuring out the next steps is our way of lifting some of the burden off you. In our experience, these are some of the common challenges loved ones have trouble navigating. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "ul", 6)(9, "li")(10, "div", 7)(11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "filter_drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Breaking the News ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Having to deliver news on the death of someone is quite a heavy task, especially when you realise that the words you choose are and the manner in which you relay the message will forever be embedded in the mind of the receiver. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br")(18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Our experts here at Fairview are experienced in softening the blow in the most compassionate way possible, capable of dealing with various individuals and situations that may be presented. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br")(21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " We will be on hand to get you through this chapter, while ensuring you are also able to process your own grief in a healthy manner. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Reach any of our experts on: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " (234)-803-834-0495 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " , ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " (234)-903-593-3512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "div", 7)(32, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "filter_drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " How do I make funeral arrangements through your website? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9)(36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " You can make funeral arrangements through our website by contacting our funeral home and speaking with one of our funeral directors. They will help you plan the funeral service and make arrangements for the burial or cremation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "div", 7)(40, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "filter_drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Can I purchase funeral merchandise, such as caskets and urns, from you? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9)(44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Yes, you can purchase funeral merchandise, such as caskets and urns, through our website. We offer a variety of options to suit different budgets and preferences. You can contact our funeral directors for assistance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "div", 7)(48, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "filter_drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " What types of funeral services do we offer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9)(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " We offer a range of funeral services, including traditional funerals, cremations, memorial services, and graveside services. We can also help with special requests and customization to meet your individual needs and preferences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.banner_img)("slider", false)("captionTemplate", _r0)("height", 400);
    } }, dependencies: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent], styles: [".copyright_bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8em;\n}\n\n.collapsible-header[_ngcontent-%COMP%] {\n  color: #60385b;\n}\n\n.caption[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29weXJpZ2h0X2JvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uY29sbGFwc2libGUtaGVhZGVyIHtcbiAgICBjb2xvcjogIzYwMzg1Yjtcbn1cblxuLmNhcHRpb24ge1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 9932:
/*!****************************************************!*\
  !*** ./src/app/pages/funeral/funeral.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuneralComponent": () => (/* binding */ FuneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/banner/banner.component */ 3994);
/* harmony import */ var _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/flip-card/flip-card.component */ 1365);






function FuneralComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "span")(2, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Helping You Say Goodbye ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " We believe in providing a personalised and professional experience. Our services are tailored to your needs and we cultivate trust and respect every step of the way. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function FuneralComponent_ng_template_5_Template(rf, ctx) { }
const _c0 = function () { return ["/contact"]; };
function FuneralComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Funeral Services ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " We help arrange funerals worthy of your departed loved ones. We\u2019re committed to providing you with the best and most affordable services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Our Services Include:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul")(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Caskets");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Band & Pallbearers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Hearse Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Funeral Decorations & Flowers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Contact Us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function FuneralComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Private Mortuary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " The Peaceful Rest (TPR)\" is our private mortuary. We preserve and keep your departed ones in a secure environment and provide additional services for honouring their memory such as embalming, makeup and presentation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function FuneralComponent_ng_template_12_Template(rf, ctx) { }
function FuneralComponent_a_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pi_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", pi_r11.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class FuneralComponent {
    constructor() {
        this.images = '../../../assets/images/funeral/';
        this.banner_img = [this.images + '1.jpg'];
        this.flip_bg = this.images + '2.jpg';
        this.flip_bg2 = this.images + '4.jpg';
        this.service_images = []; //caskets, pall bearers and hearse
        this.all_si = [];
        this.si_categories = ['caskets', 'pall bearers', 'hearse'];
        this.si_url = '../../../assets/images/funeral/service_images/';
        this.portfolio_images = [];
        this.gallery_images = [];
        this.si_folders = { 'caskets': 9, 'hearse': 12, 'accessories': 6 };
        this.carousel_switch = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        for (const key in this.si_folders) {
            for (let i = 0; i < this.si_folders[key]; i++) {
                this.all_si.push({
                    img: `${this.si_url}${key}/${(i + 1)}.jpeg`,
                    caption: '',
                    category: key
                });
            }
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const carousel = document.querySelectorAll('.carousel');
        const instance = M.Carousel.init(carousel, { fullWidth: true });
        // instance.next()
        // this.intvl = setInterval(() => {
        // 	M.Carousel.getInstance(document.querySelector('.carousel')).next();
        // }, 2000);
        const modal = document.querySelectorAll('.modal');
        const m_instance = M.Modal.init(modal);
        this.carousel_switch.emit();
        this.carousel_switch.subscribe((x) => {
            var instance2 = M.Carousel.getInstance(carousel);
            switch (x) {
                case "next":
                    carousel[0]['M_Carousel'].next();
                    break;
                case "prev":
                    carousel[0]['M_Carousel'].prev();
                    break;
                case 'caskets':
                    carousel[0]['M_Carousel'].set(0);
                    break;
                case 'hearse':
                    carousel[0]['M_Carousel'].set(9);
                    break;
                case 'accessories':
                    carousel[0]['M_Carousel'].set(20);
                    break;
            }
            (err) => console.error(err);
        });
    }
    ngOnDestroy() {
        // if (this.intvl) clearInterval(this.intvl)
    }
}
FuneralComponent.ɵfac = function FuneralComponent_Factory(t) { return new (t || FuneralComponent)(); };
FuneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FuneralComponent, selectors: [["app-funeral"]], decls: 58, vars: 15, consts: [["bannerCaption", ""], [3, "images", "captionTemplate"], [1, "heading", "big_heading", "accent_yellow"], ["leftFlipCardI", ""], ["rightFlipCardI", ""], [3, "leftCard", "left_bg", "rightCard", "right_bg_col"], ["leftFlipCardII", ""], ["rightFlipCardII", ""], [3, "leftCard", "left_bg_col", "rightCard", "right_bg", "reverse"], [1, "portfolio", "accent_yellow"], [1, "row"], [1, "col", "s12", "m4"], [1, "card"], [1, "card-image"], [3, "src"], [1, "card-content"], [1, "card-action"], ["href", "#modal1", 1, "waves-effect", "waves-light", "modal-trigger", 3, "click"], ["id", "modal1", 1, "modal"], [1, "modal-content"], ["id", "carousel", 1, "carousel"], [1, "carousel-container"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], [1, "carousel_nav", "left", "btn-floating", "btn", "waves-effect", "waves-light", 3, "click"], [1, "large", "material-icons"], [1, "carousel_nav", "right", "btn-floating", "btn", "waves-effect", "waves-light", 3, "click"], [1, "caption", "valign-wrapper"], [1, "heading"], [1, "body"], ["type", "button", 1, "btn", "btn-block", 3, "routerLink"], [1, "heading", "center"], [1, "carousel-item"]], template: function FuneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FuneralComponent_ng_template_0_Template, 7, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " What we offer\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FuneralComponent_ng_template_5_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FuneralComponent_ng_template_7_Template, 19, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-flip-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FuneralComponent_ng_template_10_Template, 5, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FuneralComponent_ng_template_12_Template, 0, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-flip-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " We offer a wide variety of high-quality caskets in different styles, sizes, and materials to suit any budget. Our caskets are carefully crafted to provide a beautiful and dignified resting place for your loved ones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16)(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FuneralComponent_Template_a_click_25_listener() { return ctx.carousel_switch.emit("caskets"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Caskets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11)(28, "div", 12)(29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15)(32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Our team is trained and experienced in providing respectful and dignified support for the casket during the funeral service. We are dedicated to making the process as smooth and seamless as possible for your family. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16)(35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FuneralComponent_Template_a_click_35_listener() { return ctx.carousel_switch.emit("hearse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Pall Bearers & Hearse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 11)(38, "div", 12)(39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 15)(42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " We offer a variety of internment accessories to help you personalize the final resting place of your loved one. Our selection includes grave markers, grave liners, vaults, and more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 16)(45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FuneralComponent_Template_a_click_45_listener() { return ctx.carousel_switch.emit("accessories"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Internment Accessories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "div", 19)(49, "div", 20)(50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, FuneralComponent_a_51_Template, 2, 1, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FuneralComponent_Template_a_click_52_listener() { return ctx.carousel_switch.emit("prev"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FuneralComponent_Template_a_click_55_listener() { return ctx.carousel_switch.emit("next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.banner_img)("captionTemplate", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leftCard", _r2)("left_bg", ctx.flip_bg)("rightCard", _r4)("right_bg_col", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leftCard", _r6)("left_bg_col", "white")("rightCard", _r8)("right_bg", ctx.flip_bg2)("reverse", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.si_url + "caskets/1.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.si_url + "hearse/1.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.si_url + "accessories/1.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.all_si);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__.FlipCardComponent], styles: [".caption[_ngcontent-%COMP%] {\n\twidth: 100%;\n    height: 100%;\n    text-align: center;\n    margin: auto;\n}\n\n.big_heading[_ngcontent-%COMP%] {\n\tpadding: 1em;\n\tmargin: 0;\n\ttext-align: center;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tpadding: 1em;\n}\n\n.carousel[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%] {\n\t\n\theight: 500px;\n}\n\n.carousel-item[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\t\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\theight: 100%;\n}\n\n@media only screen and (min-width: 768px) {\n\t.caption[_ngcontent-%COMP%] {\n\t\twidth: 50%;\n\t\tpadding: 20px;\n\t}\n}\n\n.service_box[_ngcontent-%COMP%] {\n\tbackground-size: cover;\n\tbackground-position: center; \n\tbackground-repeat: no-repeat;\n\twidth: 100%;\n\tpadding: 20px;\n\tcolor: black;\n\tposition: relative;\n\topacity: 0.9;\n\theight: 20em;\n}\n\n.overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 20%;\n    opacity: 0;\n    transition: .5s ease;\n    background-color: #00000096;\n    margin: 0 1em;\n    border-radius: 0 0 1em 1em;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n\theight: 100%;\n}\n\n.carousel_nav[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 50%;\n}\n\n.right[_ngcontent-%COMP%] {\n\tright: 0\n}\n\n.left[_ngcontent-%COMP%] {\n\tleft: 0;\n}\n\n.carousel-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 300px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n.tabs-container[_ngcontent-%COMP%] {\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\nul[_ngcontent-%COMP%] {\n\tlist-style-type: none;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}\n\nli[_ngcontent-%COMP%] {\n\tfloat: left;\n\tcursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n\tcolor: #5e375b!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osU0FBUztDQUNULGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0IsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFpQjtJQUFqQixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiOztBQUVBO0NBQ0M7RUFDQyxVQUFVO0VBQ1YsYUFBYTtDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsYUFBYTtDQUNiLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7QUFFRjtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixTQUFTO0NBQ1QsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCIiwiZmlsZSI6ImZ1bmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXB0aW9uIHtcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5iaWdfaGVhZGluZyB7XG5cdHBhZGRpbmc6IDFlbTtcblx0bWFyZ2luOiAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3J0Zm9saW8ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDFlbTtcbn1cblxuLmNhcm91c2VsLCAuY2Fyb3VzZWwtaXRlbSB7XG5cdC8qIGhlaWdodDogMjAwcHghaW1wb3J0YW50OyAqL1xuXHRoZWlnaHQ6IDUwMHB4O1xufVxuXG4uY2Fyb3VzZWwtaXRlbSwgLmNhcm91c2VsLWl0ZW0gaW1nIHtcblx0Lyogd2lkdGg6IDI1MHB4OyAqL1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdC5jYXB0aW9uIHtcblx0XHR3aWR0aDogNTAlO1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cdH1cbn1cblxuLnNlcnZpY2VfYm94IHtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGNvbG9yOiBibGFjaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvcGFjaXR5OiAwLjk7XG5cdGhlaWdodDogMjBlbTtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5NjtcbiAgICBtYXJnaW46IDAgMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxZW0gMWVtO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLmNhcm91c2VsX25hdiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG59XG5cbi5yaWdodCB7XG5cdHJpZ2h0OiAwXG59XG5cbi5sZWZ0IHtcblx0bGVmdDogMDtcbn1cblxuLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuLnRhYnMtY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG51bCB7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5saSB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLXRpdGxlIHtcblx0Y29sb3I6ICM1ZTM3NWIhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 612:
/*!******************************************************!*\
  !*** ./src/app/pages/gallery2/gallery2.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gallery2Component": () => (/* binding */ Gallery2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_other_gallery_other_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/other-gallery/other-gallery.component */ 2929);


class Gallery2Component {
    constructor() {
        this.src_dir = '../../../assets/images/';
        this.gallery_images = [];
        for (let i = 0; i < 18; i++) {
            this.gallery_images.push({
                img: `${this.src_dir}funeral/portfolio/${(i + 1)}.jpeg`,
                caption: '12th Jun, 2021',
                category: 'Funeral'
            });
        }
        for (let i = 0; i < 2; i++) {
            this.gallery_images.push({
                img: `${this.src_dir}pathology/${(i + 1)}.jpg`,
                caption: '3rd Apr, 2020',
                category: 'Lab'
            });
        }
    }
    ngOnInit() {
    }
}
Gallery2Component.ɵfac = function Gallery2Component_Factory(t) { return new (t || Gallery2Component)(); };
Gallery2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Gallery2Component, selectors: [["app-gallery2"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function Gallery2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-other-gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.gallery_images);
    } }, dependencies: [_components_other_gallery_other_gallery_component__WEBPACK_IMPORTED_MODULE_0__.OtherGalleryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5Mi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/banner/banner.component */ 3994);
/* harmony import */ var _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/flip-card/flip-card.component */ 1365);




function HomeComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Welcome to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Fairview Nigeria");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Discover our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Funerary Services ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/funeral");
} }
const _c0 = function () { return ["/pathology"]; };
function HomeComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Powering Histopathological Diagnosis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " We have over 30 years of histopathological diagnostic expertise. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Discover More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Discover Our Pathology Services ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
class HomeComponent {
    constructor() {
        this.banner_img = ['../../../assets/images/home/1.jpg'];
        this.flip_card_bg = '../../../assets/images/home/2.jpg';
        // images = [1,2,3].map((n) => `../../../assets/images/home/slider/${n}.jpeg`);
        this.images = this.banner_img;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 7, consts: [["bannerCaption", ""], [3, "images", "slider", "captionTemplate", "height"], [1, "main_body"], [1, "heading", "center"], [1, "center"], ["type", "button", 1, "btn", "btn-block", "center", 3, "routerLink"], ["flipCardLeft", ""], [3, "leftCard", "right_bg"], [1, "caption"], [1, "heading"], [1, "keep_together"], [1, "cta"], [1, "fv_purple-text", "text-light_af", 3, "routerLink"], [1, "half"], ["type", "button", 1, "btn", "btn-block", "hide-on-large-only", 3, "routerLink"], ["type", "button", 1, "btn", "btn-block", "hide-on-med-and-down", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_ng_template_0_Template, 10, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Arranging a funeral? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " At Fairview Nigeria, we know saying goodbye is never easy. We\u2019re here to support and guide you through the process of making funeral arrangements that are worthy of your loved ones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Get in Touch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeComponent_ng_template_10_Template, 9, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-flip-card", 7);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.images)("slider", true)("captionTemplate", _r0)("height", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leftCard", _r2)("right_bg", ctx.flip_card_bg);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__.FlipCardComponent], styles: [".caption[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: auto;\n  padding: 20px;\n}\n\n@media only screen and (min-width: 768px) {\n  .caption[_ngcontent-%COMP%] {\n    max-width: 80%;\n    padding: 40px;\n    margin-top: 3em;\n    margin-right: 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRDs7QUFFQTtFQUNDO0lBQ0MsY0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFDQTtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FwdGlvbiB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0d2lkdGg6IGF1dG87XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LmNhcHRpb24ge1xuXHRcdG1heC13aWR0aDogODAlO1xuXHRcdHBhZGRpbmc6IDQwcHg7XG5cdFx0bWFyZ2luLXRvcDogM2VtO1xuXHRcdG1hcmdpbi1yaWdodDogMmVtO1xuXHR9XG59Il19 */"] });


/***/ }),

/***/ 9591:
/*!********************************************************!*\
  !*** ./src/app/pages/pathology/pathology.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathologyComponent": () => (/* binding */ PathologyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/banner/banner.component */ 3994);
/* harmony import */ var _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/flip-card/flip-card.component */ 1365);




function PathologyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " A Diagnosis You Can Trust ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function PathologyComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "What we offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul")(4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Surgical pathology / Biopsy services");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Cytopathology / FNAC (Fine Needle Aspiration Cytology)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Pap smears");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Immunohistochemistry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Autopsies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
class PathologyComponent {
    constructor() {
        this.banner_img = ['../../../assets/images/pathology/1.jpg'];
        this.flip_card_bg = '../../../assets/images/pathology/2.jpg';
    }
    ngOnInit() {
    }
}
PathologyComponent.ɵfac = function PathologyComponent_Factory(t) { return new (t || PathologyComponent)(); };
PathologyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PathologyComponent, selectors: [["app-pathology"]], decls: 13, vars: 5, consts: [["bannerCaption", ""], [3, "images", "captionTemplate"], [1, "main_body"], [1, "heading", "center"], [1, "center"], ["type", "button", 1, "btn", "btn-block", "center", 3, "routerLink"], ["flipCardLeft", ""], [3, "leftCard", "right_bg"], [1, "vh_center"], [1, "heading"], [1, "center-block"]], template: function PathologyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PathologyComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " A Fully Fledged Pathology Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " We examine tissue specimens and fluid aspirates to make diagnoses. Such diagnoses are essential for accurate patient assessments and they assist in the formulation of personalized, focused therapies for patients. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PathologyComponent_ng_template_10_Template, 14, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-flip-card", 7);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.banner_img)("captionTemplate", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leftCard", _r2)("right_bg", ctx.flip_card_bg);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__.FlipCardComponent], styles: [".vh_center[_ngcontent-%COMP%] {\n\twidth: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGhvbG9neS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtBQUNYIiwiZmlsZSI6InBhdGhvbG9neS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZoX2NlbnRlciB7XG5cdHdpZHRoOiA4MCU7XG59Il19 */"] });


/***/ }),

/***/ 2882:
/*!**********************************************************************!*\
  !*** ./src/app/pages/services-gallery/services-gallery.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesGalleryComponent": () => (/* binding */ ServicesGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/gallery/gallery.component */ 6183);


class ServicesGalleryComponent {
    constructor() {
        this.src_dir = '../../../assets/images/';
        this.gallery_images = [];
        for (let i = 0; i < 18; i++) {
            this.gallery_images.push({
                img: `${this.src_dir}funeral/portfolio/${(i + 1)}.jpeg`,
                caption: '12th Jun, 2021',
                category: 'Funeral'
            });
        }
        for (let i = 0; i < 2; i++) {
            this.gallery_images.push({
                img: `${this.src_dir}pathology/${(i + 1)}.jpg`,
                caption: '3rd Apr, 2020',
                category: 'Lab'
            });
        }
    }
    ngOnInit() {
    }
}
ServicesGalleryComponent.ɵfac = function ServicesGalleryComponent_Factory(t) { return new (t || ServicesGalleryComponent)(); };
ServicesGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServicesGalleryComponent, selectors: [["app-services-gallery"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function ServicesGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.gallery_images);
    } }, dependencies: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5585:
/*!******************************************!*\
  !*** ./src/app/services/mail.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailService": () => (/* binding */ MailService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class MailService {
    constructor(http) {
        this.http = http;
        this.endpoint = 'https://fairviewnigeria.com/contact.php';
    }
    handleError(error) {
        console.log(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(error.error.message);
    }
    sendMail(mail) {
        return this.http.post(this.endpoint, { data: mail })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
MailService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9344:
/*!*****************************!*\
  !*** ./src/assets/links.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Links": () => (/* binding */ Links)
/* harmony export */ });
class Links {
    constructor() {
        this.links = [
            {
                title: 'funeral services',
                link: 'funeral'
            },
            {
                title: 'pathology services',
                link: 'pathology'
            },
            {
                title: 'contact us',
                link: 'contact'
            },
            {
                title: 'about us',
                link: 'about'
            },
            {
                title: 'gallery',
                link: 'gallery'
            },
            {
                title: 'help',
                link: 'help'
            }
        ];
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    name: 'dev'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map