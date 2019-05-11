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
        var detail$ = book_service_1.bookService.getDetail(bookId);
        var comments$ = book_service_1.bookService.getComments(bookId);
        var likeInfo$ = book_service_1.bookService.getLikeInfo(bookId);
        Promise.all([detail$, comments$, likeInfo$]).then(function (_a) {
            var detail = _a[0], comments = _a[1], likeInfo = _a[2];
            _this.setData({
                book: detail,
                comments: comments,
                likeStatus: likeInfo.like_status,
                likeCount: likeInfo.fav_nums
            });
            wx.hideLoading();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1kZXRhaWwtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2stZGV0YWlsLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBeUQ7QUFDekQsNERBQXlEO0FBQ3pELHNFQUE2RDtBQUU3RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLENBQUM7UUFDWixPQUFPLEVBQUUsS0FBSztLQUNmO0lBTUQsTUFBTSxFQUFFLFVBQVMsT0FBTztRQUFoQixpQkFrQlA7UUFqQkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQ3BDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFFN0IsSUFBTSxPQUFPLEdBQUcsMEJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0MsSUFBTSxTQUFTLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakQsSUFBTSxTQUFTLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUE0QjtnQkFBM0IsY0FBTSxFQUFFLGdCQUFRLEVBQUUsZ0JBQVE7WUFDNUUsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxXQUFXO2dCQUNoQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFFBQVE7YUFDN0IsQ0FBQyxDQUFBO1lBRUYsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBTixVQUFPLEtBQUs7UUFDVixJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7UUFDdEIsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDeEMsMEJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxnQ0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQTtJQUM5RixDQUFDO0lBRUQsVUFBVSxZQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUSxZQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxZQUFDLEtBQUs7UUFBWixpQkErQkM7UUE5QkMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFFdkQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU07U0FDUDtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7WUFDRixPQUFNO1NBQ1A7UUFFRCwwQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUMxRCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUN6QixPQUFPLEVBQUUsT0FBTztnQkFDaEIsSUFBSSxFQUFFLENBQUM7YUFDUixDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzVCLE9BQU8sRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBTUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9va1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ib29rLnNlcnZpY2UnXG5pbXBvcnQgeyBsaWtlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpa2Uuc2VydmljZSdcbmltcG9ydCB7IENvbnRlbnRUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VwaXNvZGUtdHlwZS5tb2RlbCdcblxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjb21tZW50czogW10sXG4gICAgYm9vazogbnVsbCxcbiAgICBsaWtlU3RhdHVzOiBmYWxzZSxcbiAgICBsaWtlQ291bnQ6IDAsXG4gICAgcG9zdGluZzogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG5cbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgd3guc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ato+WcqOWKoOi9vS4uLicgfSlcbiAgICBjb25zdCBib29rSWQgPSBvcHRpb25zLmJvb2tJZFxuXG4gICAgY29uc3QgZGV0YWlsJCA9IGJvb2tTZXJ2aWNlLmdldERldGFpbChib29rSWQpXG4gICAgY29uc3QgY29tbWVudHMkID0gYm9va1NlcnZpY2UuZ2V0Q29tbWVudHMoYm9va0lkKVxuICAgIGNvbnN0IGxpa2VJbmZvJCA9IGJvb2tTZXJ2aWNlLmdldExpa2VJbmZvKGJvb2tJZClcblxuICAgIFByb21pc2UuYWxsKFtkZXRhaWwkLCBjb21tZW50cyQsIGxpa2VJbmZvJF0pLnRoZW4oKFtkZXRhaWwsIGNvbW1lbnRzLCBsaWtlSW5mb10pID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJvb2s6IGRldGFpbCxcbiAgICAgICAgY29tbWVudHM6IGNvbW1lbnRzLFxuICAgICAgICBsaWtlU3RhdHVzOiBsaWtlSW5mby5saWtlX3N0YXR1cyxcbiAgICAgICAgbGlrZUNvdW50OiBsaWtlSW5mby5mYXZfbnVtc1xuICAgICAgfSlcblxuICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgIH0pXG4gIH0sXG5cbiAgb25MaWtlKGV2ZW50KSB7XG4gICAgY29uc3QgdGhhdDogYW55ID0gdGhpc1xuICAgIGNvbnN0IGxpa2Vfb3JfY2FuY2VsID0gZXZlbnQuZGV0YWlsLmxpa2VcbiAgICBsaWtlU2VydmljZS5saWtlKHsgYXJ0SWQ6IHRoYXQuZGF0YS5ib29rLmlkLCB0eXBlOiBDb250ZW50VHlwZS5Cb29rLCBsaWtlOiBsaWtlX29yX2NhbmNlbCB9KVxuICB9LFxuXG4gIG9uRmFrZVBvc3QoZXZlbnQpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcG9zdGluZzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgb25DYW5jZWwoZXZlbnQpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcG9zdGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIG9uUG9zdChldmVudCkge1xuICAgIGNvbnN0IGNvbW1lbnQgPSBldmVudC5kZXRhaWwudGV4dCB8fCBldmVudC5kZXRhaWwudmFsdWVcblxuICAgIGlmICghY29tbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNvbW1lbnQubGVuZ3RoID4gMTIpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn55+t6K+E5pyA5aSaMTLkuKrlrZcnLFxuICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBib29rU2VydmljZS5wb3N0Q29tbWVudCh0aGlzLmRhdGEuYm9vay5pZCwgY29tbWVudCkudGhlbihyZXMgPT4ge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICcrIDEnLFxuICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZGF0YS5jb21tZW50cy51bnNoaWZ0KHtcbiAgICAgICAgY29udGVudDogY29tbWVudCxcbiAgICAgICAgbnVtczogMVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY29tbWVudHM6IHRoaXMuZGF0YS5jb21tZW50cyxcbiAgICAgICAgcG9zdGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHt9XG59KVxuIl19