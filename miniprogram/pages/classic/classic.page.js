"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_service_1 = require("../../services/classic.service");
var like_service_1 = require("../../services/like.service");
Page({
    data: {
        currentClassic: {},
        firstClassic: {},
        isFirst: true,
        isLast: false
    },
    onLoad: function (options) {
        var _this = this;
        classic_service_1.classicService.getLatest(function (res) {
            console.log('data', res.data);
            _this.setData({
                currentClassic: res.data,
                firstClassic: res.data
            });
            classic_service_1.classicService.setStorageSync(res.data['index'], res.data);
        });
    },
    onLike: function (event) {
        var artId = this.data.currentClassic.id;
        var type = this.data.currentClassic.type;
        var like = event.detail.like;
        like_service_1.likeService.like({ artId: artId, type: type, like: like });
    },
    onPrevious: function (event) {
        this.onPreviousOrNext('next');
    },
    onNext: function (event) {
        this.onPreviousOrNext('previous');
    },
    onPreviousOrNext: function (previousOrNext) {
        var _this = this;
        classic_service_1.classicService.getPreviousOrNext(this.data.currentClassic.index, previousOrNext, function (res) {
            var classic = res;
            _this.setData({
                currentClassic: classic,
                isFirst: classic_service_1.classicService.isFirst(classic, _this.data.firstClassic),
                isLast: classic_service_1.classicService.isLast(classic)
            });
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBRS9ELDREQUF5RDtBQUd6RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBYTtRQUM3QixZQUFZLEVBQUUsRUFBYTtRQUMzQixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFNRCxNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQWhCLGlCQVdQO1FBVkMsZ0NBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUU3QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGNBQWMsRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDeEIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ3ZCLENBQUMsQ0FBQTtZQUVGLGdDQUFjLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzVELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFBO1FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQTtRQUMxQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUU5QiwwQkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsVUFBVSxFQUFFLFVBQVMsS0FBSztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsY0FBbUM7UUFBcEQsaUJBVUM7UUFUQyxnQ0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsVUFBQSxHQUFHO1lBQ2xGLElBQU0sT0FBTyxHQUFHLEdBQWMsQ0FBQTtZQUU5QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGNBQWMsRUFBRSxPQUFPO2dCQUN2QixPQUFPLEVBQUUsZ0NBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoRSxNQUFNLEVBQUUsZ0NBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3ZDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRSxjQUFZLENBQUM7SUFLdEIsTUFBTSxFQUFFLGNBQVksQ0FBQztJQUtyQixNQUFNLEVBQUUsY0FBWSxDQUFDO0lBS3JCLFFBQVEsRUFBRSxjQUFZLENBQUM7SUFLdkIsaUJBQWlCLEVBQUUsY0FBWSxDQUFDO0lBS2hDLGFBQWEsRUFBRSxjQUFZLENBQUM7Q0FNN0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbGFzc2ljLnNlcnZpY2UnXHJcbmltcG9ydCB7IENsYXNzaWMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xhc3NpYy5tb2RlbCdcclxuaW1wb3J0IHsgbGlrZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWtlLnNlcnZpY2UnXHJcblxyXG4vLyBtaW5pcHJvZ3JhbS9wYWdlcy9jbGFzc2ljL2NsYXNzaWMuanNcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICogUGFnZSBpbml0aWFsIGRhdGFcclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBjdXJyZW50Q2xhc3NpYzoge30gYXMgQ2xhc3NpYyxcclxuICAgIGZpcnN0Q2xhc3NpYzoge30gYXMgQ2xhc3NpYyxcclxuICAgIGlzRmlyc3Q6IHRydWUsXHJcbiAgICBpc0xhc3Q6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGxvYWRcclxuICAgKi9cclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBjbGFzc2ljU2VydmljZS5nZXRMYXRlc3QocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCByZXMuZGF0YSlcclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY3VycmVudENsYXNzaWM6IHJlcy5kYXRhLFxyXG4gICAgICAgIGZpcnN0Q2xhc3NpYzogcmVzLmRhdGFcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNsYXNzaWNTZXJ2aWNlLnNldFN0b3JhZ2VTeW5jKHJlcy5kYXRhWydpbmRleCddLCByZXMuZGF0YSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25MaWtlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgY29uc3QgYXJ0SWQgPSB0aGlzLmRhdGEuY3VycmVudENsYXNzaWMuaWRcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmRhdGEuY3VycmVudENsYXNzaWMudHlwZVxyXG4gICAgY29uc3QgbGlrZSA9IGV2ZW50LmRldGFpbC5saWtlXHJcblxyXG4gICAgbGlrZVNlcnZpY2UubGlrZSh7IGFydElkLCB0eXBlLCBsaWtlIH0pXHJcbiAgfSxcclxuXHJcbiAgb25QcmV2aW91czogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHRoaXMub25QcmV2aW91c09yTmV4dCgnbmV4dCcpXHJcbiAgfSxcclxuXHJcbiAgb25OZXh0OiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdGhpcy5vblByZXZpb3VzT3JOZXh0KCdwcmV2aW91cycpXHJcbiAgfSxcclxuXHJcbiAgb25QcmV2aW91c09yTmV4dChwcmV2aW91c09yTmV4dDogJ3ByZXZpb3VzJyB8ICduZXh0Jykge1xyXG4gICAgY2xhc3NpY1NlcnZpY2UuZ2V0UHJldmlvdXNPck5leHQodGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLmluZGV4LCBwcmV2aW91c09yTmV4dCwgcmVzID0+IHtcclxuICAgICAgY29uc3QgY2xhc3NpYyA9IHJlcyBhcyBDbGFzc2ljXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGN1cnJlbnRDbGFzc2ljOiBjbGFzc2ljLFxyXG4gICAgICAgIGlzRmlyc3Q6IGNsYXNzaWNTZXJ2aWNlLmlzRmlyc3QoY2xhc3NpYywgdGhpcy5kYXRhLmZpcnN0Q2xhc3NpYyksXHJcbiAgICAgICAgaXNMYXN0OiBjbGFzc2ljU2VydmljZS5pc0xhc3QoY2xhc3NpYylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGlzIGluaXRpYWxseSByZW5kZXJlZFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBzaG93XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaGlkZVxyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHVubG9hZFxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBQYWdlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHVzZXIgZHJvcCBkb3duXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIHBhZ2UgcmVhY2ggYm90dG9tXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7fVxyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiBDYWxsZWQgd2hlbiB1c2VyIGNsaWNrIG9uIHRoZSB0b3AgcmlnaHQgY29ybmVyIHRvIHNoYXJlXHJcbiAgLy8gICovXHJcbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge31cclxufSlcclxuIl19