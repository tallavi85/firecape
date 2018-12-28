(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~landing-calc-module~landing-landing-module"],{

/***/ "./src/app/landing/calc-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/landing/calc-routing.module.ts ***!
  \************************************************/
/*! exports provided: CalcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcRoutingModule", function() { return CalcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing/landing.component.ts");
/* harmony import */ var _landing_calc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/calc.component */ "./src/app/landing/landing/calc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: 'pricing',
        component: _landing_calc_component__WEBPACK_IMPORTED_MODULE_3__["CalcComponent"]
    }
];
var CalcRoutingModule = /** @class */ (function () {
    function CalcRoutingModule() {
    }
    CalcRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalcRoutingModule);
    return CalcRoutingModule;
}());



/***/ }),

/***/ "./src/app/landing/landing/calc.component.html":
/*!*****************************************************!*\
  !*** ./src/app/landing/landing/calc.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/logos/firecape.png\" /></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a routerLink=\"\" class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"\">\n        <a class=\"nav-link activey\">Prices</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"floatSoc\">\n<img src=\"../../../assets/logos/skype.png\">\n    <br>\n<img src=\"../../../assets/logos/discord.png\">\n    <br>\n<img src=\"../../../assets/logos/sythe.png\">\n</div>\n<div class=\"container-fluid\">\n    \n    <h1>Enter your levels</h1>\n    <div class=\"row\">\n        <div class=\"contentCalculator\">\n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n        <span><img src=\"../../../assets/logos/range.png\" style=\"margin-right: 5px;\">Ranged Level: <span class=\"levels\" #levelindx >61</span></span>\n          <input #slidex id=\"rangedSlider\" class=\"slider\" value=\"61\" min=\"61\" max=\"99\" (input)=\"updateRange(slidex.value); levelindx.innerText = slidex.value; pricey.innerText = getPrice()\" type=\"range\" />\n        \n        \n        </div>\n           <hr> \n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n        <span><img src=\"../../../assets/logos/hp.png\" style=\"margin-right: 5px;\">Hitpoints: <span class=\"levels\" #levelindx2 >50</span></span>\n          <input #slidex2 id=\"rangedSlider\" class=\"slider\" value=\"50\" min=\"10\" max=\"99\" (input)=\"updateHP(slidex.value); levelindx2.innerText = slidex2.value; pricey.innerText = getPrice()\" type=\"range\" />\n        \n        \n        </div>\n            <hr>\n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n        <span><img src=\"../../../assets/logos/defence.png\" style=\"margin-right: 5px;\">Defence Level: <span class=\"levels\" #levelindx3 >1</span></span>\n          <input #slidex3 id=\"rangedSlider\" class=\"slider\" value=\"1\" min=\"1\" max=\"99\" (input)=\"updateDef(slidex3.value); levelindx3.innerText = slidex3.value; pricey.innerText = getPrice()\" type=\"range\" />\n        \n        \n        </div>\n            <hr>\n            \n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n            <div class=\"inputGroup\">\n    <input #pray (change)=\"updatePray(pray.checked); pricey.innerText = getPrice()\" id=\"option1\" name=\"option1\" type=\"checkbox\"/>\n    <label for=\"option1\"><img src=\"../../../assets/logos/pray.png\" style=\"margin-right: 5px\">43+ Prayer</label>\n  </div>\n        \n        \n        </div>\n        </div>\n    </div>\n\n    <h2 id=\"pricey\" #pricey></h2>\n\n\n</div>"

/***/ }),

