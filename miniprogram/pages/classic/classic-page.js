"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_service_1 = require("../../services/classic.service");
var like_service_1 = require("../../services/like.service");
Page({
    data: {
        currentClassic: {},
        firstClassic: {},
        isFirst: true,
        isLast: false,
        likeStatus: false,
        favNums: 0
    },
    onLoad: function (options) {
        var _this = this;
        classic_service_1.classicService.getLatest().then(function (classic) {
            _this.setData({
                currentClassic: classic,
                firstClassic: classic
            });
            _this.loadLikeInfo(classic.type, classic.id);
            classic_service_1.classicService.setStorageSync(classic.index, classic);
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
        classic_service_1.classicService
            .getPreviousOrNext(this.data.currentClassic.index, previousOrNext)
            .then(function (classic) {
            _this.loadLikeInfo(classic.type, classic.id);
            _this.setData({
                currentClassic: classic,
                isFirst: classic_service_1.classicService.isFirst(classic, _this.data.firstClassic),
                isLast: classic_service_1.classicService.isLast(classic)
            });
        });
    },
    loadLikeInfo: function (type, id) {
        var _this = this;
        like_service_1.likeService.getLikeInfo(type, id).then(function (like) {
            _this.setData({
                likeStatus: like.like_status,
                favNums: like.fav_nums
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBRS9ELDREQUF5RDtBQUd6RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBYTtRQUM3QixZQUFZLEVBQUUsRUFBYTtRQUMzQixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxLQUFLO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQU1ELE1BQU0sRUFBRSxVQUFTLE9BQU87UUFBaEIsaUJBVVA7UUFUQyxnQ0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsT0FBTztnQkFDdkIsWUFBWSxFQUFFLE9BQU87YUFDdEIsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUMzQyxnQ0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFBO1FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQTtRQUMxQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUU5QiwwQkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsVUFBVSxFQUFFLFVBQVMsS0FBSztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsY0FBbUM7UUFBcEQsaUJBWUM7UUFYQyxnQ0FBYzthQUNYLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUM7YUFDakUsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7WUFFM0MsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsT0FBTztnQkFDdkIsT0FBTyxFQUFFLGdDQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEUsTUFBTSxFQUFFLGdDQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUN2QyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxZQUFZLEVBQVosVUFBYSxJQUFZLEVBQUUsRUFBVTtRQUFyQyxpQkFPQztRQU5DLDBCQUFXLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFLGNBQVksQ0FBQztJQUt0QixNQUFNLEVBQUUsY0FBWSxDQUFDO0lBS3JCLE1BQU0sRUFBRSxjQUFZLENBQUM7SUFLckIsUUFBUSxFQUFFLGNBQVksQ0FBQztJQUt2QixpQkFBaUIsRUFBRSxjQUFZLENBQUM7SUFLaEMsYUFBYSxFQUFFLGNBQVksQ0FBQztDQU03QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGFzc2ljU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NsYXNzaWMuc2VydmljZSdcclxuaW1wb3J0IHsgQ2xhc3NpYyB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2ljLm1vZGVsJ1xyXG5pbXBvcnQgeyBsaWtlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpa2Uuc2VydmljZSdcclxuXHJcbi8vIG1pbmlwcm9ncmFtL3BhZ2VzL2NsYXNzaWMvY2xhc3NpYy5qc1xyXG5QYWdlKHtcclxuICAvKipcclxuICAgKiBQYWdlIGluaXRpYWwgZGF0YVxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGN1cnJlbnRDbGFzc2ljOiB7fSBhcyBDbGFzc2ljLFxyXG4gICAgZmlyc3RDbGFzc2ljOiB7fSBhcyBDbGFzc2ljLFxyXG4gICAgaXNGaXJzdDogdHJ1ZSxcclxuICAgIGlzTGFzdDogZmFsc2UsXHJcbiAgICBsaWtlU3RhdHVzOiBmYWxzZSxcclxuICAgIGZhdk51bXM6IDBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgbG9hZFxyXG4gICAqL1xyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIGNsYXNzaWNTZXJ2aWNlLmdldExhdGVzdCgpLnRoZW4oY2xhc3NpYyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY3VycmVudENsYXNzaWM6IGNsYXNzaWMsXHJcbiAgICAgICAgZmlyc3RDbGFzc2ljOiBjbGFzc2ljXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLmxvYWRMaWtlSW5mbyhjbGFzc2ljLnR5cGUsIGNsYXNzaWMuaWQpXHJcbiAgICAgIGNsYXNzaWNTZXJ2aWNlLnNldFN0b3JhZ2VTeW5jKGNsYXNzaWMuaW5kZXgsIGNsYXNzaWMpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uTGlrZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGFydElkID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLmlkXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLnR5cGVcclxuICAgIGNvbnN0IGxpa2UgPSBldmVudC5kZXRhaWwubGlrZVxyXG5cclxuICAgIGxpa2VTZXJ2aWNlLmxpa2UoeyBhcnRJZCwgdHlwZSwgbGlrZSB9KVxyXG4gIH0sXHJcblxyXG4gIG9uUHJldmlvdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uUHJldmlvdXNPck5leHQoJ25leHQnKVxyXG4gIH0sXHJcblxyXG4gIG9uTmV4dDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHRoaXMub25QcmV2aW91c09yTmV4dCgncHJldmlvdXMnKVxyXG4gIH0sXHJcblxyXG4gIG9uUHJldmlvdXNPck5leHQocHJldmlvdXNPck5leHQ6ICdwcmV2aW91cycgfCAnbmV4dCcpIHtcclxuICAgIGNsYXNzaWNTZXJ2aWNlXHJcbiAgICAgIC5nZXRQcmV2aW91c09yTmV4dCh0aGlzLmRhdGEuY3VycmVudENsYXNzaWMuaW5kZXgsIHByZXZpb3VzT3JOZXh0KVxyXG4gICAgICAudGhlbihjbGFzc2ljID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRMaWtlSW5mbyhjbGFzc2ljLnR5cGUsIGNsYXNzaWMuaWQpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBjdXJyZW50Q2xhc3NpYzogY2xhc3NpYyxcclxuICAgICAgICAgIGlzRmlyc3Q6IGNsYXNzaWNTZXJ2aWNlLmlzRmlyc3QoY2xhc3NpYywgdGhpcy5kYXRhLmZpcnN0Q2xhc3NpYyksXHJcbiAgICAgICAgICBpc0xhc3Q6IGNsYXNzaWNTZXJ2aWNlLmlzTGFzdChjbGFzc2ljKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgbG9hZExpa2VJbmZvKHR5cGU6IG51bWJlciwgaWQ6IG51bWJlcikge1xyXG4gICAgbGlrZVNlcnZpY2UuZ2V0TGlrZUluZm8odHlwZSwgaWQpLnRoZW4obGlrZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbGlrZVN0YXR1czogbGlrZS5saWtlX3N0YXR1cyxcclxuICAgICAgICBmYXZOdW1zOiBsaWtlLmZhdl9udW1zXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBpcyBpbml0aWFsbHkgcmVuZGVyZWRcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2Ugc2hvd1xyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGhpZGVcclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSB1bmxvYWRcclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiB1c2VyIGRyb3AgZG93blxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBwYWdlIHJlYWNoIGJvdHRvbVxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCkge31cclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQ2FsbGVkIHdoZW4gdXNlciBjbGljayBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciB0byBzaGFyZVxyXG4gIC8vICAqL1xyXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHt9XHJcbn0pXHJcbiJdfQ==