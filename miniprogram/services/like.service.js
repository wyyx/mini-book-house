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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlrZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUc1QztJQUFpQywrQkFBVztJQUE1Qzs7SUFpQkEsQ0FBQztJQWhCQywwQkFBSSxHQUFKLFVBQUssSUFBb0Q7UUFDdkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYztZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEI7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQVksRUFBRSxFQUFVO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUsY0FBWSxJQUFJLFNBQUksRUFBRSxXQUFRO1NBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBZ0IsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBaUMsMEJBQVcsR0FpQjNDO0FBakJZLGtDQUFXO0FBbUJYLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBMaWtlSW5mbyB9IGZyb20gJy4uL21vZGVscy9saWtlLm1vZGVsJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExpa2VTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2Uge1xyXG4gIGxpa2UoZGF0YTogeyBhcnRJZDogbnVtYmVyOyB0eXBlOiBudW1iZXI7IGxpa2U6IGJvb2xlYW4gfSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBwYXRoOiBkYXRhLmxpa2UgPyAnL2xpa2UnIDogJy9saWtlL2NhbmNlbCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhcnRfaWQ6IGRhdGEuYXJ0SWQsXHJcbiAgICAgICAgdHlwZTogZGF0YS50eXBlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRMaWtlSW5mbyh0eXBlOiBudW1iZXIsIGlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBwYXRoOiBgL2NsYXNzaWMvJHt0eXBlfS8ke2lkfS9mYXZvcmBcclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhIGFzIExpa2VJbmZvKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpa2VTZXJ2aWNlID0gbmV3IExpa2VTZXJ2aWNlKClcclxuIl19