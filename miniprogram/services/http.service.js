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
            method: option.method,
            url: api_config_1.apiConfig.baseUrl + option.url,
            header: __assign({}, this.headers, option.header),
            data: option.data,
            success: function (res) {
                if (res.statusCode.toString().startsWith('2')) {
                    option.success && option.success(res);
                }
                else {
                    _this.showError(1);
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
            duration: 3000,
            icon: 'none'
        });
    };
    return HttpService;
}());
exports.HttpService = HttpService;
exports.httpService = new HttpService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBaUQ7QUFLakQsSUFBTSxJQUFJLEdBQUc7SUFDWCxDQUFDLEVBQUUsWUFBWTtJQUNmLEdBQUcsRUFBRSxVQUFVO0lBQ2YsSUFBSSxFQUFFLE9BQU87Q0FDZCxDQUFBO0FBRUQ7SUFBQTtRQUNFLFlBQU8sR0FBWTtZQUNqQixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLE1BQU0sRUFBRSxzQkFBUyxDQUFDLE1BQU07U0FDekIsQ0FBQTtJQXFDSCxDQUFDO0lBbkNDLDZCQUFPLEdBQVAsVUFBUSxNQUF3QjtRQUFoQyxpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDdEI7UUFFRCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLEdBQUcsRUFBRSxzQkFBUyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRztZQUNuQyxNQUFNLGVBQU8sSUFBSSxDQUFDLE9BQU8sRUFBSyxNQUFNLENBQUMsTUFBTSxDQUFFO1lBQzdDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDdEM7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDbEI7WUFDSCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRztnQkFDUCxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTywrQkFBUyxHQUFqQixVQUFrQixTQUFpQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLENBQUMsQ0FBQTtTQUNkO1FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBekNZLGtDQUFXO0FBMkNYLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlDb25maWcgfSBmcm9tICcuLi9jb25maWdzL2FwaS5jb25maWcnXHJcblxyXG5pbnRlcmZhY2UgSGVhZGVycyB7XHJcbiAgW2hlYWRlck5hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlclxyXG59XHJcbmNvbnN0IHRpcHMgPSB7XHJcbiAgMTogJ+aKseatie+8jOWHuueOsOS6huS4gOS4qumUmeivrycsXHJcbiAgNDAxOiAnYXBwa2V55peg5pWIJyxcclxuICAzMDAwOiAn5pyf5YiK5LiN5a2Y5ZyoJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIGhlYWRlcnM6IEhlYWRlcnMgPSB7XHJcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgYXBwa2V5OiBhcGlDb25maWcuYXBwa2V5XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KG9wdGlvbjogd3guUmVxdWVzdE9wdGlvbikge1xyXG4gICAgaWYgKCFvcHRpb24ubWV0aG9kKSB7XHJcbiAgICAgIG9wdGlvbi5tZXRob2QgPSAnR0VUJ1xyXG4gICAgfVxyXG5cclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6IG9wdGlvbi5tZXRob2QsXHJcbiAgICAgIHVybDogYXBpQ29uZmlnLmJhc2VVcmwgKyBvcHRpb24udXJsLFxyXG4gICAgICBoZWFkZXI6IHsgLi4udGhpcy5oZWFkZXJzLCAuLi5vcHRpb24uaGVhZGVyIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbi5kYXRhLFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoJzInKSkge1xyXG4gICAgICAgICAgb3B0aW9uLnN1Y2Nlc3MgJiYgb3B0aW9uLnN1Y2Nlc3MocmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvcigxKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICBvcHRpb24uZmFpbCAmJiBvcHRpb24uZmFpbChlcnIpXHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IoMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yKGVycm9yQ29kZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWVycm9yQ29kZSkge1xyXG4gICAgICBlcnJvckNvZGUgPSAxXHJcbiAgICB9XHJcblxyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHRpcHNbZXJyb3JDb2RlXSxcclxuICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgIGljb246ICdub25lJ1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodHRwU2VydmljZSA9IG5ldyBIdHRwU2VydmljZSgpXHJcbiJdfQ==