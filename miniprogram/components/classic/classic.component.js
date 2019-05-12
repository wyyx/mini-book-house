"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_service_1 = require("../../services/classic.service");
var like_service_1 = require("../../services/like.service");
Component({
    properties: {
        cid: {
            type: Number,
            value: null,
            optionalTypes: [],
            observer: function (newVal, oldVal) {
            }
        },
        type: {
            type: Number,
            value: null,
            optionalTypes: []
        },
        showNavi: {
            type: Boolean,
            value: true,
            optionalTypes: []
        }
    },
    data: {
        currentClassic: {},
        firstClassic: {},
        isFirst: true,
        isLast: false,
        likeStatus: false,
        favNums: 0
    },
    attached: function () {
        var _this = this;
        var that = this;
        setTimeout(function () {
            if (!_this.properties.cid) {
                that.getLatest();
            }
            else {
                that.getById();
            }
        }, 10);
    },
    methods: {
        getLatest: function () {
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
        getById: function () {
            var _this = this;
            var that = this;
            var cid = that.properties.cid;
            var type = that.properties.type;
            classic_service_1.classicService.getById(type, cid).then(function (classic) {
                _this.setData({
                    currentClassic: classic,
                    firstClassic: classic
                });
                that.loadLikeInfo(classic.type, classic.id);
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc2ljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtFQUErRDtBQUMvRCw0REFBeUQ7QUFFekQsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFNO1lBRXpCLENBQUM7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLElBQUk7WUFDWCxhQUFhLEVBQUUsRUFBRTtTQUNsQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLElBQUk7WUFDWCxhQUFhLEVBQUUsRUFBRTtTQUNsQjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLEVBQWE7UUFDN0IsWUFBWSxFQUFFLEVBQWE7UUFDM0IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsS0FBSztRQUNiLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxRQUFRLEVBQVI7UUFBQSxpQkFTQztRQVJDLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtRQUN0QixVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUNqQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDZjtRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNSLENBQUM7SUFLRCxPQUFPLEVBQUU7UUFDUCxTQUFTO1lBQVQsaUJBVUM7WUFUQyxnQ0FBYyxDQUFD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QUFPLENBQUM7b0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3ZCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNLO0NBQ1QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xhc3NpYyB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2ljLm1vZGVsJ1xuaW1wb3J0IHsgY2xhc3NpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbGFzc2ljLnNlcnZpY2UnXG5pbXBvcnQgeyBsaWtlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpa2Uuc2VydmljZSdcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGNpZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXSxcbiAgICAgIG9ic2VydmVyOiAobmV3VmFsLCBvbGRWYWwpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1RDTDogbmV3VmFsJywgbmV3VmFsKVxuICAgICAgfVxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH0sXG4gICAgc2hvd05hdmk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjdXJyZW50Q2xhc3NpYzoge30gYXMgQ2xhc3NpYyxcbiAgICBmaXJzdENsYXNzaWM6IHt9IGFzIENsYXNzaWMsXG4gICAgaXNGaXJzdDogdHJ1ZSxcbiAgICBpc0xhc3Q6IGZhbHNlLFxuICAgIGxpa2VTdGF0dXM6IGZhbHNlLFxuICAgIGZhdk51bXM6IDBcbiAgfSxcblxuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcGVydGllcy5jaWQpIHtcbiAgICAgICAgdGhhdC5nZXRMYXRlc3QoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhhdC5nZXRCeUlkKClcbiAgICAgIH1cbiAgICB9LCAxMClcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgZ2V0TGF0ZXN0KCkge1xuICAgICAgY2xhc3NpY1NlcnZpY2UuZ2V0TGF0ZXN0KCkudGhlbihjbGFzc2ljID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBjdXJyZW50Q2xhc3NpYzogY2xhc3NpYyxcbiAgICAgICAgICBmaXJzdENsYXNzaWM6IGNsYXNzaWNcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxvYWRMaWtlSW5mbyhjbGFzc2ljLnR5cGUsIGNsYXNzaWMuaWQpXG4gICAgICAgIGNsYXNzaWNTZXJ2aWNlLnNldFN0b3JhZ2VTeW5jKGNsYXNzaWMuaW5kZXgsIGNsYXNzaWMpXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBnZXRCeUlkKCkge1xuICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpc1xuICAgICAgY29uc3QgY2lkID0gdGhhdC5wcm9wZXJ0aWVzLmNpZFxuICAgICAgY29uc3QgdHlwZSA9IHRoYXQucHJvcGVydGllcy50eXBlXG5cbiAgICAgIGNsYXNzaWNTZXJ2aWNlLmdldEJ5SWQodHlwZSwgY2lkKS50aGVuKGNsYXNzaWMgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGN1cnJlbnRDbGFzc2ljOiBjbGFzc2ljLFxuICAgICAgICAgIGZpcnN0Q2xhc3NpYzogY2xhc3NpY1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoYXQubG9hZExpa2VJbmZvKGNsYXNzaWMudHlwZSwgY2xhc3NpYy5pZClcbiAgICAgICAgY2xhc3NpY1NlcnZpY2Uuc2V0U3RvcmFnZVN5bmMoY2xhc3NpYy5pbmRleCwgY2xhc3NpYylcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIG9uTGlrZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnN0IGFydElkID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLmlkXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLnR5cGVcbiAgICAgIGNvbnN0IGxpa2UgPSBldmVudC5kZXRhaWwubGlrZVxuXG4gICAgICBsaWtlU2VydmljZS5saWtlKHsgYXJ0SWQsIHR5cGUsIGxpa2UgfSlcbiAgICB9LFxuXG4gICAgb25QcmV2aW91czogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMub25QcmV2aW91c09yTmV4dCgnbmV4dCcpXG4gICAgfSxcblxuICAgIG9uTmV4dDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMub25QcmV2aW91c09yTmV4dCgncHJldmlvdXMnKVxuICAgIH0sXG5cbiAgICBvblByZXZpb3VzT3JOZXh0KHByZXZpb3VzT3JOZXh0OiAncHJldmlvdXMnIHwgJ25leHQnKSB7XG4gICAgICBjbGFzc2ljU2VydmljZVxuICAgICAgICAuZ2V0UHJldmlvdXNPck5leHQodGhpcy5kYXRhLmN1cnJlbnRDbGFzc2ljLmluZGV4LCBwcmV2aW91c09yTmV4dClcbiAgICAgICAgLnRoZW4oY2xhc3NpYyA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkTGlrZUluZm8oY2xhc3NpYy50eXBlLCBjbGFzc2ljLmlkKVxuXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2ljOiBjbGFzc2ljLFxuICAgICAgICAgICAgaXNGaXJzdDogY2xhc3NpY1NlcnZpY2UuaXNGaXJzdChjbGFzc2ljLCB0aGlzLmRhdGEuZmlyc3RDbGFzc2ljKSxcbiAgICAgICAgICAgIGlzTGFzdDogY2xhc3NpY1NlcnZpY2UuaXNMYXN0KGNsYXNzaWMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgbG9hZExpa2VJbmZvKHR5cGU6IG51bWJlciwgaWQ6IG51bWJlcikge1xuICAgICAgbGlrZVNlcnZpY2UuZ2V0TGlrZUluZm8odHlwZSwgaWQpLnRoZW4obGlrZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbGlrZVN0YXR1czogbGlrZS5saWtlX3N0YXR1cyxcbiAgICAgICAgICBmYXZOdW1zOiBsaWtlLmZhdl9udW1zXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfSBhcyBhbnlcbn0pXG4iXX0=