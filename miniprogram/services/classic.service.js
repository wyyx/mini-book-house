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
exports.STORAGE_PREFIX = 'classic-';
var ClassicService = (function (_super) {
    __extends(ClassicService, _super);
    function ClassicService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicService.prototype.getLatest = function () {
        return this.request({
            path: '/classic/latest'
        }).then(function (res) { return res.data; });
    };
    ClassicService.prototype.getById = function (type, id) {
        return this.request({
            path: "/classic/" + type + "/" + id
        }).then(function (res) { return res.data; });
    };
    ClassicService.prototype.getMyFavorite = function () {
        return this.request({
            path: '/classic/favor'
        }).then(function (res) { return res.data; });
    };
    ClassicService.prototype.getPreviousOrNext = function (currentIndex, previousOrNext) {
        var _this = this;
        var targetIndex = previousOrNext === 'previous' ? currentIndex - 1 : currentIndex + 1;
        var classicFromStorage = this.getStorageByIndex(targetIndex);
        if (!classicFromStorage) {
            return this.request({
                path: "/classic/" + currentIndex + "/" + previousOrNext
            }).then(function (res) {
                _this.setStorageSync(targetIndex, res.data);
                return res.data;
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                resolve(classicFromStorage);
            });
        }
    };
    ClassicService.prototype.isFirst = function (current, first) {
        return current.index === first.index;
    };
    ClassicService.prototype.isLast = function (current) {
        return current.index === 1;
    };
    ClassicService.prototype.setStorageSync = function (index, classic) {
        wx.setStorageSync(exports.STORAGE_PREFIX + index, classic);
    };
    ClassicService.prototype.getStorageByIndex = function (index) {
        return wx.getStorageSync(exports.STORAGE_PREFIX + index);
    };
    return ClassicService;
}(http_service_1.HttpService));
exports.ClassicService = ClassicService;
exports.classicService = new ClassicService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUcvQixRQUFBLGNBQWMsR0FBRyxVQUFVLENBQUE7QUFFeEM7SUFBb0Msa0NBQVc7SUFBL0M7O0lBc0RBLENBQUM7SUFyREMsa0NBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBZSxFQUFuQixDQUFtQixDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsRUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsSUFBSSxFQUFFLGNBQVksSUFBSSxTQUFJLEVBQUk7U0FDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFlLEVBQW5CLENBQW1CLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUsZ0JBQWdCO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBaUIsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsWUFBb0IsRUFBRSxjQUFtQztRQUEzRSxpQkFrQkM7UUFqQkMsSUFBTSxXQUFXLEdBQUcsY0FBYyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQTtRQUN2RixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUU5RCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsY0FBWSxZQUFZLFNBQUksY0FBZ0I7YUFDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBRVQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUUxQyxPQUFPLEdBQUcsQ0FBQyxJQUFlLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLE9BQU8sQ0FBVSxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUMxQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUM3QixDQUFDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxPQUFnQixFQUFFLEtBQWM7UUFDdEMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDdEMsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUNyQixPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsS0FBYSxFQUFFLE9BQU87UUFDbkMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxzQkFBYyxHQUFHLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLHNCQUFjLEdBQUcsS0FBSyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXRERCxDQUFvQywwQkFBVyxHQXNEOUM7QUF0RFksd0NBQWM7QUF3RGQsUUFBQSxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnXHJcbmltcG9ydCB7IENsYXNzaWMgfSBmcm9tICcuLi9tb2RlbHMvY2xhc3NpYy5tb2RlbCdcclxuXHJcbmV4cG9ydCBjb25zdCBTVE9SQUdFX1BSRUZJWCA9ICdjbGFzc2ljLSdcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGFzc2ljU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlIHtcclxuICBnZXRMYXRlc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgcGF0aDogJy9jbGFzc2ljL2xhdGVzdCdcclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhIGFzIENsYXNzaWMpXHJcbiAgfVxyXG5cclxuICBnZXRCeUlkKHR5cGU6IG51bWJlciwgaWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHBhdGg6IGAvY2xhc3NpYy8ke3R5cGV9LyR7aWR9YFxyXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmRhdGEgYXMgQ2xhc3NpYylcclxuICB9XHJcblxyXG4gIGdldE15RmF2b3JpdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgcGF0aDogJy9jbGFzc2ljL2Zhdm9yJ1xyXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmRhdGEgYXMgQ2xhc3NpY1tdKVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNPck5leHQoY3VycmVudEluZGV4OiBudW1iZXIsIHByZXZpb3VzT3JOZXh0OiAncHJldmlvdXMnIHwgJ25leHQnKSB7XHJcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IHByZXZpb3VzT3JOZXh0ID09PSAncHJldmlvdXMnID8gY3VycmVudEluZGV4IC0gMSA6IGN1cnJlbnRJbmRleCArIDFcclxuICAgIGNvbnN0IGNsYXNzaWNGcm9tU3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZUJ5SW5kZXgodGFyZ2V0SW5kZXgpXHJcblxyXG4gICAgaWYgKCFjbGFzc2ljRnJvbVN0b3JhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYC9jbGFzc2ljLyR7Y3VycmVudEluZGV4fS8ke3ByZXZpb3VzT3JOZXh0fWBcclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIGFkZCBvciB1cGRhdGUgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZVN5bmModGFyZ2V0SW5kZXgsIHJlcy5kYXRhKVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzLmRhdGEgYXMgQ2xhc3NpY1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPENsYXNzaWM+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICByZXNvbHZlKGNsYXNzaWNGcm9tU3RvcmFnZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRmlyc3QoY3VycmVudDogQ2xhc3NpYywgZmlyc3Q6IENsYXNzaWMpIHtcclxuICAgIHJldHVybiBjdXJyZW50LmluZGV4ID09PSBmaXJzdC5pbmRleFxyXG4gIH1cclxuXHJcbiAgaXNMYXN0KGN1cnJlbnQ6IENsYXNzaWMpIHtcclxuICAgIHJldHVybiBjdXJyZW50LmluZGV4ID09PSAxXHJcbiAgfVxyXG5cclxuICBzZXRTdG9yYWdlU3luYyhpbmRleDogbnVtYmVyLCBjbGFzc2ljKSB7XHJcbiAgICB3eC5zZXRTdG9yYWdlU3luYyhTVE9SQUdFX1BSRUZJWCArIGluZGV4LCBjbGFzc2ljKVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RvcmFnZUJ5SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHd4LmdldFN0b3JhZ2VTeW5jKFNUT1JBR0VfUFJFRklYICsgaW5kZXgpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xhc3NpY1NlcnZpY2UgPSBuZXcgQ2xhc3NpY1NlcnZpY2UoKVxyXG4iXX0=