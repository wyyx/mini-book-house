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
    HttpService.prototype.request = function (_a) {
        var _this = this;
        var path = _a.path, _b = _a.method, method = _b === void 0 ? 'GET' : _b, _c = _a.data, data = _c === void 0 ? {} : _c, _d = _a.headers, headers = _d === void 0 ? {} : _d;
        return new Promise(function (resolve, reject) {
            wx.request({
                method: method,
                url: api_config_1.apiConfig.baseUrl + path,
                header: __assign({}, _this.headers, headers),
                data: data,
                success: function (res) {
                    if (res.statusCode.toString().startsWith('2')) {
                        resolve(res);
                    }
                    else {
                        _this.showError(1);
                        reject(res);
                    }
                },
                fail: function (err) {
                    _this.showError(1);
                    reject(err);
                }
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBaUQ7QUFPakQsSUFBTSxJQUFJLEdBQUc7SUFDWCxDQUFDLEVBQUUsWUFBWTtJQUNmLEdBQUcsRUFBRSxVQUFVO0lBQ2YsSUFBSSxFQUFFLE9BQU87Q0FDZCxDQUFBO0FBRUQ7SUFBQTtRQUNVLFlBQU8sR0FBWTtZQUN6QixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLE1BQU0sRUFBRSxzQkFBUyxDQUFDLE1BQU07U0FDekIsQ0FBQTtJQW9DSCxDQUFDO0lBbENDLDZCQUFPLEdBQVAsVUFBUSxFQUFnRTtRQUF4RSxpQkFxQkM7WUFyQlMsY0FBSSxFQUFFLGNBQWMsRUFBZCxtQ0FBYyxFQUFFLFlBQVMsRUFBVCw4QkFBUyxFQUFFLGVBQVksRUFBWixpQ0FBWTtRQUNyRCxPQUFPLElBQUksT0FBTyxDQUFrQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xFLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsTUFBTSxRQUFBO2dCQUNOLEdBQUcsRUFBRSxzQkFBUyxDQUFDLE9BQU8sR0FBRyxJQUFJO2dCQUM3QixNQUFNLGVBQU8sS0FBSSxDQUFDLE9BQU8sRUFBSyxPQUFPLENBQUU7Z0JBQ3ZDLElBQUksTUFBQTtnQkFDSixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtxQkFDYjt5QkFBTTt3QkFDTCxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7cUJBQ1o7Z0JBQ0gsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQSxHQUFHO29CQUNQLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU8sK0JBQVMsR0FBakIsVUFBa0IsU0FBaUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFNBQVMsR0FBRyxDQUFDLENBQUE7U0FDZDtRQUVELEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN0QixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxrQ0FBVztBQTBDWCxRQUFBLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlncy9hcGkuY29uZmlnJ1xyXG5pbXBvcnQgeyBNZXRob2QsIFJlcXVlc3RPcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvaHR0cC5tb2RlbCdcclxuXHJcbmludGVyZmFjZSBIZWFkZXJzIHtcclxuICBbaGVhZGVyTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHRpcHMgPSB7XHJcbiAgMTogJ+aKseatie+8jOWHuueOsOS6huS4gOS4qumUmeivrycsXHJcbiAgNDAxOiAnYXBwa2V55peg5pWIJyxcclxuICAzMDAwOiAn5pyf5YiK5LiN5a2Y5ZyoJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaGVhZGVyczogSGVhZGVycyA9IHtcclxuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICBhcHBrZXk6IGFwaUNvbmZpZy5hcHBrZXlcclxuICB9XHJcblxyXG4gIHJlcXVlc3QoeyBwYXRoLCBtZXRob2QgPSAnR0VUJywgZGF0YSA9IHt9LCBoZWFkZXJzID0ge30gfTogUmVxdWVzdE9wdGlvbikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHd4LlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIHVybDogYXBpQ29uZmlnLmJhc2VVcmwgKyBwYXRoLFxyXG4gICAgICAgIGhlYWRlcjogeyAuLi50aGlzLmhlYWRlcnMsIC4uLmhlYWRlcnMgfSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKS5zdGFydHNXaXRoKCcyJykpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcigxKVxyXG4gICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKDEpXHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFcnJvcihlcnJvckNvZGU6IG51bWJlcikge1xyXG4gICAgaWYgKCFlcnJvckNvZGUpIHtcclxuICAgICAgZXJyb3JDb2RlID0gMVxyXG4gICAgfVxyXG5cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXBzW2Vycm9yQ29kZV0sXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICBpY29uOiAnbm9uZSdcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaHR0cFNlcnZpY2UgPSBuZXcgSHR0cFNlcnZpY2UoKVxyXG4iXX0=