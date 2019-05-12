"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_service_1 = require("./http.service");
var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthService.prototype.checkAuth = function () {
        return new Promise(function (resolve, reject) {
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting['scope.userInfo']) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }
            });
        });
    };
    AuthService.prototype.getUserInfo = function () {
        return new Promise(function (resolve, reject) {
            wx.getUserInfo({
                success: function (res) {
                    resolve(res.userInfo);
                }
            });
        });
    };
    return AuthService;
}(http_service_1.HttpService));
exports.AuthService = AuthService;
exports.authService = new AuthService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUU1QztJQUFpQywrQkFBVztJQUE1Qzs7SUF3QkEsQ0FBQztJQXZCQywrQkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUNkO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtxQkFDZDtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDdkIsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUFpQywwQkFBVyxHQXdCM0M7QUF4Qlksa0NBQVc7QUEwQlgsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZSB7XHJcbiAgY2hlY2tBdXRoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpOiBQcm9taXNlPHd4LlVzZXJJbmZvPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKVxyXG4iXX0=