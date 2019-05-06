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
    ClassicService.prototype.getLatest = function (success) {
        this.request({
            url: '/classic/latest',
            success: function (res) {
                success(res);
            }
        });
    };
    ClassicService.prototype.getPreviousOrNext = function (currentIndex, previousOrNext, success) {
        var _this = this;
        var targetIndex = previousOrNext === 'previous' ? currentIndex - 1 : currentIndex + 1;
        var classic = this.getStorageByIndex(targetIndex);
        if (!classic) {
            this.request({
                url: "/classic/" + currentIndex + "/" + previousOrNext,
                success: function (res) {
                    success(res.data);
                    _this.setStorageSync(targetIndex, res.data);
                }
            });
        }
        else {
            success(classic);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUcvQixRQUFBLGNBQWMsR0FBRyxVQUFVLENBQUE7QUFFeEM7SUFBb0Msa0NBQVc7SUFBL0M7O0lBNENBLENBQUM7SUEzQ0Msa0NBQVMsR0FBVCxVQUFVLE9BQWtDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsWUFBb0IsRUFBRSxjQUFtQyxFQUFFLE9BQU87UUFBcEYsaUJBaUJDO1FBaEJDLElBQU0sV0FBVyxHQUFHLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDdkYsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRW5ELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxjQUFZLFlBQVksU0FBSSxjQUFnQjtnQkFDakQsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUdqQixLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzVDLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxPQUFnQixFQUFFLEtBQWM7UUFDdEMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDdEMsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUNyQixPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsS0FBYSxFQUFFLE9BQU87UUFDbkMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxzQkFBYyxHQUFHLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLHNCQUFjLEdBQUcsS0FBSyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFvQywwQkFBVyxHQTRDOUM7QUE1Q1ksd0NBQWM7QUE4Q2QsUUFBQSxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnXHJcbmltcG9ydCB7IENsYXNzaWMgfSBmcm9tICcuLi9tb2RlbHMvY2xhc3NpYy5tb2RlbCdcclxuXHJcbmV4cG9ydCBjb25zdCBTVE9SQUdFX1BSRUZJWCA9ICdjbGFzc2ljLSdcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGFzc2ljU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlIHtcclxuICBnZXRMYXRlc3Qoc3VjY2Vzczogd3guUmVxdWVzdFN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL2NsYXNzaWMvbGF0ZXN0JyxcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBzdWNjZXNzKHJlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzT3JOZXh0KGN1cnJlbnRJbmRleDogbnVtYmVyLCBwcmV2aW91c09yTmV4dDogJ3ByZXZpb3VzJyB8ICduZXh0Jywgc3VjY2Vzcykge1xyXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBwcmV2aW91c09yTmV4dCA9PT0gJ3ByZXZpb3VzJyA/IGN1cnJlbnRJbmRleCAtIDEgOiBjdXJyZW50SW5kZXggKyAxXHJcbiAgICBjb25zdCBjbGFzc2ljID0gdGhpcy5nZXRTdG9yYWdlQnlJbmRleCh0YXJnZXRJbmRleClcclxuXHJcbiAgICBpZiAoIWNsYXNzaWMpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGAvY2xhc3NpYy8ke2N1cnJlbnRJbmRleH0vJHtwcmV2aW91c09yTmV4dH1gLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBzdWNjZXNzKHJlcy5kYXRhKVxyXG5cclxuICAgICAgICAgIC8vIHNhdmUgdG8gc3RvcmFnZVxyXG4gICAgICAgICAgdGhpcy5zZXRTdG9yYWdlU3luYyh0YXJnZXRJbmRleCwgcmVzLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VjY2VzcyhjbGFzc2ljKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNGaXJzdChjdXJyZW50OiBDbGFzc2ljLCBmaXJzdDogQ2xhc3NpYykge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQuaW5kZXggPT09IGZpcnN0LmluZGV4XHJcbiAgfVxyXG5cclxuICBpc0xhc3QoY3VycmVudDogQ2xhc3NpYykge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQuaW5kZXggPT09IDFcclxuICB9XHJcblxyXG4gIHNldFN0b3JhZ2VTeW5jKGluZGV4OiBudW1iZXIsIGNsYXNzaWMpIHtcclxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKFNUT1JBR0VfUFJFRklYICsgaW5kZXgsIGNsYXNzaWMpXHJcbiAgfVxyXG5cclxuICBnZXRTdG9yYWdlQnlJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9QUkVGSVggKyBpbmRleClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGFzc2ljU2VydmljZSA9IG5ldyBDbGFzc2ljU2VydmljZSgpXHJcbiJdfQ==