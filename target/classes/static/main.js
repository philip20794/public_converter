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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: auto;\r\n  max-height: 100px;\r\n}\r\n\r\nmat-grid-tile.top{\r\n  background-color: #f2f2f2;\r\n}\r\n\r\nmat-card.error{\r\n  background-color: #991f00;\r\n  color: #f2f2f2;\r\n  min-width: 50%;\r\n  text-align: center;\r\n}\r\n\r\ndiv.logo{\r\n  position: absolute;\r\n  left: 5px;\r\n}\r\n\r\ndiv.logout{\r\n  position: absolute;\r\n  right: 10%;\r\n  margin-top: 20px;\r\n}\r\n\r\nmat-vertical-stepper {\r\n  border-radius: 100%;\r\n  background: transparent;\r\n}\r\n\r\nmat-step {\r\n  background: transparent;\r\n}\r\n\r\nmat-card-subtitle {\r\n  background-color: #006EC7;\r\n  max-width: 360px;\r\n}\r\n\r\nmat-card.inner {\r\n  align-items: center;\r\n  border-radius: 100%;\r\n  background: transparent;\r\n  margin-top: 20px;\r\n  margin-left: 70px;\r\n}\r\n\r\nmat-card.out {\r\n  align-items: center;\r\n  border-radius: 100%;\r\n  min-width: 480px;\r\n  min-height: 480px;\r\n  background: transparent;;\r\n}\r\n\r\nmat-step-header .mat-step-label {\r\n  overflow: visible;\r\n}\r\n\r\nmat-step-header .mat-step-icon-not-touched span,\r\nmat-step-header .mat-step-icon span,\r\nmat-step-header .mat-step-icon-not-touched .mat-icon,\r\nmat-step-header .mat-step-icon .mat-icon {\r\n  display: none;\r\n}\r\n\r\nmat-step-header:nth-of-type(1) .mat-step-icon-not-touched:after,\r\nmat-step-header:nth-of-type(1) .mat-step-icon:after {\r\n  content: 'New 1';\r\n}\r\n\r\n.active-step-1 mat-step-header:nth-of-type(1) .mat-step-icon-not-touched::after,\r\n.active-step-1 mat-step-header:nth-of-type(1) .mat-step-icon::after {\r\n  content: 'add_circle' !important; /* name of the material icon */\r\n  font-family: 'Material Icons' !important;\r\n  -webkit-font-feature-settings: 'liga' 1;\r\n          font-feature-settings: 'liga' 1;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<mat-grid-list cols=\"1\" rowHeight=\"100px\">\n  <mat-grid-tile class=\"top\">\n    <div class=\"logo\">\n      <img [src]=\"logo_ag\" layout-fill>\n    </div>\n    <div class=\"logout\">\n      <app-logout></app-logout>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile *ngIf=\"error\">\n    <mat-card class=\"error\">\n      <mat-card-title>\n        {{errorMessage}}\n      </mat-card-title>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [rowspan]=\"6\">\n    <mat-card class=\"out\" [ngStyle]=\"{'background-image': 'url(' + logo + ')'}\">\n      <mat-card class=\"inner mat-elevation-z0\">\n        <form novalidate >\n          <mat-card-title>Converter</mat-card-title>\n          <mat-card-subtitle>{{message}}</mat-card-subtitle>\n          <mat-card-content>\n            <mat-vertical-stepper [linear]=\"true\" #stepper>\n              <ng-template matStepperIcon=\"edit\">\n                <mat-icon>check</mat-icon>\n              </ng-template>\n              <mat-step [stepControl]=\"firstFormGroup\">\n                <form [formGroup]=\"firstFormGroup\">\n                  <ng-template matStepLabel>Upload</ng-template>\n                  <app-upload (changeFileNameEvent)=\"changeFileName($event, stepper)\" (changeFileUploadedEvent)=\"changeFileUploaded($event, stepper)\"\n                              (changeFileConvertedEvent)=\"changeFileConverted($event)\" (errorEvent)=\"showError($event)\"></app-upload>\n                </form>\n              </mat-step>\n              <ng-template matStepperIcon=\"edit\">\n                <mat-icon>check</mat-icon>\n              </ng-template>\n              <mat-step [stepControl]=\"secondFormGroup\">\n                <form [formGroup]=\"secondFormGroup\">\n                  <ng-template matStepLabel>Convert</ng-template>\n                  <app-convert (changeFileConvertedEvent)=\"changeFileConverted($event)\" [fileName]=\"fileName\"\n                               (errorEvent)=\"showError($event)\"></app-convert>\n                </form>\n              </mat-step>\n              <ng-template matStepperIcon=\"edit\">\n                <mat-icon>check</mat-icon>\n              </ng-template>\n              <mat-step [stepControl]=\"thirdFormGroup\">\n                <form [formGroup]=\"thirdFormGroup\">\n                  <ng-template matStepLabel>Download</ng-template>\n                  <app-download [fileName]=\"fileName\"></app-download>\n                </form>\n              </mat-step>\n            </mat-vertical-stepper>\n          </mat-card-content>\n        </form>\n      </mat-card>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _convert_convert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./convert/convert.component */ "./src/app/convert/convert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.logo = '../assets/images/Adesso_logo.png';
        this.logo_ag = '../assets/images/Adesso_AG_logo.png';
        this.fileUploaded = false;
        this.error = false;
        this.fileName = "";
        this.message = "";
        this.fileConverted = false;
        this.resetFirstFormGroup();
        this.resetSecondFormGroup();
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ''
        });
    };
    AppComponent.prototype.showError = function (errorMessage) {
        this.errorMessage = errorMessage;
        this.error = true;
    };
    AppComponent.prototype.resetFirstFormGroup = function () {
        var _this = this;
        this.error = false;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.firstFormGroup.statusChanges.subscribe(function (status) {
            if (status === 'VALID') {
                _this.stepper.next();
            }
        });
    };
    AppComponent.prototype.resetSecondFormGroup = function () {
        var _this = this;
        this.error = false;
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup.statusChanges.subscribe(function (status) {
            if (status === 'VALID') {
                _this.stepper.next();
            }
        });
    };
    AppComponent.prototype.changeFileName = function ($event, stepper) {
        this.stepper.reset();
        this.fileName = $event;
    };
    AppComponent.prototype.isPDF = function () {
        return this.fileName.endsWith('.pdf');
    };
    AppComponent.prototype.changeFileUploaded = function ($event, stepper) {
        this.fileUploaded = $event;
        if (this.fileUploaded) {
            if (this.isPDF()) {
                this.message = "Uploaded: " + this.fileName;
                this.firstFormGroup.removeControl('firstCtrl');
            }
            else {
                this.message = "Select a .pdf file";
            }
        }
        else {
            this.message = "";
            this.resetFirstFormGroup();
        }
    };
    AppComponent.prototype.changeFileConverted = function ($event) {
        this.fileConverted = $event;
        if (this.fileConverted) {
            this.message = "Converted: " + this.fileName;
            this.secondFormGroup.removeControl('secondCtrl');
        }
        else {
            this.message = "";
            this.resetSecondFormGroup();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "uploader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_convert_convert_component__WEBPACK_IMPORTED_MODULE_4__["ConvertComponent"]),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "converter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepper"])
    ], AppComponent.prototype, "stepper", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _convert_convert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./convert/convert.component */ "./src/app/convert/convert.component.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./download/download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__["UploadComponent"],
                _convert_convert_component__WEBPACK_IMPORTED_MODULE_15__["ConvertComponent"],
                _download_download_component__WEBPACK_IMPORTED_MODULE_16__["DownloadComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            exports: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/convert/convert.component.css":
/*!***********************************************!*\
  !*** ./src/app/convert/convert.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/convert/convert.component.html":
/*!************************************************!*\
  !*** ./src/app/convert/convert.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-stroked-button color=\"accent\" (click)=\"convertFile()\">Convert</button>\n<ng4-loading-spinner [timeout]=\"90000\" [loadingText]=\"'Converting ' + fileName + '...'\" [zIndex]=\"9999\"></ng4-loading-spinner>\n"

/***/ }),

