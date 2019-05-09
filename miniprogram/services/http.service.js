"use strict";
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
        var path = _a.path, _b = _a.method, method = _b === void 0 ? 'GET' : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
        return new Promise(function (resolve, reject) {
            wx.request({
                method: method,
                url: api_config_1.apiConfig.baseUrl + path,
                header: _this.headers,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQWlEO0FBTWpELElBQU0sSUFBSSxHQUFHO0lBQ1gsQ0FBQyxFQUFFLFlBQVk7SUFDZixHQUFHLEVBQUUsVUFBVTtJQUNmLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVEO0lBQUE7UUFDRSxZQUFPLEdBQVk7WUFDakIsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxNQUFNLEVBQUUsc0JBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUE7SUFvQ0gsQ0FBQztJQWxDQyw2QkFBTyxHQUFQLFVBQVEsRUFBa0Q7UUFBMUQsaUJBcUJDO1lBckJTLGNBQUksRUFBRSxjQUFjLEVBQWQsbUNBQWMsRUFBRSxZQUFTLEVBQVQsOEJBQVM7UUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBa0MsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRSxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULE1BQU0sUUFBQTtnQkFDTixHQUFHLEVBQUUsc0JBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSTtnQkFDN0IsTUFBTSxFQUFFLEtBQUksQ0FBQyxPQUFPO2dCQUNwQixJQUFJLE1BQUE7Z0JBQ0osT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7cUJBQ2I7eUJBQU07d0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3FCQUNaO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRztvQkFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLCtCQUFTLEdBQWpCLFVBQWtCLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFBO1NBQ2Q7UUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksa0NBQVc7QUEwQ1gsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3MvYXBpLmNvbmZpZydcclxuaW1wb3J0IHsgTWV0aG9kLCBSZXF1ZXN0T3B0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2h0dHAubW9kZWwnXHJcblxyXG5pbnRlcmZhY2UgSGVhZGVycyB7XHJcbiAgW2hlYWRlck5hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlclxyXG59XHJcbmNvbnN0IHRpcHMgPSB7XHJcbiAgMTogJ+aKseatie+8jOWHuueOsOS6huS4gOS4qumUmeivrycsXHJcbiAgNDAxOiAnYXBwa2V55peg5pWIJyxcclxuICAzMDAwOiAn5pyf5YiK5LiN5a2Y5ZyoJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIGhlYWRlcnM6IEhlYWRlcnMgPSB7XHJcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgYXBwa2V5OiBhcGlDb25maWcuYXBwa2V5XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KHsgcGF0aCwgbWV0aG9kID0gJ0dFVCcsIGRhdGEgPSB7fSB9OiBSZXF1ZXN0T3B0aW9uKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8d3guUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgdXJsOiBhcGlDb25maWcuYmFzZVVybCArIHBhdGgsXHJcbiAgICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnMicpKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoMSlcclxuICAgICAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvcigxKVxyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpIHtcclxuICAgIGlmICghZXJyb3JDb2RlKSB7XHJcbiAgICAgIGVycm9yQ29kZSA9IDFcclxuICAgIH1cclxuXHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogdGlwc1tlcnJvckNvZGVdLFxyXG4gICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGh0dHBTZXJ2aWNlID0gbmV3IEh0dHBTZXJ2aWNlKClcclxuIl19