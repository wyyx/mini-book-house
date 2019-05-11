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
var KeywordService = (function (_super) {
    __extends(KeywordService, _super);
    function KeywordService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = 'q';
        _this.maxLength = 10;
        return _this;
    }
    KeywordService.prototype.getHistory = function () {
        var words = wx.getStorageSync(this.key);
        if (!words) {
            return [];
        }
        return words;
    };
    KeywordService.prototype.addToHistory = function (keyword) {
        var words = this.getHistory();
        var has = words.includes(keyword);
        if (!has) {
            var length_1 = words.length;
            if (length_1 > this.maxLength) {
                words.pop();
            }
            words.unshift(keyword);
            wx.setStorageSync(this.key, words);
        }
    };
    KeywordService.prototype.getHotKeywords = function () {
        return this.request({
            path: '/book/hot_keyword'
        }).then(function (res) {
            return res.data.hot;
        });
    };
    return KeywordService;
}(http_service_1.HttpService));
exports.KeywordService = KeywordService;
exports.keywordService = new KeywordService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia2V5d29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUc1QztJQUFvQyxrQ0FBVztJQUEvQztRQUFBLHFFQWtDQztRQWpDQyxTQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ1QsZUFBUyxHQUFHLEVBQUUsQ0FBQTs7SUFnQ2hCLENBQUM7SUE5QkMsbUNBQVUsR0FBVjtRQUNFLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxDQUFBO1FBQ3JELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQTtTQUNWO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLE9BQU87UUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzdCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFbkMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLElBQU0sUUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7WUFDM0IsSUFBSSxRQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDM0IsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO2FBQ1o7WUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3RCLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNuQztJQUNILENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLElBQUksRUFBRSxtQkFBbUI7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDVCxPQUFRLEdBQUcsQ0FBQyxJQUEyQixDQUFDLEdBQUcsQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBb0MsMEJBQVcsR0FrQzlDO0FBbENZLHdDQUFjO0FBb0NkLFFBQUEsY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBIb3RLZXl3b3JkUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMva2V5d29yZC5tb2RlbCdcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXl3b3JkU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlIHtcclxuICBrZXkgPSAncSdcclxuICBtYXhMZW5ndGggPSAxMFxyXG5cclxuICBnZXRIaXN0b3J5KCkge1xyXG4gICAgY29uc3Qgd29yZHMgPSB3eC5nZXRTdG9yYWdlU3luYyh0aGlzLmtleSkgYXMgc3RyaW5nW11cclxuICAgIGlmICghd29yZHMpIHtcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd29yZHNcclxuICB9XHJcblxyXG4gIGFkZFRvSGlzdG9yeShrZXl3b3JkKSB7XHJcbiAgICBsZXQgd29yZHMgPSB0aGlzLmdldEhpc3RvcnkoKVxyXG4gICAgY29uc3QgaGFzID0gd29yZHMuaW5jbHVkZXMoa2V5d29yZClcclxuXHJcbiAgICBpZiAoIWhhcykge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB3b3Jkcy5sZW5ndGhcclxuICAgICAgaWYgKGxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgd29yZHMucG9wKClcclxuICAgICAgfVxyXG5cclxuICAgICAgd29yZHMudW5zaGlmdChrZXl3b3JkKVxyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyh0aGlzLmtleSwgd29yZHMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRIb3RLZXl3b3JkcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBwYXRoOiAnL2Jvb2svaG90X2tleXdvcmQnXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJldHVybiAocmVzLmRhdGEgYXMgSG90S2V5d29yZFJlc3BvbnNlKS5ob3RcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qga2V5d29yZFNlcnZpY2UgPSBuZXcgS2V5d29yZFNlcnZpY2UoKVxyXG4iXX0=