/***/ "./src/app/convert/convert.component.ts":
/*!**********************************************!*\
  !*** ./src/app/convert/convert.component.ts ***!
  \**********************************************/
/*! exports provided: ConvertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertComponent", function() { return ConvertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConvertComponent = /** @class */ (function () {
    function ConvertComponent(http, requestService, spinnerService, error) {
        this.http = http;
        this.requestService = requestService;
        this.spinnerService = spinnerService;
        this.error = error;
        this.changeFileConvertedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConvertComponent.prototype.ngOnInit = function () {
        this.fileConverted = false;
        this.changeFileConvertedEvent.emit(this.fileConverted);
    };
    ConvertComponent.prototype.convertFile = function () {
        var _this = this;
        this.fileConverted = false;
        this.changeFileConvertedEvent.emit(this.fileConverted);
        this.spinnerService.show();
        this.requestService.convert(this.http, this.fileName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.errorEvent.emit(err.error);
            _this.spinnerService.hide();
            return _this.error.handleError(err);
        }))
            .subscribe(function (response) {
            if (response.status === 200) {
                console.log("Converted");
                _this.fileConverted = true;
                _this.changeFileConvertedEvent.emit(_this.fileConverted);
            }
            _this.spinnerService.hide();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConvertComponent.prototype, "fileConverted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConvertComponent.prototype, "changeFileConvertedEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConvertComponent.prototype, "errorEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConvertComponent.prototype, "fileName", void 0);
    ConvertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-convert',
            template: __webpack_require__(/*! ./convert.component.html */ "./src/app/convert/convert.component.html"),
            styles: [__webpack_require__(/*! ./convert.component.css */ "./src/app/convert/convert.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"],
            _services_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]])
    ], ConvertComponent);
    return ConvertComponent;
}());



