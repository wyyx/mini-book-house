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
    HttpService.prototype.setHeader = function (headerName, headerValue) {
        this.headers[headerName] = headerValue;
    };
    HttpService.prototype.request = function (option) {
        var _this = this;
        if (!option.method) {
            option.method = 'GET';
        }
        wx.request(__assign({}, option, { url: api_config_1.apiConfig.baseUrl + option.url, header: this.headers, success: function (res) {
                if (res.statusCode.toString().startsWith('2')) {
                    option.success && option.success(res);
                }
                else {
                    _this.showError(res.statusCode);
                }
            }, fail: function (err) {
                option.fail && option.fail(err);
                _this.showError(1);
            } }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBaUQ7QUFLakQsSUFBTSxJQUFJLEdBQUc7SUFDWCxDQUFDLEVBQUUsWUFBWTtJQUNmLEdBQUcsRUFBRSxVQUFVO0lBQ2YsSUFBSSxFQUFFLE9BQU87Q0FDZCxDQUFBO0FBRUQ7SUFBQTtRQUNFLFlBQU8sR0FBWTtZQUNqQixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLE1BQU0sRUFBRSxzQkFBUyxDQUFDLE1BQU07U0FDekIsQ0FBQTtJQXdDSCxDQUFDO0lBdENDLCtCQUFTLEdBQVQsVUFBVSxVQUFrQixFQUFFLFdBQTRCO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxDQUFBO0lBQ3hDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsTUFBd0I7UUFBaEMsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQ3RCO1FBRUQsRUFBRSxDQUFDLE9BQU8sY0FDTCxNQUFNLElBQ1QsR0FBRyxFQUFFLHNCQUFTLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUNwQixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDdEM7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQy9CO1lBQ0gsQ0FBQyxFQUNELElBQUksRUFBRSxVQUFBLEdBQUc7Z0JBQ1AsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25CLENBQUMsSUFDRCxDQUFBO0lBQ0osQ0FBQztJQUVPLCtCQUFTLEdBQWpCLFVBQWtCLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFBO1NBQ2Q7UUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsUUFBUSxFQUFFLEtBQUs7WUFDZixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksa0NBQVc7QUE4Q1gsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3MvYXBpLmNvbmZpZydcclxuXHJcbmludGVyZmFjZSBIZWFkZXJzIHtcclxuICBbaGVhZGVyTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyXHJcbn1cclxuY29uc3QgdGlwcyA9IHtcclxuICAxOiAn5oqx5q2J77yM5Ye6546w5LqG5LiA5Liq6ZSZ6K+vJyxcclxuICA0MDE6ICdhcHBrZXnml6DmlYgnLFxyXG4gIDMwMDA6ICfmnJ/liIrkuI3lrZjlnKgnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgaGVhZGVyczogSGVhZGVycyA9IHtcclxuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICBhcHBrZXk6IGFwaUNvbmZpZy5hcHBrZXlcclxuICB9XHJcblxyXG4gIHNldEhlYWRlcihoZWFkZXJOYW1lOiBzdHJpbmcsIGhlYWRlclZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgIHRoaXMuaGVhZGVyc1toZWFkZXJOYW1lXSA9IGhlYWRlclZhbHVlXHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KG9wdGlvbjogd3guUmVxdWVzdE9wdGlvbikge1xyXG4gICAgaWYgKCFvcHRpb24ubWV0aG9kKSB7XHJcbiAgICAgIG9wdGlvbi5tZXRob2QgPSAnR0VUJ1xyXG4gICAgfVxyXG5cclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAuLi5vcHRpb24sXHJcbiAgICAgIHVybDogYXBpQ29uZmlnLmJhc2VVcmwgKyBvcHRpb24udXJsLFxyXG4gICAgICBoZWFkZXI6IHRoaXMuaGVhZGVycyxcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKS5zdGFydHNXaXRoKCcyJykpIHtcclxuICAgICAgICAgIG9wdGlvbi5zdWNjZXNzICYmIG9wdGlvbi5zdWNjZXNzKHJlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IocmVzLnN0YXR1c0NvZGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgIG9wdGlvbi5mYWlsICYmIG9wdGlvbi5mYWlsKGVycilcclxuICAgICAgICB0aGlzLnNob3dFcnJvcigxKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpIHtcclxuICAgIGlmICghZXJyb3JDb2RlKSB7XHJcbiAgICAgIGVycm9yQ29kZSA9IDFcclxuICAgIH1cclxuXHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogdGlwc1tlcnJvckNvZGVdLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMDAsXHJcbiAgICAgIGljb246ICdub25lJ1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodHRwU2VydmljZSA9IG5ldyBIdHRwU2VydmljZSgpXHJcbiJdfQ==