/***/ "./src/app/landing/landing/calc.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/landing/landing/calc.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-animation: 1s fadeIn;\n          animation: 1s fadeIn;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  visibility: hidden; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n* {\n  color: white; }\n\n.mat-select-value {\n  color: white; }\n\n::ng-deep .mat-select-value-text {\n  color: white; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: white; }\n\nnavbar.a {\n  color: #f48042 !important; }\n\n.contentCalculator {\n  margin: 10px auto;\n  border: 1px solid white;\n  width: 400px; }\n\n.images {\n  margin-top: 2%;\n  width: 100%; }\n\n.images .image {\n    padding: 5px 5px 5px 5px; }\n\n.navbar {\n  background-color: rgba(255, 255, 255, 0.2); }\n\n::ng-deep .mat-option-text {\n  color: black; }\n\n.banner {\n  margin-top: 5%;\n  margin-right: auto;\n  margin-left: auto; }\n\n.images img {\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n  display: block; }\n\nh1 {\n  color: white;\n  font-family: Courier;\n  text-align: center;\n  margin-top: 3%; }\n\nh2 {\n  color: white;\n  font-family: Courier;\n  text-align: center;\n  margin-top: 1%; }\n\nhr {\n  width: 50%;\n  background-color: white; }\n\n.slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 5px;\n  border-radius: 5px;\n  outline: none;\n  opacity: 1.0; }\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.levels {\n  color: #4CAF50; }\n\n.inputGroup {\n  background-color: transparent;\n  display: block;\n  margin: 10px 0;\n  position: relative; }\n\n.inputGroup label {\n    padding: 12px 30px;\n    width: 100%;\n    display: block;\n    text-align: left;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    z-index: 2;\n    transition: color 200ms ease-in;\n    overflow: hidden; }\n\n.inputGroup label:before {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      content: '';\n      background-color: #4CAF50;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);\n              transform: translate(-50%, -50%) scale3d(1, 1, 1);\n      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n      opacity: 0 !important;\n      z-index: -1; }\n\n.inputGroup label:after {\n      width: 32px;\n      height: 32px;\n      content: '';\n      border: 2px solid #D1D7DC;\n      background-color: transparent;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='transparent' fill-rule='nonzero'/%3E%3C/svg%3E \");\n      background-repeat: no-repeat;\n      background-position: 2px 3px;\n      border-radius: 50%;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      cursor: pointer;\n      transition: all 200ms ease-in; }\n\n.inputGroup input:checked ~ label {\n    color: #fff; }\n\n.inputGroup input:checked ~ label:before {\n      -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);\n              transform: translate(-50%, -50%) scale3d(56, 56, 1);\n      opacity: 1 !important; }\n\n.inputGroup input:checked ~ label:after {\n      background-color: transparent !important;\n      border-color: white;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='white' fill-rule='nonzero'/%3E%3C/svg%3E \"); }\n\n.inputGroup input {\n    width: 0;\n    height: 0;\n    order: 1;\n    z-index: 2;\n    position: absolute;\n    right: 30px;\n    top: 50%;\n    background-color: transparent;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    cursor: pointer;\n    visibility: hidden !important; }\n\n.floatSoc {\n  position: absolute;\n  left: 1%;\n  z-index: 5000;\n  top: 40%; }\n\n.floatSoc img {\n  margin-bottom: 2%;\n  width: 10%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.floatSoc img:hover {\n  width: 15%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.nav-item:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: white !important; }\n\n.activey {\n  color: white;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.nav-link:hover {\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nL0M6XFxVc2Vyc1xcVGFsXFxEZXNrdG9wXFw0XFxmaXJlY2FwZS1tYXN0ZXJcXHBvcnRhbC9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZ1xcY2FsYy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFvQjtVQUFwQixxQkFBb0I7RUFDcEIsc0NBQTZCO1VBQTdCLDhCQUE2QjtFQUU3QixtQkFBa0IsRUFBRzs7QUFFdkI7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0Usb0JBQW1CO0lBQ25CLFdBQVUsRUFBQSxFQUFBOztBQU5kO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLG9CQUFtQjtJQUNuQixXQUFVLEVBQUEsRUFBQTs7QUFLZDtFQUNJLGFBQVksRUFBRzs7QUFDbkI7RUFDSSxhQUFZLEVBQUc7O0FBQ25CO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLDBCQUF5QixFQUFHOztBQUVoQztFQUNJLGtCQUFpQjtFQUNqQix3QkFBdUI7RUFDdkIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLGVBQWM7RUFDZCxZQUFXLEVBRXNCOztBQUpyQztJQUlRLHlCQUF3QixFQUFHOztBQUVuQztFQUNJLDJDQUF1QyxFQUFHOztBQUc5QztFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUFHOztBQUV4QjtFQUNJLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxhQUFZO0VBQ1oscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksYUFBWTtFQUNaLHFCQUFvQjtFQUNwQixtQkFBa0I7RUFDbEIsZUFBYyxFQUFHOztBQUVyQjtFQUNJLFdBQVU7RUFDVix3QkFBdUIsRUFBRzs7QUFHOUI7RUFDRSx5QkFBd0I7RUFDeEIsWUFBVztFQUNYLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGFBQVksRUFBRzs7QUFHakI7RUFDRSx5QkFBd0I7RUFDeEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixnQkFBZSxFQUFHOztBQUdwQjtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixnQkFBZSxFQUFHOztBQUVwQjtFQUNJLGVBQWMsRUFBRzs7QUFHckI7RUFDSSw4QkFBNkI7RUFDN0IsZUFBYztFQUNkLGVBQWM7RUFDZCxtQkFBa0IsRUE0RWtCOztBQWhGeEM7SUFPTSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGVBQWM7SUFDZCxpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixnQ0FBK0I7SUFDL0IsaUJBQWdCLEVBaUNvQjs7QUFqRDFDO01BbUJRLFlBQVc7TUFDWCxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCwwQkFBeUI7TUFDekIsbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxTQUFRO01BQ1IsMERBQWlEO2NBQWpELGtEQUFpRDtNQUNqRCxtREFBb0Q7TUFDcEQsc0JBQXFCO01BQ3JCLFlBQVcsRUFBRzs7QUE5QnRCO01Ba0NRLFlBQVc7TUFDWCxhQUFZO01BQ1osWUFBVztNQUNYLDBCQUF5QjtNQUN6Qiw4QkFBNkI7TUFDN0Isa1FBQWlRO01BQ2pRLDZCQUE0QjtNQUM1Qiw2QkFBNEI7TUFDNUIsbUJBQWtCO01BQ2xCLFdBQVU7TUFDVixtQkFBa0I7TUFDbEIsWUFBVztNQUNYLFNBQVE7TUFDUixvQ0FBMkI7Y0FBM0IsNEJBQTJCO01BQzNCLGdCQUFlO01BQ2YsOEJBQTZCLEVBQUc7O0FBakR4QztJQXNETSxZQUFXLEVBV3VQOztBQWpFeFE7TUF5RFEsNERBQW1EO2NBQW5ELG9EQUFtRDtNQUNuRCxzQkFBcUIsRUFBRzs7QUExRGhDO01BK0RRLHlDQUF3QztNQUN4QyxvQkFBbUI7TUFDbkIsNFBBQTJQLEVBQUc7O0FBakV0UTtJQXNFTSxTQUFRO0lBQ1IsVUFBUztJQUNULFNBQVE7SUFDUixXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxTQUFRO0lBQ1IsOEJBQTZCO0lBQzdCLG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFDM0IsZ0JBQWU7SUFDZiw4QkFBNkIsRUFBRzs7QUFHdEM7RUFDSSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGNBQWE7RUFDYixTQUFRLEVBQUc7O0FBRWY7RUFDSSxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGFBQVk7RUFDbUIsWUFBWTtFQUMzQyxzQkFBcUIsRUFBRzs7QUFFNUI7RUFDSSxXQUFVO0VBQ1YsYUFBWTtFQUNtQixZQUFZO0VBQzNDLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLDJDQUF5QztFQUN6Qyx3QkFBdUIsRUFBRzs7QUFFOUI7RUFDSSxhQUFZO0VBQ1osMkNBQXlDLEVBQUc7O0FBRWhEO0VBQ0ksd0JBQXVCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcvY2FsYy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBhbmltYXRpb246IDFzIGZhZGVJbjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cblxuICAxMDAlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG5cblxuXG4qIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbi5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7IH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG5uYXZiYXIuYSB7XG4gICAgY29sb3I6ICNmNDgwNDIgIWltcG9ydGFudDsgfVxuXG4uY29udGVudENhbGN1bGF0b3Ige1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiA0MDBweDsgfVxuXG4uaW1hZ2VzIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuaW1hZ2Uge1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7IH0gfVxuXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7IH1cblxuXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XG4gICAgY29sb3I6IGJsYWNrOyB9XG5cbi5iYW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuXG4uaW1hZ2VzIGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQ291cmllcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMyU7IH1cblxuaDIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQ291cmllcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMSU7IH1cblxuaHIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuXG4uc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3BhY2l0eTogMS4wOyB9XG5cblxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5sZXZlbHMge1xuICAgIGNvbG9yOiAjNENBRjUwOyB9XG5cblxuLmlucHV0R3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGxhYmVsIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAtMTsgfVxuXG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0QxRDdEQztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J001LjQxNCAxMUw0IDEyLjQxNGw1LjQxNCA1LjQxNEwyMC44MjggNi40MTQgMTkuNDE0IDVsLTEwIDEweicgZmlsbD0ndHJhbnNwYXJlbnQnIGZpbGwtcnVsZT0nbm9uemVybycvJTNFJTNDL3N2ZyUzRSBcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDJweCAzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjsgfSB9XG5cblxuXG4gICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50OyB9XG5cblxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTUuNDE0IDExTDQgMTIuNDE0bDUuNDE0IDUuNDE0TDIwLjgyOCA2LjQxNCAxOS40MTQgNWwtMTAgMTB6JyBmaWxsPSd3aGl0ZScgZmlsbC1ydWxlPSdub256ZXJvJy8lM0UlM0Mvc3ZnJTNFIFwiKTsgfSB9XG5cblxuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBvcmRlcjogMTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMzBweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDsgfSB9XG5cblxuLmZsb2F0U29jIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMSU7XG4gICAgei1pbmRleDogNTAwMDtcbiAgICB0b3A6IDQwJTsgfVxuXG4uZmxvYXRTb2MgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC41czsgLyogU2FmYXJpICovO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC41czsgfVxuXG4uZmxvYXRTb2MgaW1nOmhvdmVyIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC41czsgLyogU2FmYXJpICovO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC41czsgfVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XG5cbi5hY3RpdmV5IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7IH1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/landing/landing/calc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing/calc.component.ts ***!
  \***************************************************/
