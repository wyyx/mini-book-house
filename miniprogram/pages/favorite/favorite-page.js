"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_service_1 = require("../../services/classic.service");
var book_service_1 = require("../../services/book.service");
var auth_service_1 = require("../../services/auth.service");
Page({
    data: {
        authorized: false,
        userInfo: null,
        bookCount: 0,
        classics: null
    },
    onShow: function () {
        this.getMyBookCount();
        this.getMyFavoriteClassics();
        this.checkAuth();
    },
    checkAuth: function () {
        var _this = this;
        auth_service_1.authService.checkAuth().then(function (isAuthorized) {
            console.log('TCL: checkAuth -> isAuthorized', isAuthorized);
            if (isAuthorized) {
                _this.setData({
                    authorized: isAuthorized
                });
                auth_service_1.authService.getUserInfo().then(function (userInfo) {
                    _this.setData({
                        userInfo: userInfo
                    });
                });
            }
        });
    },
    getMyFavoriteClassics: function () {
        var _this = this;
        classic_service_1.classicService.getMyFavorite().then(function (classics) {
            _this.setData({
                classics: classics
            });
        });
    },
    getMyBookCount: function () {
        var _this = this;
        book_service_1.bookService.getFavoriteBooksCount().then(function (res) {
            _this.setData({
                bookCount: res
            });
        });
    },
    onGetUserInfo: function (event) {
        var userInfo = event.detail.userInfo;
        console.log('TCL: onGetUserInfo -> userInfo', userInfo);
        if (userInfo) {
            this.setData({
                userInfo: userInfo,
                authorized: true
            });
        }
    },
    onJumpToAbout: function (event) {
        wx.navigateTo({
            url: '/pages/about/about'
        });
    },
    onJumpToDetail: function (event) {
        var cid = event.detail.cid;
        var type = event.detail.type;
        wx.navigateTo({
            url: "/pages/classic-detail/classic-detail?cid=" + cid + "&type=" + type
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBK0Q7QUFDL0QsNERBQXlEO0FBQ3pELDREQUF5RDtBQUV6RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUVELE1BQU07UUFDSixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxTQUFTO1FBQVQsaUJBZ0JDO1FBZkMsMEJBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxZQUFZO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLENBQUE7WUFFM0QsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsVUFBVSxFQUFFLFlBQVk7aUJBQ3pCLENBQUMsQ0FBQTtnQkFFRiwwQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsUUFBUSxVQUFBO3FCQUNULENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQscUJBQXFCO1FBQXJCLGlCQU1DO1FBTEMsZ0NBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxVQUFBO2FBQ1QsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYztRQUFkLGlCQU1DO1FBTEMsMEJBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsR0FBRzthQUNmLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWEsWUFBQyxLQUFLO1FBQ2pCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDdkQsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsVUFBQTtnQkFDUixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxhQUFhLFlBQUMsS0FBSztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxZQUFDLEtBQUs7UUFDbEIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDNUIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFFOUIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw4Q0FBNEMsR0FBRyxjQUFTLElBQU07U0FDcEUsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYXNzaWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xhc3NpYy5zZXJ2aWNlJ1xuaW1wb3J0IHsgYm9va1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ib29rLnNlcnZpY2UnXG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSdcblxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBhdXRob3JpemVkOiBmYWxzZSxcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBib29rQ291bnQ6IDAsXG4gICAgY2xhc3NpY3M6IG51bGxcbiAgfSxcblxuICBvblNob3coKSB7XG4gICAgdGhpcy5nZXRNeUJvb2tDb3VudCgpXG4gICAgdGhpcy5nZXRNeUZhdm9yaXRlQ2xhc3NpY3MoKVxuICAgIHRoaXMuY2hlY2tBdXRoKClcbiAgfSxcblxuICBjaGVja0F1dGgoKSB7XG4gICAgYXV0aFNlcnZpY2UuY2hlY2tBdXRoKCkudGhlbihpc0F1dGhvcml6ZWQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RDTDogY2hlY2tBdXRoIC0+IGlzQXV0aG9yaXplZCcsIGlzQXV0aG9yaXplZClcblxuICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGF1dGhvcml6ZWQ6IGlzQXV0aG9yaXplZFxuICAgICAgICB9KVxuXG4gICAgICAgIGF1dGhTZXJ2aWNlLmdldFVzZXJJbmZvKCkudGhlbih1c2VySW5mbyA9PiB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdldE15RmF2b3JpdGVDbGFzc2ljcygpIHtcbiAgICBjbGFzc2ljU2VydmljZS5nZXRNeUZhdm9yaXRlKCkudGhlbihjbGFzc2ljcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjbGFzc2ljc1xuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIGdldE15Qm9va0NvdW50KCkge1xuICAgIGJvb2tTZXJ2aWNlLmdldEZhdm9yaXRlQm9va3NDb3VudCgpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJvb2tDb3VudDogcmVzXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgb25HZXRVc2VySW5mbyhldmVudCkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gZXZlbnQuZGV0YWlsLnVzZXJJbmZvXG4gICAgY29uc29sZS5sb2coJ1RDTDogb25HZXRVc2VySW5mbyAtPiB1c2VySW5mbycsIHVzZXJJbmZvKVxuICAgIGlmICh1c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlckluZm8sXG4gICAgICAgIGF1dGhvcml6ZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIG9uSnVtcFRvQWJvdXQoZXZlbnQpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9hYm91dC9hYm91dCdcbiAgICB9KVxuICB9LFxuXG4gIG9uSnVtcFRvRGV0YWlsKGV2ZW50KSB7XG4gICAgY29uc3QgY2lkID0gZXZlbnQuZGV0YWlsLmNpZFxuICAgIGNvbnN0IHR5cGUgPSBldmVudC5kZXRhaWwudHlwZVxuICAgIC8vIHd4Lm5hdmlnYXRlVG9cbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC9wYWdlcy9jbGFzc2ljLWRldGFpbC9jbGFzc2ljLWRldGFpbD9jaWQ9JHtjaWR9JnR5cGU9JHt0eXBlfWBcbiAgICB9KVxuICB9XG59KVxuXG4vLyB3eC5uYXZpZ2F0ZVRvKHtcbi8vICAgdXJsOmAvcGFnZXMvY2xhc3NpYy1kZXRhaWwvaW5kZXg/Y2lkPSR7Y2lkfVxuLy8gICAgICZ0eXBlPSR7dHlwZX1gXG4vLyB9KVxuIl19