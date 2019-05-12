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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUcvQixRQUFBLGNBQWMsR0FBRyxVQUFVLENBQUE7QUFFeEM7SUFBb0Msa0NBQVc7SUFBL0M7O0lBZ0RBLENBQUM7SUEvQ0Msa0NBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBZSxFQUFuQixDQUFtQixDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsSUFBSSxFQUFFLGdCQUFnQjtTQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQWlCLEVBQXJCLENBQXFCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLFlBQW9CLEVBQUUsY0FBbUM7UUFBM0UsaUJBa0JDO1FBakJDLElBQU0sV0FBVyxHQUFHLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDdkYsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFOUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsSUFBSSxFQUFFLGNBQVksWUFBWSxTQUFJLGNBQWdCO2FBQ25ELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUVULEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFMUMsT0FBTyxHQUFHLENBQUMsSUFBZSxDQUFBO1lBQzVCLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxPQUFPLENBQVUsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDMUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsT0FBZ0IsRUFBRSxLQUFjO1FBQ3RDLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFBO0lBQ3RDLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sT0FBZ0I7UUFDckIsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLEtBQWEsRUFBRSxPQUFPO1FBQ25DLEVBQUUsQ0FBQyxjQUFjLENBQUMsc0JBQWMsR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixLQUFhO1FBQzdCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxzQkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoREQsQ0FBb0MsMEJBQVcsR0FnRDlDO0FBaERZLHdDQUFjO0FBa0RkLFFBQUEsY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBDbGFzc2ljIH0gZnJvbSAnLi4vbW9kZWxzL2NsYXNzaWMubW9kZWwnXHJcblxyXG5leHBvcnQgY29uc3QgU1RPUkFHRV9QUkVGSVggPSAnY2xhc3NpYy0nXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xhc3NpY1NlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZSB7XHJcbiAgZ2V0TGF0ZXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHBhdGg6ICcvY2xhc3NpYy9sYXRlc3QnXHJcbiAgICB9KS50aGVuKHJlcyA9PiByZXMuZGF0YSBhcyBDbGFzc2ljKVxyXG4gIH1cclxuXHJcbiAgZ2V0TXlGYXZvcml0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBwYXRoOiAnL2NsYXNzaWMvZmF2b3InXHJcbiAgICB9KS50aGVuKHJlcyA9PiByZXMuZGF0YSBhcyBDbGFzc2ljW10pXHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c09yTmV4dChjdXJyZW50SW5kZXg6IG51bWJlciwgcHJldmlvdXNPck5leHQ6ICdwcmV2aW91cycgfCAnbmV4dCcpIHtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gcHJldmlvdXNPck5leHQgPT09ICdwcmV2aW91cycgPyBjdXJyZW50SW5kZXggLSAxIDogY3VycmVudEluZGV4ICsgMVxyXG4gICAgY29uc3QgY2xhc3NpY0Zyb21TdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlQnlJbmRleCh0YXJnZXRJbmRleClcclxuXHJcbiAgICBpZiAoIWNsYXNzaWNGcm9tU3RvcmFnZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgL2NsYXNzaWMvJHtjdXJyZW50SW5kZXh9LyR7cHJldmlvdXNPck5leHR9YFxyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gYWRkIG9yIHVwZGF0ZSBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlU3luYyh0YXJnZXRJbmRleCwgcmVzLmRhdGEpXHJcblxyXG4gICAgICAgIHJldHVybiByZXMuZGF0YSBhcyBDbGFzc2ljXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8Q2xhc3NpYz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoY2xhc3NpY0Zyb21TdG9yYWdlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNGaXJzdChjdXJyZW50OiBDbGFzc2ljLCBmaXJzdDogQ2xhc3NpYykge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQuaW5kZXggPT09IGZpcnN0LmluZGV4XHJcbiAgfVxyXG5cclxuICBpc0xhc3QoY3VycmVudDogQ2xhc3NpYykge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQuaW5kZXggPT09IDFcclxuICB9XHJcblxyXG4gIHNldFN0b3JhZ2VTeW5jKGluZGV4OiBudW1iZXIsIGNsYXNzaWMpIHtcclxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKFNUT1JBR0VfUFJFRklYICsgaW5kZXgsIGNsYXNzaWMpXHJcbiAgfVxyXG5cclxuICBnZXRTdG9yYWdlQnlJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9QUkVGSVggKyBpbmRleClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGFzc2ljU2VydmljZSA9IG5ldyBDbGFzc2ljU2VydmljZSgpXHJcbiJdfQ==