/***/ }),

/***/ "./src/app/download/download.component.css":
/*!*************************************************!*\
  !*** ./src/app/download/download.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/download/download.component.html":
/*!**************************************************!*\
  !*** ./src/app/download/download.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-stroked-button color=\"accent\" class=\"btn btn-primary\" (click)=\"downloadFile()\"><i class=\"fa fa-file-pdf-o\"></i> Download</button>\n"

/***/ }),

/***/ "./src/app/download/download.component.ts":
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "../../../../node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(http, requestService) {
        this.http = http;
        this.requestService = requestService;
    }
    DownloadComponent.prototype.ngOnInit = function () {
    };
    DownloadComponent.prototype.downloadFile = function () {
        var mediaType = 'application/msword';
        var fileToDownload = this.fileName.replace(".pdf", ".doc");
        this.requestService.download(this.http, this.fileName, fileToDownload)
            .subscribe(function (response) {
            var blob = new Blob([response], { type: mediaType });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, fileToDownload);
        }, function (e) { Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DownloadComponent.prototype, "fileName", void 0);
    DownloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.css */ "./src/app/download/download.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-stroked-button color=\"primary\" (click)=\"logout()\">\n  Sign out\n</button>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
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


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http) {
        this.http = http;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        this.clear();
    };
    LogoutComponent.prototype.clear = function () {
        return this.http.post('/clear', null)
            .subscribe(function () {
            console.log("Cleared!");
        }, function (err) {
            console.log("Clearing Error:", err);
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/services/error.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorService = /** @class */ (function () {
    function ErrorService() {
    }
    ErrorService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
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

var RequestService = /** @class */ (function () {
    function RequestService() {
    }
    RequestService.prototype.uploadFile = function (http, file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return http.post('/', formData, { observe: 'response', responseType: 'text' });
    };
    RequestService.prototype.convert = function (http, fileName) {
        return http.post('/convert/' + fileName, null, { observe: 'response', responseType: 'text' });
    };
    RequestService.prototype.download = function (http, fileName, result) {
        return http.post('/download/' + fileName, { location: result }, { responseType: 'blob' });
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" (change)=\"onFileChange($event)\" id=\"selectedFile\" accept=\".pdf\" style=\"display: none;\" />\n<button mat-stroked-button color=\"accent\" onclick=\"document.getElementById('selectedFile').click();\">Browse...</button>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadComponent = /** @class */ (function () {
    function UploadComponent(http, requestService, error) {
        this.http = http;
        this.requestService = requestService;
        this.error = error;
        this.changeFileNameEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeFileUploadedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeFileConvertedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.uploadTitle = "Upload";
        this.fileUploaded = false;
        this.changeFileUploadedEvent.emit(this.fileUploaded);
        this.changeFileConvertedEvent.emit(false);
        this.fileName = "";
        this.changeFileNameEvent.emit(this.fileName);
    };
    UploadComponent.prototype.onFileChange = function (event) {
        this.fileUploaded = false;
        this.changeFileUploadedEvent.emit(this.fileUploaded);
        this.changeFileConvertedEvent.emit(false);
        this.uploadFile(event.target.files);
    };
    UploadComponent.prototype.uploadFile = function (files) {
        var _this = this;
        if (files.length == 0) {
            console.log("No file selected!");
            return;
        }
        var file = files[0];
        this.fileName = file.name;
        this.changeFileNameEvent.emit(this.fileName);
        this.requestService.uploadFile(this.http, file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            _this.errorEvent.emit(err.error);
            return _this.error.handleError(err);
        }))
            .subscribe(function (response) {
            if (response.status === 200) {
                console.log("Upload done");
                _this.fileUploaded = true;
                _this.changeFileUploadedEvent.emit(_this.fileUploaded);
                _this.fileName = file.name;
                _this.changeFileNameEvent.emit(_this.fileName);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UploadComponent.prototype, "fileUploaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UploadComponent.prototype, "fileName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "changeFileNameEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "changeFileUploadedEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "changeFileConvertedEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "errorEvent", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], UploadComponent);
    return UploadComponent;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\pspahn\Downloads\angular_spring_inbuild\ui\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map