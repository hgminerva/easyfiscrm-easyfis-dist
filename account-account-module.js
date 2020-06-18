(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_router_activate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.router.activate */ "./src/app/app.router.activate.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/account/layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");







var routes = [
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], canActivate: [_app_router_activate__WEBPACK_IMPORTED_MODULE_4__["AppRouterActivate"]],
        children: [
            { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_app_router_activate__WEBPACK_IMPORTED_MODULE_4__["AppRouterActivate"]] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_app_router_activate__WEBPACK_IMPORTED_MODULE_4__["AppRouterActivate"]] }
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/account/layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");







var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/layout/layout.component.css":
/*!*****************************************************!*\
  !*** ./src/app/account/layout/layout.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWNjb3VudC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/account/layout/layout.component.html":
/*!******************************************************!*\
  !*** ./src/app/account/layout/layout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/account/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/account/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/account/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/account/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/account/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/account/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header.masthead {\r\n    position: relative;\r\n    background-color: #343a40;\r\n    background: url('coffee.jpg') no-repeat center center;\r\n    background-size: cover;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n    height: calc(100vh);\r\n  }\r\n  \r\n  header.masthead .overlay {\r\n    position: absolute;\r\n    background-color: #000000;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0.6;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHNEQUE2RTtJQUk3RSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0dBQ2QiLCJmaWxlIjoiYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlci5tYXN0aGVhZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy9jb2ZmZWUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/account/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\"></div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <a routerLink=\"/landing/home\"><img src=\"../../../assets/logo/easyfislogo.png\" height=\"40\" alt=\"\"></a>\r\n            <br />\r\n            <div class=\"card-title\">\r\n              Sign in to continue to application.\r\n            </div>\r\n            <hr />\r\n            <br />\r\n            <form (ngSubmit)=\"login()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"inpUsername\">Username </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inpUsername\" [(ngModel)]=\"loginModel.UserName\"\r\n                  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Username\" required />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"inpPassword\">Password </label>\r\n                <input type=\"password\" class=\"form-control\" id=\"inpPassword\" [(ngModel)]=\"loginModel.Password\"\r\n                  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Password\" required />\r\n              </div>\r\n              <br />\r\n              <input type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"btnLogin\" value=\"Sign in\" />\r\n              <br />\r\n              <hr />\r\n              <div class=\"text-center\">\r\n                <!-- <small>\r\n                  <b>Easyfis CRM</b>\r\n                  <br />\r\n                  V.1.02032019.1749.NOR\r\n                </small> -->\r\n                <small>\r\n                  <b>Easyfis CRM</b>\r\n                  <br />\r\n                  V.1.05182020.1208.ORE\r\n                </small>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\"></div>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/account/login/login.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, toastr) {
        this.loginService = loginService;
        this.router = router;
        this.toastr = toastr;
        this.loginModel = {
            UserName: "",
            Password: ""
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var btnLogin = document.getElementById("btnLogin");
        btnLogin.setAttribute("disabled", "disabled");
        btnLogin.setAttribute("value", "Signing in...");
        var inpUsername = document.getElementById("inpUsername");
        inpUsername.setAttribute("disabled", "disabled");
        var inpPassword = document.getElementById("inpPassword");
        inpPassword.setAttribute("disabled", "disabled");
        if (inpUsername.value === "" || inpPassword.value === "") {
            this.toastr.error('Username or Password is empty. Please do not leave blanks.', 'Error');
            btnLogin.removeAttribute("disabled");
            btnLogin.setAttribute("value", "Sign in");
            inpUsername.removeAttribute("disabled");
            inpPassword.removeAttribute("disabled");
        }
        else {
            this.loginService.login(this.loginModel.UserName, this.loginModel.Password);
            this.loginSub = this.loginService.loginObservable.subscribe(function (data) {
                if (data[0]) {
                    setTimeout(function () {
                        _this.router.navigate(['/software']);
                        _this.toastr.success(data[1], 'Success');
                    }, 100);
                }
                else {
                    _this.toastr.error(data[1], 'Error');
                    btnLogin.removeAttribute("disabled");
                    btnLogin.setAttribute("value", "Sign in");
                    inpUsername.removeAttribute("disabled");
                    inpPassword.removeAttribute("disabled");
                }
                if (_this.loginSub != null)
                    _this.loginSub.unsubscribe();
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginSub != null)
            this.loginSub.unsubscribe();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/account/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/account/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/account/login/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/account/login/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LoginService = /** @class */ (function () {
    function LoginService(appSettings, httpClient) {
        this.appSettings = appSettings;
        this.httpClient = httpClient;
        this.defaultAPIHostURL = this.appSettings.defaultAPIURLHost;
        this.loginSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loginObservable = this.loginSource.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.defaultAPIHostURL + '/token';
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.httpClient.post(url, body, options).subscribe(function (response) {
            localStorage.setItem('access_token', response["access_token"]);
            localStorage.setItem('expires_in', response["expires_in"]);
            localStorage.setItem('token_type', response["token_type"]);
            localStorage.setItem('username', response["userName"]);
            _this.getUserRights(response["userName"]);
            _this.getUserGroup(response["userName"]);
            _this.loginSource.next([true, "Login Successful."]);
        }, function (error) {
            _this.loginSource.next([false, error["error"].error_description]);
        });
    };
    LoginService.prototype.getUserRights = function (username) {
        var url = this.defaultAPIHostURL + '/token';
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        };
        var userRights = new Array();
        this.httpClient.get(this.defaultAPIHostURL + "/api/crm/mst/user/form/list/UserFormByUserName/" + username, options).subscribe(function (response) {
            var results = response;
            if (results["length"] > 0) {
                for (var i = 0; i <= results["length"] - 1; i++) {
                    userRights.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        FormId: results[i].FormId,
                        Form: results[i].Form,
                        CanAdd: results[i].CanAdd,
                        CanEdit: results[i].CanEdit,
                        CanDelete: results[i].CanDelete,
                        CanLock: results[i].CanLock,
                        CanUnlock: results[i].CanUnlock,
                        CanCancel: results[i].CanCancel,
                        CanPrint: results[i].CanPrint
                    });
                }
            }
            localStorage.setItem('userRights', JSON.stringify(userRights));
        });
    };
    LoginService.prototype.getUserGroup = function (username) {
        var url = this.defaultAPIHostURL + '/token';
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        };
        var userGroup;
        this.httpClient.get(this.defaultAPIHostURL + "/api/crm/user/userGroup/" + username, options).subscribe(function (response) {
            var result = response;
            localStorage.setItem('userGroup', result.toString());
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map