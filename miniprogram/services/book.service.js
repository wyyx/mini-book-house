"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_service_1 = require("./http.service");
exports.STORAGE_PREFIX = 'classic-';
var BookService = (function (_super) {
    __extends(BookService, _super);
    function BookService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookService.prototype.getHotBooks = function () {
        var booksFromStorage = wx.getStorageSync('hot-books');
        if (!booksFromStorage) {
            return this.request({
                path: '/book/hot_list'
            }).then(function (res) {
                wx.setStorageSync('hot-books', res.data);
                return res.data;
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                resolve(booksFromStorage);
            });
        }
    };
    BookService.prototype.getDetail = function (id) {
        var bookFromStorage = wx.getStorageSync("book-" + id);
        if (!bookFromStorage) {
            return this.request({
                path: "/book/" + id + "/detail"
            }).then(function (res) {
                wx.setStorageSync("book-" + id, res.data);
                return res.data;
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                resolve(bookFromStorage);
            });
        }
    };
    BookService.prototype.getComments = function (id) {
        return this.request({
            path: "/book/" + id + "/short_comment"
        }).then(function (res) {
            var resTypes = res.data;
            return resTypes.comments;
        });
    };
    BookService.prototype.getLikeInfo = function (id) {
        return this.request({
            path: "/book/" + id + "/favor"
        }).then(function (res) {
            return res.data;
        });
    };
    BookService.prototype.postComment = function (id, comment) {
        return this.request({
            path: '/book/add/short_comment',
            method: 'POST',
            data: {
                book_id: id,
                content: comment
            }
        });
    };
    return BookService;
}(http_service_1.HttpService));
exports.BookService = BookService;
exports.bookService = new BookService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQU0vQixRQUFBLGNBQWMsR0FBRyxVQUFVLENBQUE7QUFFeEM7SUFBaUMsK0JBQVc7SUFBNUM7O0lBZ0VBLENBQUM7SUEvREMsaUNBQVcsR0FBWDtRQUNFLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQVcsQ0FBQTtRQUVqRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUVULEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsT0FBTyxHQUFHLENBQUMsSUFBYyxDQUFBO1lBQzNCLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDM0IsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsRUFBbUI7UUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFRLEVBQUksQ0FBZSxDQUFBO1FBRXJFLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsV0FBUyxFQUFFLFlBQVM7YUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBRVQsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFRLEVBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3pDLE9BQU8sR0FBRyxDQUFDLElBQWtCLENBQUE7WUFDL0IsQ0FBQyxDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDMUIsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksRUFBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLElBQUksRUFBRSxXQUFTLEVBQUUsbUJBQWdCO1NBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQXVCLENBQUE7WUFDNUMsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxFQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsSUFBSSxFQUFFLFdBQVMsRUFBRSxXQUFRO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsT0FBTyxHQUFHLENBQUMsSUFBZ0IsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksRUFBbUIsRUFBRSxPQUFlO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWhFRCxDQUFpQywwQkFBVyxHQWdFM0M7QUFoRVksa0NBQVc7QUFrRVgsUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnXHJcbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuLi9tb2RlbHMvYm9vay5tb2RlbCdcclxuaW1wb3J0IHsgQm9va0RldGFpbCB9IGZyb20gJy4uL21vZGVscy9ib29rLWRldGFpbC5tb2RlbCdcclxuaW1wb3J0IHsgQ29tbWVudFJlc3BvbnNlLCBDb21tZW50IH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1lbnQubW9kZWwnXHJcbmltcG9ydCB7IExpa2VJbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2xpa2UubW9kZWwnXHJcblxyXG5leHBvcnQgY29uc3QgU1RPUkFHRV9QUkVGSVggPSAnY2xhc3NpYy0nXHJcblxyXG5leHBvcnQgY2xhc3MgQm9va1NlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZSB7XHJcbiAgZ2V0SG90Qm9va3MoKTogUHJvbWlzZTxCb29rW10+IHtcclxuICAgIGNvbnN0IGJvb2tzRnJvbVN0b3JhZ2UgPSB3eC5nZXRTdG9yYWdlU3luYygnaG90LWJvb2tzJykgYXMgQm9va1tdXHJcblxyXG4gICAgaWYgKCFib29rc0Zyb21TdG9yYWdlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6ICcvYm9vay9ob3RfbGlzdCdcclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdob3QtYm9va3MnLCByZXMuZGF0YSlcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGEgYXMgQm9va1tdXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoYm9va3NGcm9tU3RvcmFnZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldERldGFpbChpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxCb29rRGV0YWlsPiB7XHJcbiAgICBjb25zdCBib29rRnJvbVN0b3JhZ2UgPSB3eC5nZXRTdG9yYWdlU3luYyhgYm9vay0ke2lkfWApIGFzIEJvb2tEZXRhaWxcclxuXHJcbiAgICBpZiAoIWJvb2tGcm9tU3RvcmFnZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgL2Jvb2svJHtpZH0vZGV0YWlsYFxyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoYGJvb2stJHtpZH1gLCByZXMuZGF0YSlcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGEgYXMgQm9va0RldGFpbFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICByZXNvbHZlKGJvb2tGcm9tU3RvcmFnZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENvbW1lbnRzKGlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPENvbW1lbnRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHBhdGg6IGAvYm9vay8ke2lkfS9zaG9ydF9jb21tZW50YFxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBjb25zdCByZXNUeXBlcyA9IHJlcy5kYXRhIGFzIENvbW1lbnRSZXNwb25zZVxyXG4gICAgICByZXR1cm4gcmVzVHlwZXMuY29tbWVudHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRMaWtlSW5mbyhpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxMaWtlSW5mbz4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHBhdGg6IGAvYm9vay8ke2lkfS9mYXZvcmBcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5kYXRhIGFzIExpa2VJbmZvXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcG9zdENvbW1lbnQoaWQ6IHN0cmluZyB8IG51bWJlciwgY29tbWVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgcGF0aDogJy9ib29rL2FkZC9zaG9ydF9jb21tZW50JyxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBib29rX2lkOiBpZCxcclxuICAgICAgICBjb250ZW50OiBjb21tZW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYm9va1NlcnZpY2UgPSBuZXcgQm9va1NlcnZpY2UoKVxyXG4iXX0=