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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUcvQixRQUFBLGNBQWMsR0FBRyxVQUFVLENBQUE7QUFFeEM7SUFBb0Msa0NBQVc7SUFBL0M7O0lBMENBLENBQUM7SUF6Q0Msa0NBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBZSxFQUFuQixDQUFtQixDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixZQUFvQixFQUFFLGNBQW1DO1FBQTNFLGlCQWtCQztRQWpCQyxJQUFNLFdBQVcsR0FBRyxjQUFjLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZGLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2xCLElBQUksRUFBRSxjQUFZLFlBQVksU0FBSSxjQUFnQjthQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFFVCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRTFDLE9BQU8sR0FBRyxDQUFDLElBQWUsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLE9BQWdCLEVBQUUsS0FBYztRQUN0QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN0QyxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLE9BQWdCO1FBQ3JCLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxLQUFhLEVBQUUsT0FBTztRQUNuQyxFQUFFLENBQUMsY0FBYyxDQUFDLHNCQUFjLEdBQUcsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsc0JBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBMUNELENBQW9DLDBCQUFXLEdBMEM5QztBQTFDWSx3Q0FBYztBQTRDZCxRQUFBLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSdcclxuaW1wb3J0IHsgQ2xhc3NpYyB9IGZyb20gJy4uL21vZGVscy9jbGFzc2ljLm1vZGVsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUT1JBR0VfUFJFRklYID0gJ2NsYXNzaWMtJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsYXNzaWNTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2Uge1xyXG4gIGdldExhdGVzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBwYXRoOiAnL2NsYXNzaWMvbGF0ZXN0J1xyXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmRhdGEgYXMgQ2xhc3NpYylcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzT3JOZXh0KGN1cnJlbnRJbmRleDogbnVtYmVyLCBwcmV2aW91c09yTmV4dDogJ3ByZXZpb3VzJyB8ICduZXh0Jykge1xyXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBwcmV2aW91c09yTmV4dCA9PT0gJ3ByZXZpb3VzJyA/IGN1cnJlbnRJbmRleCAtIDEgOiBjdXJyZW50SW5kZXggKyAxXHJcbiAgICBjb25zdCBjbGFzc2ljRnJvbVN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2VCeUluZGV4KHRhcmdldEluZGV4KVxyXG5cclxuICAgIGlmICghY2xhc3NpY0Zyb21TdG9yYWdlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGAvY2xhc3NpYy8ke2N1cnJlbnRJbmRleH0vJHtwcmV2aW91c09yTmV4dH1gXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBhZGQgb3IgdXBkYXRlIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLnNldFN0b3JhZ2VTeW5jKHRhcmdldEluZGV4LCByZXMuZGF0YSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhIGFzIENsYXNzaWNcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDbGFzc2ljPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShjbGFzc2ljRnJvbVN0b3JhZ2UpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0ZpcnN0KGN1cnJlbnQ6IENsYXNzaWMsIGZpcnN0OiBDbGFzc2ljKSB7XHJcbiAgICByZXR1cm4gY3VycmVudC5pbmRleCA9PT0gZmlyc3QuaW5kZXhcclxuICB9XHJcblxyXG4gIGlzTGFzdChjdXJyZW50OiBDbGFzc2ljKSB7XHJcbiAgICByZXR1cm4gY3VycmVudC5pbmRleCA9PT0gMVxyXG4gIH1cclxuXHJcbiAgc2V0U3RvcmFnZVN5bmMoaW5kZXg6IG51bWJlciwgY2xhc3NpYykge1xyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9QUkVGSVggKyBpbmRleCwgY2xhc3NpYylcclxuICB9XHJcblxyXG4gIGdldFN0b3JhZ2VCeUluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYyhTVE9SQUdFX1BSRUZJWCArIGluZGV4KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsYXNzaWNTZXJ2aWNlID0gbmV3IENsYXNzaWNTZXJ2aWNlKClcclxuIl19