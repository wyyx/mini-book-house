"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_service_1 = require("../../services/book.service");
var like_service_1 = require("../../services/like.service");
var episode_type_model_1 = require("../../models/episode-type.model");
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
        detail.then(function (res) {
            _this.setData({
                book: res
            });
        });
        comments.then(function (res) {
            _this.setData({
                comments: res
            });
        });
        likeStatus.then(function (res) {
            _this.setData({
                likeStatus: res.like_status,
                likeCount: res.fav_nums
            });
        });
        wx.hideLoading();
    },
    onLike: function (event) {
        var that = this;
        var like_or_cancel = event.detail.like;
        like_service_1.likeService.like({ artId: that.data.book.id, type: episode_type_model_1.ContentType.Book, like: like_or_cancel });
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
        var _this = this;
        var comment = event.detail.text || event.detail.value;
        console.log('TCL: onPost -> comment', comment);
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
        book_service_1.bookService.postComment(this.data.book.id, comment).then(function (res) {
            wx.showToast({
                title: '+ 1',
                icon: 'none'
            });
            _this.data.comments.unshift({
                content: comment,
                nums: 1
            });
            _this.setData({
                comments: _this.data.comments,
                posting: false
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1kZXRhaWwtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2stZGV0YWlsLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBeUQ7QUFDekQsNERBQXlEO0FBQ3pELHNFQUE2RDtBQUU3RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLENBQUM7UUFDWixPQUFPLEVBQUUsS0FBSztLQUNmO0lBTUQsTUFBTSxFQUFFLFVBQVMsT0FBTztRQUFoQixpQkFvQ1A7UUFuQ0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQ3BDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFFN0IsSUFBTSxNQUFNLEdBQUcsMEJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUMsSUFBTSxRQUFRLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsSUFBTSxVQUFVLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFVbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDYixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBRSxHQUFHO2FBQ1YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNmLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUVGLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXO2dCQUMzQixTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVE7YUFDeEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELE1BQU0sRUFBTixVQUFPLEtBQUs7UUFDVixJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7UUFDdEIsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDeEMsMEJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxnQ0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQTtJQUM5RixDQUFDO0lBRUQsVUFBVSxZQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUSxZQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxZQUFDLEtBQUs7UUFBWixpQkFnQ0M7UUEvQkMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUU5QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTTtTQUNQO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsTUFBTTthQUNiLENBQUMsQ0FBQTtZQUNGLE9BQU07U0FDUDtRQUVELDBCQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQzFELEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixJQUFJLEVBQUUsQ0FBQzthQUNSLENBQUMsQ0FBQTtZQUVGLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDNUIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FNRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29rU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Jvb2suc2VydmljZSdcbmltcG9ydCB7IGxpa2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlrZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ29udGVudFR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZXBpc29kZS10eXBlLm1vZGVsJ1xuXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGNvbW1lbnRzOiBbXSxcbiAgICBib29rOiBudWxsLFxuICAgIGxpa2VTdGF0dXM6IGZhbHNlLFxuICAgIGxpa2VDb3VudDogMCxcbiAgICBwb3N0aW5nOiBmYWxzZVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cblxuICBvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB3eC5zaG93TG9hZGluZyh7IHRpdGxlOiAn5q2j5Zyo5Yqg6L29Li4uJyB9KVxuICAgIGNvbnN0IGJvb2tJZCA9IG9wdGlvbnMuYm9va0lkXG5cbiAgICBjb25zdCBkZXRhaWwgPSBib29rU2VydmljZS5nZXREZXRhaWwoYm9va0lkKVxuICAgIGNvbnN0IGNvbW1lbnRzID0gYm9va1NlcnZpY2UuZ2V0Q29tbWVudHMoYm9va0lkKVxuICAgIGNvbnN0IGxpa2VTdGF0dXMgPSBib29rU2VydmljZS5nZXRMaWtlSW5mbyhib29rSWQpXG5cbiAgICAvLyBQcm9taXNlLmFsbChbZGV0YWlsLCBjb21tZW50cywgbGlrZVN0YXR1c10pLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICAgIGJvb2s6IHJlc1swXSxcbiAgICAvLyAgICAgY29tbWVudHM6IHJlc1sxXSxcbiAgICAvLyAgICAgbGlrZVN0YXR1czogcmVzWzJdLmxpa2Vfc3RhdHVzLFxuICAgIC8vICAgICBsaWtlQ291bnQ6IHJlc1syXS5mYXZfbnVtc1xuICAgIC8vICAgfSlcblxuICAgIGRldGFpbC50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBib29rOiByZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbW1lbnRzLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGNvbW1lbnRzOiByZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGxpa2VTdGF0dXMudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlrZVN0YXR1czogcmVzLmxpa2Vfc3RhdHVzLFxuICAgICAgICBsaWtlQ291bnQ6IHJlcy5mYXZfbnVtc1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgd3guaGlkZUxvYWRpbmcoKVxuICB9LFxuXG4gIG9uTGlrZShldmVudCkge1xuICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXNcbiAgICBjb25zdCBsaWtlX29yX2NhbmNlbCA9IGV2ZW50LmRldGFpbC5saWtlXG4gICAgbGlrZVNlcnZpY2UubGlrZSh7IGFydElkOiB0aGF0LmRhdGEuYm9vay5pZCwgdHlwZTogQ29udGVudFR5cGUuQm9vaywgbGlrZTogbGlrZV9vcl9jYW5jZWwgfSlcbiAgfSxcblxuICBvbkZha2VQb3N0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHBvc3Rpbmc6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIG9uQ2FuY2VsKGV2ZW50KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHBvc3Rpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBvblBvc3QoZXZlbnQpIHtcbiAgICBjb25zdCBjb21tZW50ID0gZXZlbnQuZGV0YWlsLnRleHQgfHwgZXZlbnQuZGV0YWlsLnZhbHVlXG4gICAgY29uc29sZS5sb2coJ1RDTDogb25Qb3N0IC0+IGNvbW1lbnQnLCBjb21tZW50KVxuXG4gICAgaWYgKCFjb21tZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY29tbWVudC5sZW5ndGggPiAxMikge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfnn63or4TmnIDlpJoxMuS4quWtlycsXG4gICAgICAgIGljb246ICdub25lJ1xuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJvb2tTZXJ2aWNlLnBvc3RDb21tZW50KHRoaXMuZGF0YS5ib29rLmlkLCBjb21tZW50KS50aGVuKHJlcyA9PiB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJysgMScsXG4gICAgICAgIGljb246ICdub25lJ1xuICAgICAgfSlcblxuICAgICAgdGhpcy5kYXRhLmNvbW1lbnRzLnVuc2hpZnQoe1xuICAgICAgICBjb250ZW50OiBjb21tZW50LFxuICAgICAgICBudW1zOiAxXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjb21tZW50czogdGhpcy5kYXRhLmNvbW1lbnRzLFxuICAgICAgICBwb3N0aW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge31cbn0pXG4iXX0=