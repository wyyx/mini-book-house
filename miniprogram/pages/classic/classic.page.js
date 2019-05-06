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
            var classic = res.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBRS9ELDREQUF5RDtBQUd6RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBYTtRQUM3QixZQUFZLEVBQUUsRUFBYTtRQUMzQixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFNRCxNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQWhCLGlCQVNQO1FBUkMsZ0NBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUU3QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGNBQWMsRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDeEIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ3ZCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFBO1FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQTtRQUMxQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUU5QiwwQkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsVUFBVSxFQUFFLFVBQVMsS0FBSztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsY0FBbUM7UUFBcEQsaUJBVUM7UUFUQyxnQ0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsVUFBQSxHQUFHO1lBQ2xGLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFlLENBQUE7WUFFbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsT0FBTztnQkFDdkIsT0FBTyxFQUFFLGdDQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEUsTUFBTSxFQUFFLGdDQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUN2QyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUUsY0FBWSxDQUFDO0lBS3RCLE1BQU0sRUFBRSxjQUFZLENBQUM7SUFLckIsTUFBTSxFQUFFLGNBQVksQ0FBQztJQUtyQixRQUFRLEVBQUUsY0FBWSxDQUFDO0lBS3ZCLGlCQUFpQixFQUFFLGNBQVksQ0FBQztJQUtoQyxhQUFhLEVBQUUsY0FBWSxDQUFDO0NBTTdCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYXNzaWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xhc3NpYy5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBDbGFzc2ljIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NsYXNzaWMubW9kZWwnXHJcbmltcG9ydCB7IGxpa2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlrZS5zZXJ2aWNlJ1xyXG5cclxuLy8gbWluaXByb2dyYW0vcGFnZXMvY2xhc3NpYy9jbGFzc2ljLmpzXHJcblBhZ2Uoe1xyXG4gIC8qKlxyXG4gICAqIFBhZ2UgaW5pdGlhbCBkYXRhXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgY3VycmVudENsYXNzaWM6IHt9IGFzIENsYXNzaWMsXHJcbiAgICBmaXJzdENsYXNzaWM6IHt9IGFzIENsYXNzaWMsXHJcbiAgICBpc0ZpcnN0OiB0cnVlLFxyXG4gICAgaXNMYXN0OiBmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBsb2FkXHJcbiAgICovXHJcblxyXG4gIG9uTG9hZDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgY2xhc3NpY1NlcnZpY2UuZ2V0TGF0ZXN0KHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgcmVzLmRhdGEpXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGN1cnJlbnRDbGFzc2ljOiByZXMuZGF0YSxcclxuICAgICAgICBmaXJzdENsYXNzaWM6IHJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uTGlrZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGFydElkID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLmlkXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLnR5cGVcclxuICAgIGNvbnN0IGxpa2UgPSBldmVudC5kZXRhaWwubGlrZVxyXG5cclxuICAgIGxpa2VTZXJ2aWNlLmxpa2UoeyBhcnRJZCwgdHlwZSwgbGlrZSB9KVxyXG4gIH0sXHJcblxyXG4gIG9uUHJldmlvdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uUHJldmlvdXNPck5leHQoJ25leHQnKVxyXG4gIH0sXHJcblxyXG4gIG9uTmV4dDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHRoaXMub25QcmV2aW91c09yTmV4dCgncHJldmlvdXMnKVxyXG4gIH0sXHJcblxyXG4gIG9uUHJldmlvdXNPck5leHQocHJldmlvdXNPck5leHQ6ICdwcmV2aW91cycgfCAnbmV4dCcpIHtcclxuICAgIGNsYXNzaWNTZXJ2aWNlLmdldFByZXZpb3VzT3JOZXh0KHRoaXMuZGF0YS5jdXJyZW50Q2xhc3NpYy5pbmRleCwgcHJldmlvdXNPck5leHQsIHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGNsYXNzaWMgPSByZXMuZGF0YSBhcyBDbGFzc2ljXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGN1cnJlbnRDbGFzc2ljOiBjbGFzc2ljLFxyXG4gICAgICAgIGlzRmlyc3Q6IGNsYXNzaWNTZXJ2aWNlLmlzRmlyc3QoY2xhc3NpYywgdGhpcy5kYXRhLmZpcnN0Q2xhc3NpYyksXHJcbiAgICAgICAgaXNMYXN0OiBjbGFzc2ljU2VydmljZS5pc0xhc3QoY2xhc3NpYylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGlzIGluaXRpYWxseSByZW5kZXJlZFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBzaG93XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaGlkZVxyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHVubG9hZFxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBQYWdlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHVzZXIgZHJvcCBkb3duXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIHBhZ2UgcmVhY2ggYm90dG9tXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7fVxyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiBDYWxsZWQgd2hlbiB1c2VyIGNsaWNrIG9uIHRoZSB0b3AgcmlnaHQgY29ybmVyIHRvIHNoYXJlXHJcbiAgLy8gICovXHJcbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge31cclxufSlcclxuIl19