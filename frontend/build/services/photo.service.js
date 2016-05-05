System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var PhotoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PhotoService = (function () {
                function PhotoService(http) {
                    this.http = http;
                }
                PhotoService.prototype.getPhotos = function () {
                    var url = "http://127.0.0.1:8080/lagoon/photo/allPhotos";
                    return this.http.get(url);
                };
                PhotoService.prototype.getPhotoById = function (photoId) {
                    var tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/photo/photoId";
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
                    return this.http.post(tokenUrl1, JSON.stringify(photoId), { headers: headers1 });
                };
                PhotoService.prototype.getPhotosByUser = function (user) {
                    var tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/photo/user";
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
                    return this.http.post(tokenUrl1, JSON.stringify(user), { headers: headers1 });
                };
                PhotoService.prototype.updatePhoto = function (photo) {
                    var tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/photo/update";
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
                    return this.http.post(tokenUrl1, JSON.stringify(photo), { headers: headers1 });
                };
                PhotoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PhotoService);
                return PhotoService;
            }());
            exports_1("PhotoService", PhotoService);
        }
    }
});
//# sourceMappingURL=photo.service.js.map