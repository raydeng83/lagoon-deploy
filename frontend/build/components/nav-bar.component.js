System.register(['angular2/core', 'angular2/router', '../services/login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_service_1;
    var NavBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            NavBar = (function () {
                function NavBar(loginService) {
                    this.loginService = loginService;
                    this.myLocalStorage = localStorage;
                }
                NavBar.prototype.onClick = function () {
                    if (this.loginService.checkLogin()) {
                        this.loginService.logout();
                    }
                };
                NavBar = __decorate([
                    core_1.Component({
                        selector: 'nav-bar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [login_service_1.LoginService],
                        templateUrl: 'app/components/nav-bar.component.html'
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], NavBar);
                return NavBar;
            }());
            exports_1("NavBar", NavBar);
        }
    }
});
//# sourceMappingURL=nav-bar.component.js.map