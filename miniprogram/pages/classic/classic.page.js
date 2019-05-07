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
        classic_service_1.classicService.getLatest(function (res) {
            var classic = res.data;
            console.log("TCL: classic", classic);
            _this.setData({
                currentClassic: classic,
                firstClassic: classic
            });
            _this.loadLikeInfo(classic.type, classic.id);
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
        like_service_1.likeService.getLikeInfo(type, id, function (res) {
            _this.setData({
                likeStatus: res.like_status,
                favNums: res.fav_nums
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBRS9ELDREQUF5RDtBQUd6RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBYTtRQUM3QixZQUFZLEVBQUUsRUFBYTtRQUMzQixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxLQUFLO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQU1ELE1BQU0sRUFBRSxVQUFTLE9BQU87UUFBaEIsaUJBY1A7UUFiQyxnQ0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDMUIsSUFBTSxPQUFPLEdBQVksR0FBRyxDQUFDLElBQWUsQ0FBQTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUVqQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGNBQWMsRUFBRSxPQUFPO2dCQUN2QixZQUFZLEVBQUUsT0FBTzthQUN0QixDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBRTNDLGdDQUFjLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzVELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFBO1FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQTtRQUMxQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUU5QiwwQkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsVUFBVSxFQUFFLFVBQVMsS0FBSztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsY0FBbUM7UUFBcEQsaUJBWUM7UUFYQyxnQ0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsVUFBQSxHQUFHO1lBQ2xGLElBQU0sT0FBTyxHQUFHLEdBQWMsQ0FBQTtZQUU5QixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBRTNDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLE9BQU8sRUFBRSxnQ0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hFLE1BQU0sRUFBRSxnQ0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDdkMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWSxFQUFaLFVBQWEsSUFBWSxFQUFFLEVBQVU7UUFBckMsaUJBT0M7UUFOQywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQUEsR0FBRztZQUNuQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVztnQkFDM0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRO2FBQ3RCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRSxjQUFZLENBQUM7SUFLdEIsTUFBTSxFQUFFLGNBQVksQ0FBQztJQUtyQixNQUFNLEVBQUUsY0FBWSxDQUFDO0lBS3JCLFFBQVEsRUFBRSxjQUFZLENBQUM7SUFLdkIsaUJBQWlCLEVBQUUsY0FBWSxDQUFDO0lBS2hDLGFBQWEsRUFBRSxjQUFZLENBQUM7Q0FNN0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbGFzc2ljLnNlcnZpY2UnXHJcbmltcG9ydCB7IENsYXNzaWMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xhc3NpYy5tb2RlbCdcclxuaW1wb3J0IHsgbGlrZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWtlLnNlcnZpY2UnXHJcblxyXG4vLyBtaW5pcHJvZ3JhbS9wYWdlcy9jbGFzc2ljL2NsYXNzaWMuanNcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICogUGFnZSBpbml0aWFsIGRhdGFcclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBjdXJyZW50Q2xhc3NpYzoge30gYXMgQ2xhc3NpYyxcclxuICAgIGZpcnN0Q2xhc3NpYzoge30gYXMgQ2xhc3NpYyxcclxuICAgIGlzRmlyc3Q6IHRydWUsXHJcbiAgICBpc0xhc3Q6IGZhbHNlLFxyXG4gICAgbGlrZVN0YXR1czogZmFsc2UsXHJcbiAgICBmYXZOdW1zOiAwXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGxvYWRcclxuICAgKi9cclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBjbGFzc2ljU2VydmljZS5nZXRMYXRlc3QocmVzID0+IHtcclxuICAgICAgY29uc3QgY2xhc3NpYzogQ2xhc3NpYyA9IHJlcy5kYXRhIGFzIENsYXNzaWNcclxuXHRcdFx0Y29uc29sZS5sb2coXCJUQ0w6IGNsYXNzaWNcIiwgY2xhc3NpYylcclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY3VycmVudENsYXNzaWM6IGNsYXNzaWMsXHJcbiAgICAgICAgZmlyc3RDbGFzc2ljOiBjbGFzc2ljXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLmxvYWRMaWtlSW5mbyhjbGFzc2ljLnR5cGUsIGNsYXNzaWMuaWQpXHJcblxyXG4gICAgICBjbGFzc2ljU2VydmljZS5zZXRTdG9yYWdlU3luYyhyZXMuZGF0YVsnaW5kZXgnXSwgcmVzLmRhdGEpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uTGlrZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGFydElkID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLmlkXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLnR5cGVcclxuICAgIGNvbnN0IGxpa2UgPSBldmVudC5kZXRhaWwubGlrZVxyXG5cclxuICAgIGxpa2VTZXJ2aWNlLmxpa2UoeyBhcnRJZCwgdHlwZSwgbGlrZSB9KVxyXG4gIH0sXHJcblxyXG4gIG9uUHJldmlvdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uUHJldmlvdXNPck5leHQoJ25leHQnKVxyXG4gIH0sXHJcblxyXG4gIG9uTmV4dDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHRoaXMub25QcmV2aW91c09yTmV4dCgncHJldmlvdXMnKVxyXG4gIH0sXHJcblxyXG4gIG9uUHJldmlvdXNPck5leHQocHJldmlvdXNPck5leHQ6ICdwcmV2aW91cycgfCAnbmV4dCcpIHtcclxuICAgIGNsYXNzaWNTZXJ2aWNlLmdldFByZXZpb3VzT3JOZXh0KHRoaXMuZGF0YS5jdXJyZW50Q2xhc3NpYy5pbmRleCwgcHJldmlvdXNPck5leHQsIHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGNsYXNzaWMgPSByZXMgYXMgQ2xhc3NpY1xyXG5cclxuICAgICAgdGhpcy5sb2FkTGlrZUluZm8oY2xhc3NpYy50eXBlLCBjbGFzc2ljLmlkKVxyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjdXJyZW50Q2xhc3NpYzogY2xhc3NpYyxcclxuICAgICAgICBpc0ZpcnN0OiBjbGFzc2ljU2VydmljZS5pc0ZpcnN0KGNsYXNzaWMsIHRoaXMuZGF0YS5maXJzdENsYXNzaWMpLFxyXG4gICAgICAgIGlzTGFzdDogY2xhc3NpY1NlcnZpY2UuaXNMYXN0KGNsYXNzaWMpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGxvYWRMaWtlSW5mbyh0eXBlOiBudW1iZXIsIGlkOiBudW1iZXIpIHtcclxuICAgIGxpa2VTZXJ2aWNlLmdldExpa2VJbmZvKHR5cGUsIGlkLCByZXMgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxpa2VTdGF0dXM6IHJlcy5saWtlX3N0YXR1cyxcclxuICAgICAgICBmYXZOdW1zOiByZXMuZmF2X251bXNcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGlzIGluaXRpYWxseSByZW5kZXJlZFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBzaG93XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaGlkZVxyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHVubG9hZFxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBQYWdlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHVzZXIgZHJvcCBkb3duXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIHBhZ2UgcmVhY2ggYm90dG9tXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7fVxyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiBDYWxsZWQgd2hlbiB1c2VyIGNsaWNrIG9uIHRoZSB0b3AgcmlnaHQgY29ybmVyIHRvIHNoYXJlXHJcbiAgLy8gICovXHJcbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge31cclxufSlcclxuIl19