"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_config_1 = require("../configs/api.config");
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
        if (!option.method) {
            option.method = 'GET';
        }
        wx.request({
            method: option.method,
            url: api_config_1.apiConfig.baseUrl + option.url,
            header: this.headers,
            success: function (res) {
                option.success && option.success(res);
            },
            fail: function (err) {
                option.fail && option.fail(err);
            }
        });
    };
    return HttpService;
}());
exports.HttpService = HttpService;
exports.httpService = new HttpService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQWlEO0FBRWpEO0lBQUE7UUFDRSxZQUFPLEdBRUg7WUFDRixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLE1BQU0sRUFBRSxzQkFBUyxDQUFDLE1BQU07U0FDekIsQ0FBQTtJQXVCSCxDQUFDO0lBckJDLCtCQUFTLEdBQVQsVUFBVSxVQUFrQixFQUFFLFdBQTRCO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxDQUFBO0lBQ3hDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsTUFBd0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDdEI7UUFFRCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLEdBQUcsRUFBRSxzQkFBUyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRztZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDcEIsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3ZDLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakMsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3Qlksa0NBQVc7QUErQlgsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3MvYXBpLmNvbmZpZydcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgaGVhZGVyczoge1xyXG4gICAgW2hlYWRlck5hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlclxyXG4gIH0gPSB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgYXBwa2V5OiBhcGlDb25maWcuYXBwa2V5XHJcbiAgfVxyXG5cclxuICBzZXRIZWFkZXIoaGVhZGVyTmFtZTogc3RyaW5nLCBoZWFkZXJWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICB0aGlzLmhlYWRlcnNbaGVhZGVyTmFtZV0gPSBoZWFkZXJWYWx1ZVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChvcHRpb246IHd4LlJlcXVlc3RPcHRpb24pIHtcclxuICAgIGlmICghb3B0aW9uLm1ldGhvZCkge1xyXG4gICAgICBvcHRpb24ubWV0aG9kID0gJ0dFVCdcclxuICAgIH1cclxuXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiBvcHRpb24ubWV0aG9kLFxyXG4gICAgICB1cmw6IGFwaUNvbmZpZy5iYXNlVXJsICsgb3B0aW9uLnVybCxcclxuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgb3B0aW9uLnN1Y2Nlc3MgJiYgb3B0aW9uLnN1Y2Nlc3MocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycikge1xyXG4gICAgICAgIG9wdGlvbi5mYWlsICYmIG9wdGlvbi5mYWlsKGVycilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodHRwU2VydmljZSA9IG5ldyBIdHRwU2VydmljZSgpXHJcbiJdfQ==