/*! exports provided: CalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcComponent", function() { return CalcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalcComponent = /** @class */ (function () {
    function CalcComponent() {
        this.range = 61;
        this.hp = 50;
        this.def = 1;
        this.pray = false;
    }
    CalcComponent.prototype.ngOnInit = function () {
        document.getElementById('pricey').innerText = this.getPrice();
    };
    CalcComponent.prototype.updateRange = function (value) {
        this.range = value;
    };
    CalcComponent.prototype.updateHP = function (value) {
        this.hp = value;
    };
    CalcComponent.prototype.updateDef = function (value) {
        this.def = value;
    };
    CalcComponent.prototype.updatePray = function (value) {
        this.pray = value;
    };
    CalcComponent.prototype.getPrice = function () {
        if (!this.pray) {
            if (this.hp < 50) {
                return "Please contact us";
            }
            if (this.range < 70) {
                return "110M + 3500 Purple Sweets";
            }
            else if (this.range < 75) {
                return "85M + 3000 Purple Sweets";
            }
            else if (this.range < 85) {
                return "75M + 2500 Purple Sweets";
            }
            else if (this.range < 90) {
                return "65M + 2500 Purple Sweets";
            }
            else if (this.range < 96) {
                return "55M + 2500 Purple Sweets";
            }
            else {
                return "49M + 2500 Purple Sweets";
            }
        }
        else {
            if (this.def < 44) {
                if (this.range < 70) {
                    return "20M";
                }
                else if (this.range < 75) {
                    return "15M";
                }
                else if (this.range < 85) {
                    return "11M";
                }
                else {
                    return "8.5M";
                }
            }
            else {
                if (this.range < 70) {
                    return "15M";
                }
                else if (this.range < 75) {
                    return "10M";
                }
                else if (this.range < 85) {
                    return "8M";
                }
                else {
                    return "5M";
                }
            }
        }
    };
    CalcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calc',
            template: __webpack_require__(/*! ./calc.component.html */ "./src/app/landing/landing/calc.component.html"),
            styles: [__webpack_require__(/*! ./calc.component.sass */ "./src/app/landing/landing/calc.component.sass")]
        })
    ], CalcComponent);
    return CalcComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing/landing.component.html":
