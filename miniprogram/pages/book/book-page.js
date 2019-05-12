"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_service_1 = require("../../services/book.service");
var common_util_1 = require("../../utils/common.util");
Page({
    data: {
        books: [],
        searching: false,
        more: ''
    },
    onLoad: function (optins) {
        var _this = this;
        book_service_1.bookService.getHotBooks().then(function (books) {
            _this.setData({
                books: books
            });
        });
    },
    onSearching: function (event) {
        this.setData({
            searching: true
        });
    },
    onCancel: function (event) {
        this.setData({
            searching: false
        });
    },
    onReachBottom: function () {
        this.setData({
            more: common_util_1.randomString(16)
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vay1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQXlEO0FBQ3pELHVEQUFzRDtBQUV0RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtRQUNULFNBQVMsRUFBRSxLQUFLO1FBQ2hCLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFLRCxNQUFNLEVBQUUsVUFBUyxNQUFNO1FBQWYsaUJBT1A7UUFOQywwQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLEVBQUUsS0FBSzthQUNiLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELFdBQVcsWUFBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRLFlBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsMEJBQVksQ0FBQyxFQUFFLENBQUM7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYm9vay5zZXJ2aWNlJ1xuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLnV0aWwnXG5cblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgYm9va3M6IFtdLFxuICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgbW9yZTogJydcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqBcbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24ob3B0aW5zKSB7XG4gICAgYm9va1NlcnZpY2UuZ2V0SG90Qm9va3MoKS50aGVuKGJvb2tzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJvb2tzOiBib29rc1xuICAgICAgfSlcbiAgICB9KVxuICAgIC8vIGlkXG4gIH0sXG5cbiAgb25TZWFyY2hpbmcoZXZlbnQpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2VhcmNoaW5nOiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBvbkNhbmNlbChldmVudCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzZWFyY2hpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtb3JlOiByYW5kb21TdHJpbmcoMTYpXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==