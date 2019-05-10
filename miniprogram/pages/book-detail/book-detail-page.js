"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_service_1 = require("../../services/book.service");
var like_service_1 = require("../../services/like.service");
Page({
    data: {
        comments: [],
        book: null,
        likeStatus: false,
        likeCount: 0,
        posting: false
    },
    onLoad: function (options) {
        var _this = this;
        wx.showLoading({ title: '正在加载...' });
        var bookId = options.bookId;
        var detail = book_service_1.bookService.getDetail(bookId);
        var comments = book_service_1.bookService.getComments(bookId);
        var likeStatus = book_service_1.bookService.getLikeInfo(bookId);
        Promise.all([detail, comments, likeStatus]).then(function (res) {
            _this.setData({
                book: res[0],
                comments: res[1],
                likeStatus: res[2].like_status,
                likeCount: res[2].fav_nums
            });
            wx.hideLoading();
        });
    },
    onLike: function (event) {
        var that = this;
        var like_or_cancel = event.detail.like;
        like_service_1.likeService.like({ artId: that.data.book.id, type: 400, like: like_or_cancel });
    },
    onFakePost: function (event) {
        this.setData({
            posting: true
        });
    },
    onCancel: function (event) {
        this.setData({
            posting: false
        });
    },
    onPost: function (event) {
        var comment = event.detail.text || event.detail.value;
        if (!comment) {
            return;
        }
        if (comment.length > 12) {
            wx.showToast({
                title: '短评最多12个字',
                icon: 'none'
            });
            return;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1kZXRhaWwtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2stZGV0YWlsLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBeUQ7QUFDekQsNERBQXlEO0FBRXpELElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsQ0FBQztRQUNaLE9BQU8sRUFBRSxLQUFLO0tBQ2Y7SUFNRCxNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQWhCLGlCQWlCUDtRQWhCQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDcEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUU3QixJQUFNLE1BQU0sR0FBRywwQkFBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM1QyxJQUFNLFFBQVEsR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRCxJQUFNLFVBQVUsR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEQsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO2dCQUM5QixTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDM0IsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBTixVQUFPLEtBQUs7UUFDVixJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7UUFDdEIsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDeEMsMEJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDakYsQ0FBQztJQUVELFVBQVUsWUFBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVEsWUFBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sWUFBQyxLQUFLO1FBQ1YsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFFdkQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU07U0FDUDtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7WUFDRixPQUFNO1NBQ1A7SUFDSCxDQUFDO0NBTUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9va1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ib29rLnNlcnZpY2UnXG5pbXBvcnQgeyBsaWtlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpa2Uuc2VydmljZSdcblxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjb21tZW50czogW10sXG4gICAgYm9vazogbnVsbCxcbiAgICBsaWtlU3RhdHVzOiBmYWxzZSxcbiAgICBsaWtlQ291bnQ6IDAsXG4gICAgcG9zdGluZzogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG5cbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgd3guc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ato+WcqOWKoOi9vS4uLicgfSlcbiAgICBjb25zdCBib29rSWQgPSBvcHRpb25zLmJvb2tJZFxuXG4gICAgY29uc3QgZGV0YWlsID0gYm9va1NlcnZpY2UuZ2V0RGV0YWlsKGJvb2tJZClcbiAgICBjb25zdCBjb21tZW50cyA9IGJvb2tTZXJ2aWNlLmdldENvbW1lbnRzKGJvb2tJZClcbiAgICBjb25zdCBsaWtlU3RhdHVzID0gYm9va1NlcnZpY2UuZ2V0TGlrZUluZm8oYm9va0lkKVxuXG4gICAgUHJvbWlzZS5hbGwoW2RldGFpbCwgY29tbWVudHMsIGxpa2VTdGF0dXNdKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBib29rOiByZXNbMF0sXG4gICAgICAgIGNvbW1lbnRzOiByZXNbMV0sXG4gICAgICAgIGxpa2VTdGF0dXM6IHJlc1syXS5saWtlX3N0YXR1cyxcbiAgICAgICAgbGlrZUNvdW50OiByZXNbMl0uZmF2X251bXNcbiAgICAgIH0pXG4gICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgfSlcbiAgfSxcblxuICBvbkxpa2UoZXZlbnQpIHtcbiAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG4gICAgY29uc3QgbGlrZV9vcl9jYW5jZWwgPSBldmVudC5kZXRhaWwubGlrZVxuICAgIGxpa2VTZXJ2aWNlLmxpa2UoeyBhcnRJZDogdGhhdC5kYXRhLmJvb2suaWQsIHR5cGU6IDQwMCwgbGlrZTogbGlrZV9vcl9jYW5jZWwgfSlcbiAgfSxcblxuICBvbkZha2VQb3N0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHBvc3Rpbmc6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIG9uQ2FuY2VsKGV2ZW50KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHBvc3Rpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBvblBvc3QoZXZlbnQpIHtcbiAgICBjb25zdCBjb21tZW50ID0gZXZlbnQuZGV0YWlsLnRleHQgfHwgZXZlbnQuZGV0YWlsLnZhbHVlXG5cbiAgICBpZiAoIWNvbW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjb21tZW50Lmxlbmd0aCA+IDEyKSB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+efreivhOacgOWkmjEy5Liq5a2XJyxcbiAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge31cbn0pXG4iXX0=