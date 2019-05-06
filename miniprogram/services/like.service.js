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
var LikeService = (function (_super) {
    __extends(LikeService, _super);
    function LikeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LikeService.prototype.like = function (data) {
        this.request({
            method: 'POST',
            url: data.like ? '/like' : '/like/cancel',
            data: {
                art_id: 1,
                type: 100
            },
            success: function (res) { }
        });
    };
    LikeService.prototype.getLikeInfo = function (type, id, success) {
        this.request({
            url: "/classic/" + type + "/" + id + "/favor",
            success: function (res) {
                success(res.data);
            }
        });
    };
    return LikeService;
}(http_service_1.HttpService));
exports.LikeService = LikeService;
exports.likeService = new LikeService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlrZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUU1QztJQUFpQywrQkFBVztJQUE1Qzs7SUFxQkEsQ0FBQztJQXBCQywwQkFBSSxHQUFKLFVBQUssSUFBb0Q7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYztZQUN6QyxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEdBQUc7YUFDVjtZQUNELE9BQU8sRUFBRSxVQUFBLEdBQUcsSUFBSyxDQUFDO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksSUFBWSxFQUFFLEVBQVUsRUFBRSxPQUFPO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQUUsY0FBWSxJQUFJLFNBQUksRUFBRSxXQUFRO1lBQ25DLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUFpQywwQkFBVyxHQXFCM0M7QUFyQlksa0NBQVc7QUF1QlgsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgTGlrZVNlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZSB7XHJcbiAgbGlrZShkYXRhOiB7IGFydElkOiBudW1iZXI7IHR5cGU6IG51bWJlcjsgbGlrZTogYm9vbGVhbiB9KSB7XHJcbiAgICB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiBkYXRhLmxpa2UgPyAnL2xpa2UnIDogJy9saWtlL2NhbmNlbCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhcnRfaWQ6IDEsXHJcbiAgICAgICAgdHlwZTogMTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldExpa2VJbmZvKHR5cGU6IG51bWJlciwgaWQ6IG51bWJlciwgc3VjY2Vzcykge1xyXG4gICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgL2NsYXNzaWMvJHt0eXBlfS8ke2lkfS9mYXZvcmAsXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMuZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaWtlU2VydmljZSA9IG5ldyBMaWtlU2VydmljZSgpXHJcbiJdfQ==