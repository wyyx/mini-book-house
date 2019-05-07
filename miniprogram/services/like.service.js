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
                art_id: data.artId,
                type: data.type
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlrZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUU1QztJQUFpQywrQkFBVztJQUE1Qzs7SUFxQkEsQ0FBQztJQXBCQywwQkFBSSxHQUFKLFVBQUssSUFBb0Q7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYztZQUN6QyxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEI7WUFDRCxPQUFPLEVBQUUsVUFBQSxHQUFHLElBQUssQ0FBQztTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQVksRUFBRSxFQUFVLEVBQUUsT0FBTztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsR0FBRyxFQUFFLGNBQVksSUFBSSxTQUFJLEVBQUUsV0FBUTtZQUNuQyxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBaUMsMEJBQVcsR0FxQjNDO0FBckJZLGtDQUFXO0FBdUJYLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExpa2VTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2Uge1xyXG4gIGxpa2UoZGF0YTogeyBhcnRJZDogbnVtYmVyOyB0eXBlOiBudW1iZXI7IGxpa2U6IGJvb2xlYW4gfSkge1xyXG4gICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogZGF0YS5saWtlID8gJy9saWtlJyA6ICcvbGlrZS9jYW5jZWwnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYXJ0X2lkOiBkYXRhLmFydElkLFxyXG4gICAgICAgIHR5cGU6IGRhdGEudHlwZVxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRMaWtlSW5mbyh0eXBlOiBudW1iZXIsIGlkOiBudW1iZXIsIHN1Y2Nlc3MpIHtcclxuICAgIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9jbGFzc2ljLyR7dHlwZX0vJHtpZH0vZmF2b3JgLFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzLmRhdGEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZVNlcnZpY2UgPSBuZXcgTGlrZVNlcnZpY2UoKVxyXG4iXX0=