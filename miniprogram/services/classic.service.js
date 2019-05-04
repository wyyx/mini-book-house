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
            url: 'classic/latest',
            success: function (res) {
                success(res);
            }
        });
    };
    return ClassicService;
}(http_service_1.HttpService));
exports.ClassicService = ClassicService;
exports.classicService = new ClassicService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUU1QztJQUFvQyxrQ0FBVztJQUEvQzs7SUFTQSxDQUFDO0lBUkMsa0NBQVMsR0FBVCxVQUFVLE9BQWtDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFURCxDQUFvQywwQkFBVyxHQVM5QztBQVRZLHdDQUFjO0FBV2QsUUFBQSxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xhc3NpY1NlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZSB7XHJcbiAgZ2V0TGF0ZXN0KHN1Y2Nlc3M6IHd4LlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2NsYXNzaWMvbGF0ZXN0JyxcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBzdWNjZXNzKHJlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGFzc2ljU2VydmljZSA9IG5ldyBDbGFzc2ljU2VydmljZSgpXHJcbiJdfQ==