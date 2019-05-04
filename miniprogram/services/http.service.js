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
            'Content-Type': 'application/json',
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
        wx.request({
            method: option.method,
            url: api_config_1.apiConfig.baseUrl + option.url,
            header: this.headers,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQWlEO0FBS2pELElBQU0sSUFBSSxHQUFHO0lBQ1gsQ0FBQyxFQUFFLFlBQVk7SUFDZixHQUFHLEVBQUUsVUFBVTtJQUNmLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVEO0lBQUE7UUFDRSxZQUFPLEdBQVk7WUFDakIsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxNQUFNLEVBQUUsc0JBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUE7SUF3Q0gsQ0FBQztJQXRDQywrQkFBUyxHQUFULFVBQVUsVUFBa0IsRUFBRSxXQUE0QjtRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLE1BQXdCO1FBQWhDLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUN0QjtRQUVELEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDckIsR0FBRyxFQUFFLHNCQUFTLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNwQixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDdEM7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQy9CO1lBQ0gsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLEdBQUc7Z0JBQ1AsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRU8sK0JBQVMsR0FBakIsVUFBa0IsU0FBaUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFNBQVMsR0FBRyxDQUFDLENBQUE7U0FDZDtRQUVELEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN0QixRQUFRLEVBQUUsS0FBSztZQUNmLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQTVDWSxrQ0FBVztBQThDWCxRQUFBLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlncy9hcGkuY29uZmlnJ1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlcnMge1xyXG4gIFtoZWFkZXJOYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJcclxufVxyXG5jb25zdCB0aXBzID0ge1xyXG4gIDE6ICfmirHmrYnvvIzlh7rnjrDkuobkuIDkuKrplJnor68nLFxyXG4gIDQwMTogJ2FwcGtleeaXoOaViCcsXHJcbiAgMzAwMDogJ+acn+WIiuS4jeWtmOWcqCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICBoZWFkZXJzOiBIZWFkZXJzID0ge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIGFwcGtleTogYXBpQ29uZmlnLmFwcGtleVxyXG4gIH1cclxuXHJcbiAgc2V0SGVhZGVyKGhlYWRlck5hbWU6IHN0cmluZywgaGVhZGVyVmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgdGhpcy5oZWFkZXJzW2hlYWRlck5hbWVdID0gaGVhZGVyVmFsdWVcclxuICB9XHJcblxyXG4gIHJlcXVlc3Qob3B0aW9uOiB3eC5SZXF1ZXN0T3B0aW9uKSB7XHJcbiAgICBpZiAoIW9wdGlvbi5tZXRob2QpIHtcclxuICAgICAgb3B0aW9uLm1ldGhvZCA9ICdHRVQnXHJcbiAgICB9XHJcblxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogb3B0aW9uLm1ldGhvZCxcclxuICAgICAgdXJsOiBhcGlDb25maWcuYmFzZVVybCArIG9wdGlvbi51cmwsXHJcbiAgICAgIGhlYWRlcjogdGhpcy5oZWFkZXJzLFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoJzInKSkge1xyXG4gICAgICAgICAgb3B0aW9uLnN1Y2Nlc3MgJiYgb3B0aW9uLnN1Y2Nlc3MocmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvcihyZXMuc3RhdHVzQ29kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmZhaWwgJiYgb3B0aW9uLmZhaWwoZXJyKVxyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFcnJvcihlcnJvckNvZGU6IG51bWJlcikge1xyXG4gICAgaWYgKCFlcnJvckNvZGUpIHtcclxuICAgICAgZXJyb3JDb2RlID0gMVxyXG4gICAgfVxyXG5cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXBzW2Vycm9yQ29kZV0sXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwMCxcclxuICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGh0dHBTZXJ2aWNlID0gbmV3IEh0dHBTZXJ2aWNlKClcclxuIl19