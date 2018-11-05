webpackJsonp([1],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root"  tabTitle="View" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Post" tabIcon="add"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http, modal) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modal = modal;
    }
    AboutPage.prototype.getAllPosts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get().subscribe(function (data) {
                            console.log(data);
                            _this.posts = data;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        this.getAllPosts();
    };
    AboutPage.prototype.openModal = function (post) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_0__detail_detail__["a" /* DetailPage */].name, { post: post });
        modal.present();
        modal.onDidDismiss(function () {
            _this.getAllPosts();
        });
    };
    AboutPage.prototype.doRefresh = function (event) {
        this.getAllPosts();
        event.complete();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Visualizar Posts\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="circles">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let post of posts" (click)="openModal(post)">\n      <img src="{{post.url}}" />\n      <h2>{{post.title}}</h2>\n      <p>{{post.subtitle}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */]) === "function" && _c || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, formbuilder) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.formbuilder = formbuilder;
        this.rform = this.formbuilder.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'subtitle': [null],
            'url': [null],
            'author': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'likes': [0],
            'name': [null]
        });
    }
    HomePage.prototype.post = function (post) {
        console.log(post);
        this.http.post(post);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Postar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <button ion-button (click)=\'postProduct("teste", "autor")\'>Post</button> -->\n  <form [formGroup]=\'rform\' (ngSubmit)="post(rform.value)">\n    <ion-item>\n      <ion-label floating >Título</ion-label>\n      <ion-input type="text" formControlName="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating >Mensagem</ion-label>\n      <ion-input type="text" formControlName="subtitle"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating >Link de foto</ion-label>\n      <ion-input type="text" formControlName="url"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating >Autor</ion-label>\n      <ion-input type="text" formControlName="author"></ion-input>\n    </ion-item>\n    <button ion-button full type=\'submit\' [disabled]=\'!rform.valid\'>Postar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, http, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.comment = "";
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        this.post = this.navParams.get('post');
    };
    DetailPage.prototype.like = function (post) {
        var _this = this;
        if (this.liked) {
            return;
        }
        this.liked = true;
        this.http.likePost(post._id, post).catch(function (err) { return console.log(err); }).then(function (val) {
            _this.http.getByID(post._id).then(function (val) {
                console.log(val);
                _this.post = val;
            });
        }).catch(function (err) { return console.log(err); });
    };
    DetailPage.prototype.commentPost = function (post) {
        var _this = this;
        if (!this.comment)
            return;
        this.http.commentPost(post._id, post, this.comment).catch(function (err) { return console.log(err); }).then(function () {
            _this.http.getByID(post._id).then(function (val) { return _this.post = val; });
        });
    };
    DetailPage.prototype.deletePost = function (id) {
        var _this = this;
        this.http.delete(id).then(function (val) { return _this.viewCtrl.dismiss(); });
    };
    DetailPage.prototype.CloseModal = function () {
        this.viewCtrl.dismiss();
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes</ion-title>\n    <button ion-fab mini (click)="CloseModal()" style="background-color: transparent ">\n      <ion-icon name="arrow-back" style="color:black; background-color: transparent"></ion-icon>\n    </button>\n    <button ion-fab mini (click)="deletePost(post._id)" style="background-color: transparent">\n      <ion-icon name="trash" style="color: black; background-color: transparent"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="{{post?.url}}" />\n\n  <h2>{{post?.title}}</h2>\n  <p>{{post?.subtitle}}</p>\n  <ion-item no-lines>Autor : {{post?.author}}</ion-item>\n\n  <ion-item no-lines (click)="like(post)">\n    <ion-icon *ngIf="liked" name="heart" style="color:red"></ion-icon>\n    <ion-icon *ngIf="!liked" name="heart" style="color: black"></ion-icon>{{post?.likes}}\n  </ion-item>\n\n\n  <ion-item no-lines *ngFor="let comment of post?.comments">{{comment}}</ion-item>\n  <ion-input placeholder="Comentário" [(ngModel)]="comment"></ion-input>\n  <button ion-button round outline style="background-color: transparent; color:black" (click)="commentPost(post)">Comentar</button>\n</ion-content>'/*ion-inline-end:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]) === "function" && _d || Object])
    ], DetailPage);
    return DetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\JAVA_GIT\Aula-JAVA\ionicMongo\store\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
    }
    //método retorna todos os posts
    HttpProvider.prototype.get = function () {
        return this.http.get("http://localhost:3000/posts");
        //.map(res => res.json());
    };
    //método retorna post escolhido
    HttpProvider.prototype.getByID = function (id) {
        return this.http.get("http://localhost:3000/posts/" + id).toPromise();
    };
    //método cria post e salva na base de dados
    HttpProvider.prototype.post = function (post) {
        // let headers = new Headers();
        // headers.append('Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET')
        // headers.append('Content-Type', 'application/json');
        this.http.post("http://localhost:3000/posts", __assign({}, post))
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    //método deleta post escolhido
    HttpProvider.prototype.delete = function (id) {
        return this.http.delete("http://localhost:3000/posts/" + id).toPromise();
    };
    //método incrementa atributo likes do post
    HttpProvider.prototype.likePost = function (id, post) {
        post.likes = post.likes + 1;
        return this.http.post("http://localhost:3000/posts/" + id + "/likes", __assign({}, post)).toPromise();
    };
    //método adiciona comentário ao vetor de comentários de post escolhido
    HttpProvider.prototype.commentPost = function (id, post, comment) {
        if (!post.comments)
            post.comments = [];
        post.comments.push(comment);
        return this.http.post("http://localhost:3000/posts/" + id + "/comments", __assign({}, post)).toPromise();
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], HttpProvider);
    return HttpProvider;
    var _a;
}());

//# sourceMappingURL=http.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map