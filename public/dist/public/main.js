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

module.exports = "div.allCakes{\n    max-width:1200px;\n    height:500px;\n    overflow:scroll;\n    border:1px solid black;\n    margin:auto;\n    text-align: center;\n}\ndiv.allCakes img{\n    width:250px;\n    height:250px;\n    border:8px solid salmon;\n    margin:10px;\n    vertical-align: top;\n}\nh1{\n    text-align: center;\n}\nform.create{\n    border:1px solid black;\n    width:400px;\n    margin:auto;\n}\nform.create h2{\n    text-align: center;\n}\nform.create input{\n    width:300px;\n    font-size:14pt;\n    display:block;\n    margin:auto;\n}\nform.create input.turnin{\n    width:150px;\n}\ndiv.cake{\n    display:inline-block;\n    width:290px;\n}\ndiv.cake form textarea{\n    resize: none;\n    width:230px;\n    height:40px;\n}\ndiv.cake form p{\n    margin:5px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<p>Response:</p>\n<p>{{response | json }}</p>\n<form class='create' (submit)='createCake()'>\n  <h2>Create a new Cake!</h2>\n  <p>{{newCake | json}}</p>\n  <p>Baker Name:</p>\n  <input type='text' name='baker' [(ngModel)]='newCake.baker' placeholder='baker'>\n  <p>Image Path:</p>\n  <input type='text' name='imagePath' [(ngModel)]='newCake.imagePath' placeholder='image path'><br>\n  <input type='submit' class='turnin' value='SUBMIT'>\n</form>\n<h1>All Cakes</h1>\n<div class='allCakes'>\n  <div *ngFor='let cake of cakes' class='cake'>\n      <img src='{{cake.imagePath}}' alt='Cake Image' (click)='cakeClicked(cake._id)'>\n      <form (submit)='createRating(cake._id)'>\n          <p>Rating: <select name='rating' [(ngModel)]=cakeRating>\n            <option value=1>1</option>\n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option>\n          </select></p>\n          <p>Comment:</p>\n          <textarea name='comment' [(ngModel)]='cakeComment'></textarea><br>\n          <input type='submit' value='Submit'>\n        </form>\n  </div>\n\n  <!-- <img *ngFor='let cake of cakes' src='{{cake.imagePath}}' alt='Cake Image' (click)='cakeClicked(cake._id)'> -->\n</div>\n<app-cake-review *ngIf='selected' [cake]='showCake' [ratings]='ratings' [average]='avgRating'></app-cake-review>\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
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
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'public';
        this.cakes = [];
        this.ratings = [];
        this.avgRating = 0;
        this.newCake = { baker: '', imagePath: '' };
        this.selected = false;
        this.showCake = { baker: '', imagePath: '' };
        this.cakeRating = 5;
        this.cakeComment = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllCakes();
    };
    AppComponent.prototype.createCake = function () {
        var _this = this;
        console.log("Creating this cake");
        var cakeObservable = this._httpService.createCake(this.newCake);
        cakeObservable.subscribe(function (data) {
            _this.response = data;
            _this.getAllCakes();
            _this.newCake = { baker: '', imagePath: '' };
        });
    };
    AppComponent.prototype.getAllCakes = function () {
        var _this = this;
        console.log("Fetching all cakes");
        var cakeObservable = this._httpService.fetchAllCakes();
        cakeObservable.subscribe(function (data) {
            _this.response = data;
            _this.cakes = data['cakes'];
        });
    };
    AppComponent.prototype.cakeClicked = function (_id) {
        var _this = this;
        console.log('Clicked on a cake');
        this.selected = true;
        var cakeObservable = this._httpService.getOneCake(_id);
        cakeObservable.subscribe(function (data) {
            _this.response = data;
            if (data['success'] == 1) {
                _this.showCake = data['cake'];
                _this.ratings = _this.showCake.ratings;
                var sum = 0;
                for (var i = 0; i < _this.ratings.length; i++) {
                    sum += _this.ratings[i].rating;
                }
                _this.avgRating = sum / _this.ratings.length;
            }
        });
    };
    AppComponent.prototype.createRating = function (_id) {
        var _this = this;
        var observable = this._httpService.createRating(_id, this.cakeRating, this.cakeComment);
        observable.subscribe(function (data) {
            _this.response = data;
            _this.cakeComment = '';
            _this.cakeRating = 5;
        });
        console.log("Creating rating");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cake_review_cake_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cake-review/cake-review.component */ "./src/app/cake-review/cake-review.component.ts");
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
                _cake_review_cake_review_component__WEBPACK_IMPORTED_MODULE_6__["CakeReviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cake-review/cake-review.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cake-review/cake-review.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    width:300px;\n    height:300px;\n}\ndiv.reviewBox{\n    border:1px solid black;\n    margin:20px;\n    height:430px;\n    overflow: scroll;\n}\ndiv.left{\n    border:1px solid red;\n    width:400px;\n    margin:10px;\n    display:inline-block;\n}\ndiv.right{\n    display:inline-block;\n    vertical-align: top;\n}\nform textarea{\n    width:300px;\n    height:60px;\n    resize: none;\n}"

/***/ }),

/***/ "./src/app/cake-review/cake-review.component.html":
/*!********************************************************!*\
  !*** ./src/app/cake-review/cake-review.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='reviewBox'>\n  <div class='left'>\n      <h1>Baked by {{cake.baker}}</h1>\n      <img src={{cake.imagePath}} alt='cake image'>\n  </div>\n  <div class='right'>\n    <h2>Reviews</h2>\n    <h3>Average Rating: {{average}} &#9733;</h3>\n    <div class='rating' *ngFor='let rating of ratings'>\n      <p>{{rating.rating}} &#9733; - {{rating.comment}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cake-review/cake-review.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cake-review/cake-review.component.ts ***!
  \******************************************************/
/*! exports provided: CakeReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeReviewComponent", function() { return CakeReviewComponent; });
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

var CakeReviewComponent = /** @class */ (function () {
    function CakeReviewComponent() {
        this.cake = {};
        this.ratings = [];
        this.average = -1;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CakeReviewComponent.prototype, "cake", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CakeReviewComponent.prototype, "ratings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CakeReviewComponent.prototype, "average", void 0);
    CakeReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cake-review',
            template: __webpack_require__(/*! ./cake-review.component.html */ "./src/app/cake-review/cake-review.component.html"),
            styles: [__webpack_require__(/*! ./cake-review.component.css */ "./src/app/cake-review/cake-review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CakeReviewComponent);
    return CakeReviewComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
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


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.createCake = function (newCake) {
        return this._http.post('/cakes', newCake);
    };
    HttpService.prototype.fetchAllCakes = function () {
        return this._http.get('/cakes');
    };
    HttpService.prototype.getOneCake = function (_id) {
        return this._http.get("/cakes/" + _id);
    };
    HttpService.prototype.createRating = function (_id, rating, comment) {
        return this._http.post('/rating', { cakeID: _id, rating: rating, comment: comment });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! /Users/Ashwin/Documents/CodingDojo/MEAN/Angular/RateMyCakes/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map