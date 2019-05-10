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
        var commentsFromStorage = wx.getStorageSync("book-" + id + "-comments");
        if (!commentsFromStorage) {
            return this.request({
                path: "/book/" + id + "/short_comment"
            }).then(function (res) {
                var resTypes = res.data;
                wx.setStorageSync("book-" + id + "-comments", resTypes.comments);
                return resTypes.comments;
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                resolve(commentsFromStorage);
            });
        }
    };
    BookService.prototype.getLikeInfo = function (id) {
        return this.request({
            path: "/book/" + id + "/favor"
        }).then(function (res) {
            return res.data;
        });
    };
    return BookService;
}(http_service_1.HttpService));
exports.BookService = BookService;
exports.bookService = new BookService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQU0vQixRQUFBLGNBQWMsR0FBRyxVQUFVLENBQUE7QUFFeEM7SUFBaUMsK0JBQVc7SUFBNUM7O0lBK0RBLENBQUM7SUE5REMsaUNBQVcsR0FBWDtRQUNFLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQVcsQ0FBQTtRQUVqRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUVULEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsT0FBTyxHQUFHLENBQUMsSUFBYyxDQUFBO1lBQzNCLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDM0IsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsRUFBbUI7UUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFRLEVBQUksQ0FBZSxDQUFBO1FBRXJFLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsV0FBUyxFQUFFLFlBQVM7YUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBRVQsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFRLEVBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3pDLE9BQU8sR0FBRyxDQUFDLElBQWtCLENBQUE7WUFDL0IsQ0FBQyxDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDMUIsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksRUFBbUI7UUFDN0IsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVEsRUFBRSxjQUFXLENBQWMsQ0FBQTtRQUVqRixJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsV0FBUyxFQUFFLG1CQUFnQjthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDVCxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBdUIsQ0FBQTtnQkFFNUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFRLEVBQUUsY0FBVyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDM0QsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFBO1lBQzFCLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDOUIsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksRUFBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLElBQUksRUFBRSxXQUFTLEVBQUUsV0FBUTtTQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNULE9BQU8sR0FBRyxDQUFDLElBQWdCLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBL0RELENBQWlDLDBCQUFXLEdBK0QzQztBQS9EWSxrQ0FBVztBQWlFWCxRQUFBLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSdcclxuaW1wb3J0IHsgQm9vayB9IGZyb20gJy4uL21vZGVscy9ib29rLm1vZGVsJ1xyXG5pbXBvcnQgeyBCb29rRGV0YWlsIH0gZnJvbSAnLi4vbW9kZWxzL2Jvb2stZGV0YWlsLm1vZGVsJ1xyXG5pbXBvcnQgeyBDb21tZW50UmVzcG9uc2UsIENvbW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvY29tbWVudC5tb2RlbCdcclxuaW1wb3J0IHsgTGlrZUluZm8gfSBmcm9tICcuLi9tb2RlbHMvbGlrZS5tb2RlbCdcclxuXHJcbmV4cG9ydCBjb25zdCBTVE9SQUdFX1BSRUZJWCA9ICdjbGFzc2ljLSdcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlIHtcclxuICBnZXRIb3RCb29rcygpOiBQcm9taXNlPEJvb2tbXT4ge1xyXG4gICAgY29uc3QgYm9va3NGcm9tU3RvcmFnZSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdob3QtYm9va3MnKSBhcyBCb29rW11cclxuXHJcbiAgICBpZiAoIWJvb2tzRnJvbVN0b3JhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogJy9ib29rL2hvdF9saXN0J1xyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2hvdC1ib29rcycsIHJlcy5kYXRhKVxyXG4gICAgICAgIHJldHVybiByZXMuZGF0YSBhcyBCb29rW11cclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShib29rc0Zyb21TdG9yYWdlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGV0YWlsKGlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPEJvb2tEZXRhaWw+IHtcclxuICAgIGNvbnN0IGJvb2tGcm9tU3RvcmFnZSA9IHd4LmdldFN0b3JhZ2VTeW5jKGBib29rLSR7aWR9YCkgYXMgQm9va0RldGFpbFxyXG5cclxuICAgIGlmICghYm9va0Zyb21TdG9yYWdlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGAvYm9vay8ke2lkfS9kZXRhaWxgXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBzYXZlIHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhgYm9vay0ke2lkfWAsIHJlcy5kYXRhKVxyXG4gICAgICAgIHJldHVybiByZXMuZGF0YSBhcyBCb29rRGV0YWlsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoYm9va0Zyb21TdG9yYWdlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29tbWVudHMoaWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8Q29tbWVudFtdPiB7XHJcbiAgICBjb25zdCBjb21tZW50c0Zyb21TdG9yYWdlID0gd3guZ2V0U3RvcmFnZVN5bmMoYGJvb2stJHtpZH0tY29tbWVudHNgKSBhcyBDb21tZW50W11cclxuXHJcbiAgICBpZiAoIWNvbW1lbnRzRnJvbVN0b3JhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYC9ib29rLyR7aWR9L3Nob3J0X2NvbW1lbnRgXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zdCByZXNUeXBlcyA9IHJlcy5kYXRhIGFzIENvbW1lbnRSZXNwb25zZVxyXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKGBib29rLSR7aWR9LWNvbW1lbnRzYCwgcmVzVHlwZXMuY29tbWVudHMpXHJcbiAgICAgICAgcmV0dXJuIHJlc1R5cGVzLmNvbW1lbnRzXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoY29tbWVudHNGcm9tU3RvcmFnZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExpa2VJbmZvKGlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPExpa2VJbmZvPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgcGF0aDogYC9ib29rLyR7aWR9L2Zhdm9yYFxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGEgYXMgTGlrZUluZm9cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYm9va1NlcnZpY2UgPSBuZXcgQm9va1NlcnZpY2UoKVxyXG4iXX0=