/*!********************************************************!*\
  !*** ./src/app/landing/landing/landing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/logos/firecape.png\" /></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n       <li class=\"\">\n        <a class=\"nav-link activey\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a routerLink=\"pricing\" class=\"nav-link\">Prices</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"floatSoc\">\n<img src=\"../../../assets/logos/skype.png\">\n    <br>\n<img src=\"../../../assets/logos/discord.png\">\n    <br>\n<img src=\"../../../assets/logos/sythe.png\">\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"banner\">\n      <img src=\"./assets/banner.gif\" />\n    </div>\n  </div>\n<h1>Previous Work</h1>\n<hr>\n  <div class=\"row\">\n    <div class=\"images\">\n      <div class=\"col\" *ngFor=\"let image of images\">\n        <img class=\"image\" src=\"{{image}}\" width=\"25%\" />\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing/landing.component.sass":
/*!********************************************************!*\
  !*** ./src/app/landing/landing/landing.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-animation: 1s fadeIn;\n          animation: 1s fadeIn;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  visibility: hidden; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n* {\n  color: white; }\n\n.mat-select-value {\n  color: white; }\n\n::ng-deep .mat-select-value-text {\n  color: white; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: white; }\n\nnavbar.a {\n  color: #f48042 !important; }\n\n.contentCalculator {\n  margin: 10px auto;\n  border: 1px solid white;\n  width: 400px; }\n\n.images {\n  margin-top: 2%;\n  width: 100%; }\n\n.images .image {\n    padding: 5px 5px 5px 5px; }\n\n.navbar {\n  background-color: rgba(255, 255, 255, 0.2); }\n\n::ng-deep .mat-option-text {\n  color: black; }\n\n.banner {\n  margin-top: 5%;\n  margin-right: auto;\n  margin-left: auto; }\n\n.images img {\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n  display: block; }\n\nh1 {\n  color: white;\n  font-family: Courier;\n  text-align: center;\n  margin-top: 3%; }\n\nhr {\n  width: 50%;\n  background-color: white; }\n\n.floatSoc {\n  position: absolute;\n  left: 1%;\n  z-index: 5000;\n  top: 40%; }\n\n.floatSoc img {\n  margin-bottom: 2%;\n  width: 10%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.floatSoc img:hover {\n  width: 15%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.nav-item:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: white !important; }\n\n.activey {\n  color: white;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.nav-link:hover {\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nL0M6XFxVc2Vyc1xcVGFsXFxEZXNrdG9wXFw0XFxmaXJlY2FwZS1tYXN0ZXJcXHBvcnRhbC9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFvQjtVQUFwQixxQkFBb0I7RUFDcEIsc0NBQTZCO1VBQTdCLDhCQUE2QjtFQUU3QixtQkFBa0IsRUFBRzs7QUFFdkI7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0Usb0JBQW1CO0lBQ25CLFdBQVUsRUFBQSxFQUFBOztBQU5kO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLG9CQUFtQjtJQUNuQixXQUFVLEVBQUEsRUFBQTs7QUFDZDtFQUNJLGFBQVksRUFBRzs7QUFDbkI7RUFDSSxhQUFZLEVBQUc7O0FBQ25CO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLDBCQUF5QixFQUFHOztBQUVoQztFQUNJLGtCQUFpQjtFQUNqQix3QkFBdUI7RUFDdkIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLGVBQWM7RUFDZCxZQUFXLEVBRXNCOztBQUpyQztJQUlRLHlCQUF3QixFQUFHOztBQUVuQztFQUNJLDJDQUF1QyxFQUFHOztBQUc5QztFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUFHOztBQUV4QjtFQUNJLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxhQUFZO0VBQ1oscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksV0FBVTtFQUNWLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsY0FBYTtFQUNiLFNBQVEsRUFBRzs7QUFFZjtFQUNJLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsYUFBWTtFQUNtQixZQUFZO0VBQzNDLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLFdBQVU7RUFDVixhQUFZO0VBQ21CLFlBQVk7RUFDM0Msc0JBQXFCLEVBQUc7O0FBRTVCO0VBQ0ksMkNBQXlDO0VBQ3pDLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLGFBQVk7RUFDWiwyQ0FBeUMsRUFBRzs7QUFFaEQ7RUFDSSx3QkFBdUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGFuaW1hdGlvbjogMXMgZmFkZUluO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuXG4gIDEwMCUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTsgfSB9XG4qIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbi5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7IH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG5uYXZiYXIuYSB7XG4gICAgY29sb3I6ICNmNDgwNDIgIWltcG9ydGFudDsgfVxuXG4uY29udGVudENhbGN1bGF0b3Ige1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiA0MDBweDsgfVxuXG4uaW1hZ2VzIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuaW1hZ2Uge1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7IH0gfVxuXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7IH1cblxuXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XG4gICAgY29sb3I6IGJsYWNrOyB9XG5cbi5iYW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuXG4uaW1hZ2VzIGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQ291cmllcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMyU7IH1cblxuaHIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLmZsb2F0U29jIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMSU7XG4gICAgei1pbmRleDogNTAwMDtcbiAgICB0b3A6IDQwJTsgfVxuXG4uZmxvYXRTb2MgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC41czsgLyogU2FmYXJpICovO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC41czsgfVxuXG4uZmxvYXRTb2MgaW1nOmhvdmVyIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC41czsgLyogU2FmYXJpICovO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC41czsgfVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XG5cbi5hY3RpdmV5IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7IH1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/landing/landing/landing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landing/landing/landing.component.ts ***!
  \******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_lazy_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/lazy-service.service */ "./src/app/shared/lazy-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(lazyService) {
        this.lazyService = lazyService;
        this.selected = 0;
        this.choices = [];
        this.images = [];
        this.rangeLevel = 61;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lazyService.requestGet('https://raw.githubusercontent.com/toolazytobetrue/firecape/master/config.json', { responseType: 'text' })
            .subscribe(function (response) {
            var data = JSON.parse(response);
            console.log(data);
            _this.choices = data.prices;
            _this.images = data.images;
            _this.price = _this.choices[_this.selected].price;
            _this.sweets = _this.choices[_this.selected].sweets;
        }, function (err) {
            console.log(err);
        });
    };
    LandingComponent.prototype.changePrice = function () {
        this.price = this.choices[this.selected].price;
        this.sweets = this.choices[this.selected].sweets;
    };
    LandingComponent.prototype.update = function (level) {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.sass */ "./src/app/landing/landing/landing.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_shared_lazy_service_service__WEBPACK_IMPORTED_MODULE_1__["LazyService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~landing-calc-module~landing-landing-module.js.map