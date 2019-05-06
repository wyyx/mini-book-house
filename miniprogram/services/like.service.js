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
    return LikeService;
}(http_service_1.HttpService));
exports.LikeService = LikeService;
exports.likeService = new LikeService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlrZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUU1QztJQUFpQywrQkFBVztJQUE1Qzs7SUFZQSxDQUFDO0lBWEMsMEJBQUksR0FBSixVQUFLLElBQW9EO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDekMsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxHQUFHO2FBQ1Y7WUFDRCxPQUFPLEVBQUUsVUFBQSxHQUFHLElBQUssQ0FBQztTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBaUMsMEJBQVcsR0FZM0M7QUFaWSxrQ0FBVztBQWNYLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExpa2VTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2Uge1xyXG4gIGxpa2UoZGF0YTogeyBhcnRJZDogbnVtYmVyOyB0eXBlOiBudW1iZXI7IGxpa2U6IGJvb2xlYW4gfSkge1xyXG4gICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogZGF0YS5saWtlID8gJy9saWtlJyA6ICcvbGlrZS9jYW5jZWwnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYXJ0X2lkOiAxLFxyXG4gICAgICAgIHR5cGU6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZVNlcnZpY2UgPSBuZXcgTGlrZVNlcnZpY2UoKVxyXG4iXX0=