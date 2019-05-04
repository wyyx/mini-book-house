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
    LikeService.prototype.like = function (data, success) {
        this.request({
            method: 'POST',
            url: data.like ? '/like' : '/like/cancel',
            data: {
                art_id: 1,
                type: 100
            },
            success: function (res) {
                success && success(res);
            }
        });
    };
    return LikeService;
}(http_service_1.HttpService));
exports.LikeService = LikeService;
exports.likeService = new LikeService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlrZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUU1QztJQUFpQywrQkFBVztJQUE1Qzs7SUF1QkEsQ0FBQztJQXRCQywwQkFBSSxHQUFKLFVBQ0UsSUFJQyxFQUNELE9BQW1DO1FBSW5DLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDekMsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxHQUFHO2FBQ1Y7WUFDRCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDekIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF2QkQsQ0FBaUMsMEJBQVcsR0F1QjNDO0FBdkJZLGtDQUFXO0FBeUJYLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExpa2VTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2Uge1xyXG4gIGxpa2UoXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFydElkOiBudW1iZXJcclxuICAgICAgdHlwZTogbnVtYmVyXHJcbiAgICAgIGxpa2U6IGJvb2xlYW5cclxuICAgIH0sXHJcbiAgICBzdWNjZXNzPzogd3guUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1xyXG4gICkge1xyXG4gICAgLy8gdGhpcy5zZXRIZWFkZXIoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKVxyXG5cclxuICAgIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6IGRhdGEubGlrZSA/ICcvbGlrZScgOiAnL2xpa2UvY2FuY2VsJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFydF9pZDogMSxcclxuICAgICAgICB0eXBlOiAxMDBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MocmVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpa2VTZXJ2aWNlID0gbmV3IExpa2VTZXJ2aWNlKClcclxuIl19