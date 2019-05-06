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
        this.request({
            url: "/classic/" + currentIndex + "/" + previousOrNext,
            success: function (res) {
                success(res);
            }
        });
    };
    ClassicService.prototype.isFirst = function (current, first) {
        return current.index === first.index;
    };
    ClassicService.prototype.isLast = function (current) {
        return current.index === 1;
    };
    return ClassicService;
}(http_service_1.HttpService));
exports.ClassicService = ClassicService;
exports.classicService = new ClassicService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUc1QztJQUFvQyxrQ0FBVztJQUEvQzs7SUE4QkEsQ0FBQztJQTdCQyxrQ0FBUyxHQUFULFVBQVUsT0FBa0M7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUNFLFlBQW9CLEVBQ3BCLGNBQW1DLEVBQ25DLE9BQWtDO1FBRWxDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQUUsY0FBWSxZQUFZLFNBQUksY0FBZ0I7WUFDakQsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxPQUFnQixFQUFFLEtBQWM7UUFDdEMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDdEMsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUNyQixPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE5QkQsQ0FBb0MsMEJBQVcsR0E4QjlDO0FBOUJZLHdDQUFjO0FBZ0NkLFFBQUEsY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBDbGFzc2ljIH0gZnJvbSAnLi4vbW9kZWxzL2NsYXNzaWMubW9kZWwnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xhc3NpY1NlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZSB7XHJcbiAgZ2V0TGF0ZXN0KHN1Y2Nlc3M6IHd4LlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9jbGFzc2ljL2xhdGVzdCcsXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c09yTmV4dChcclxuICAgIGN1cnJlbnRJbmRleDogbnVtYmVyLFxyXG4gICAgcHJldmlvdXNPck5leHQ6ICdwcmV2aW91cycgfCAnbmV4dCcsXHJcbiAgICBzdWNjZXNzOiB3eC5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvY2xhc3NpYy8ke2N1cnJlbnRJbmRleH0vJHtwcmV2aW91c09yTmV4dH1gLFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaXNGaXJzdChjdXJyZW50OiBDbGFzc2ljLCBmaXJzdDogQ2xhc3NpYykge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQuaW5kZXggPT09IGZpcnN0LmluZGV4XHJcbiAgfVxyXG5cclxuICBpc0xhc3QoY3VycmVudDogQ2xhc3NpYykge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQuaW5kZXggPT09IDFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGFzc2ljU2VydmljZSA9IG5ldyBDbGFzc2ljU2VydmljZSgpXHJcbiJdfQ==