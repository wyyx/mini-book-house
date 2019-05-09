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
        return this.request({
            method: 'POST',
            path: data.like ? '/like' : '/like/cancel',
            data: {
                art_id: data.artId,
                type: data.type
            }
        });
    };
    LikeService.prototype.getLikeInfo = function (type, id) {
        return this.request({
            path: "/classic/" + type + "/" + id + "/favor"
        }).then(function (res) { return res.data; });
    };
    return LikeService;
}(http_service_1.HttpService));
exports.LikeService = LikeService;
exports.likeService = new LikeService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlrZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUc1QztJQUFpQywrQkFBVztJQUE1Qzs7SUFpQkEsQ0FBQztJQWhCQywwQkFBSSxHQUFKLFVBQUssSUFBb0Q7UUFDdkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYztZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEI7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQVksRUFBRSxFQUFVO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUsY0FBWSxJQUFJLFNBQUksRUFBRSxXQUFRO1NBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBWSxFQUFoQixDQUFnQixDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUFpQywwQkFBVyxHQWlCM0M7QUFqQlksa0NBQVc7QUFtQlgsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnXHJcbmltcG9ydCB7IExpa2UgfSBmcm9tICcuLi9tb2RlbHMvbGlrZS5tb2RlbCdcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWtlU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlIHtcclxuICBsaWtlKGRhdGE6IHsgYXJ0SWQ6IG51bWJlcjsgdHlwZTogbnVtYmVyOyBsaWtlOiBib29sZWFuIH0pIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgcGF0aDogZGF0YS5saWtlID8gJy9saWtlJyA6ICcvbGlrZS9jYW5jZWwnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYXJ0X2lkOiBkYXRhLmFydElkLFxyXG4gICAgICAgIHR5cGU6IGRhdGEudHlwZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlrZUluZm8odHlwZTogbnVtYmVyLCBpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgcGF0aDogYC9jbGFzc2ljLyR7dHlwZX0vJHtpZH0vZmF2b3JgXHJcbiAgICB9KS50aGVuKHJlcyA9PiByZXMuZGF0YSBhcyBMaWtlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpa2VTZXJ2aWNlID0gbmV3IExpa2VTZXJ2aWNlKClcclxuIl19