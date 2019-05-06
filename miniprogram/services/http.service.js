"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_config_1 = require("../configs/api.config");
var tips = {
    1: '抱歉，出现了一个错误',
    401: 'appkey无效',
    3000: '期刊不存在'
};
var HttpService = (function () {
    function HttpService() {
        this.headers = {
            'content-type': 'application/json',
            appkey: api_config_1.apiConfig.appkey
        };
    }
    HttpService.prototype.request = function (option) {
        var _this = this;
        if (!option.method) {
            option.method = 'GET';
        }
        wx.request({
            url: api_config_1.apiConfig.baseUrl + option.url,
            header: __assign({}, this.headers, option.header),
            success: function (res) {
                if (res.statusCode.toString().startsWith('2')) {
                    option.success && option.success(res);
                }
                else {
                    _this.showError(res.statusCode);
                }
            },
            fail: function (err) {
                option.fail && option.fail(err);
                _this.showError(1);
            }
        });
    };
    HttpService.prototype.showError = function (errorCode) {
        if (!errorCode) {
            errorCode = 1;
        }
        wx.showToast({
            title: tips[errorCode],
            duration: 10000,
            icon: 'none'
        });
    };
    return HttpService;
}());
exports.HttpService = HttpService;
exports.httpService = new HttpService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBaUQ7QUFLakQsSUFBTSxJQUFJLEdBQUc7SUFDWCxDQUFDLEVBQUUsWUFBWTtJQUNmLEdBQUcsRUFBRSxVQUFVO0lBQ2YsSUFBSSxFQUFFLE9BQU87Q0FDZCxDQUFBO0FBRUQ7SUFBQTtRQUNFLFlBQU8sR0FBWTtZQUNqQixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLE1BQU0sRUFBRSxzQkFBUyxDQUFDLE1BQU07U0FDekIsQ0FBQTtJQW1DSCxDQUFDO0lBakNDLDZCQUFPLEdBQVAsVUFBUSxNQUF3QjtRQUFoQyxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDdEI7UUFFRCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLHNCQUFTLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHO1lBQ25DLE1BQU0sZUFBTyxJQUFJLENBQUMsT0FBTyxFQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUU7WUFDN0MsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3QyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ3RDO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUMvQjtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQSxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLCtCQUFTLEdBQWpCLFVBQWtCLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFBO1NBQ2Q7UUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsUUFBUSxFQUFFLEtBQUs7WUFDZixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksa0NBQVc7QUF5Q1gsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3MvYXBpLmNvbmZpZydcclxuXHJcbmludGVyZmFjZSBIZWFkZXJzIHtcclxuICBbaGVhZGVyTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyXHJcbn1cclxuY29uc3QgdGlwcyA9IHtcclxuICAxOiAn5oqx5q2J77yM5Ye6546w5LqG5LiA5Liq6ZSZ6K+vJyxcclxuICA0MDE6ICdhcHBrZXnml6DmlYgnLFxyXG4gIDMwMDA6ICfmnJ/liIrkuI3lrZjlnKgnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgaGVhZGVyczogSGVhZGVycyA9IHtcclxuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICBhcHBrZXk6IGFwaUNvbmZpZy5hcHBrZXlcclxuICB9XHJcblxyXG4gIHJlcXVlc3Qob3B0aW9uOiB3eC5SZXF1ZXN0T3B0aW9uKSB7XHJcbiAgICBpZiAoIW9wdGlvbi5tZXRob2QpIHtcclxuICAgICAgb3B0aW9uLm1ldGhvZCA9ICdHRVQnXHJcbiAgICB9XHJcblxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYXBpQ29uZmlnLmJhc2VVcmwgKyBvcHRpb24udXJsLFxyXG4gICAgICBoZWFkZXI6IHsgLi4udGhpcy5oZWFkZXJzLCAuLi5vcHRpb24uaGVhZGVyIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnMicpKSB7XHJcbiAgICAgICAgICBvcHRpb24uc3VjY2VzcyAmJiBvcHRpb24uc3VjY2VzcyhyZXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHJlcy5zdGF0dXNDb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICBvcHRpb24uZmFpbCAmJiBvcHRpb24uZmFpbChlcnIpXHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IoMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yKGVycm9yQ29kZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWVycm9yQ29kZSkge1xyXG4gICAgICBlcnJvckNvZGUgPSAxXHJcbiAgICB9XHJcblxyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHRpcHNbZXJyb3JDb2RlXSxcclxuICAgICAgZHVyYXRpb246IDEwMDAwLFxyXG4gICAgICBpY29uOiAnbm9uZSdcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaHR0cFNlcnZpY2UgPSBuZXcgSHR0cFNlcnZpY2UoKVxyXG4iXX0=