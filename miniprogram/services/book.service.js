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
    BookService.prototype.getFavoriteBooksCount = function () {
        return this.request({
            path: "/book/favor/count"
        }).then(function (res) {
            return res.data.count;
        });
    };
    BookService.prototype.search = function (start, q) {
        return this.request({
            path: '/book/search?summary=1',
            data: {
                q: q,
                start: start
            }
        }).then(function (res) {
            return res.data;
        });
    };
    return BookService;
}(http_service_1.HttpService));
exports.BookService = BookService;
exports.bookService = new BookService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQU0vQixRQUFBLGNBQWMsR0FBRyxVQUFVLENBQUE7QUFFeEM7SUFBaUMsK0JBQVc7SUFBNUM7O0lBb0ZBLENBQUM7SUFuRkMsaUNBQVcsR0FBWDtRQUNFLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQVcsQ0FBQTtRQUVqRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUVULEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsT0FBTyxHQUFHLENBQUMsSUFBYyxDQUFBO1lBQzNCLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDM0IsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsRUFBbUI7UUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFRLEVBQUksQ0FBZSxDQUFBO1FBRXJFLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsV0FBUyxFQUFFLFlBQVM7YUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBRVQsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFRLEVBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3pDLE9BQU8sR0FBRyxDQUFDLElBQWtCLENBQUE7WUFDL0IsQ0FBQyxDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDMUIsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksRUFBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLElBQUksRUFBRSxXQUFTLEVBQUUsbUJBQWdCO1NBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQXVCLENBQUE7WUFDNUMsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxFQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsSUFBSSxFQUFFLFdBQVMsRUFBRSxXQUFRO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsT0FBTyxHQUFHLENBQUMsSUFBZ0IsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksRUFBbUIsRUFBRSxPQUFlO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDJDQUFxQixHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixJQUFJLEVBQUUsbUJBQW1CO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsT0FBUSxHQUFHLENBQUMsSUFBWSxDQUFDLEtBQUssQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLENBQVM7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsSUFBSSxFQUFFO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNULE9BQU8sR0FBRyxDQUFDLElBQTBCLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBcEZELENBQWlDLDBCQUFXLEdBb0YzQztBQXBGWSxrQ0FBVztBQXNGWCxRQUFBLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSdcclxuaW1wb3J0IHsgQm9vaywgU2VhcmNoQm9va1Jlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2Jvb2subW9kZWwnXHJcbmltcG9ydCB7IEJvb2tEZXRhaWwgfSBmcm9tICcuLi9tb2RlbHMvYm9vay1kZXRhaWwubW9kZWwnXHJcbmltcG9ydCB7IENvbW1lbnRSZXNwb25zZSwgQ29tbWVudCB9IGZyb20gJy4uL21vZGVscy9jb21tZW50Lm1vZGVsJ1xyXG5pbXBvcnQgeyBMaWtlSW5mbyB9IGZyb20gJy4uL21vZGVscy9saWtlLm1vZGVsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUT1JBR0VfUFJFRklYID0gJ2NsYXNzaWMtJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2Uge1xyXG4gIGdldEhvdEJvb2tzKCk6IFByb21pc2U8Qm9va1tdPiB7XHJcbiAgICBjb25zdCBib29rc0Zyb21TdG9yYWdlID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2hvdC1ib29rcycpIGFzIEJvb2tbXVxyXG5cclxuICAgIGlmICghYm9va3NGcm9tU3RvcmFnZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiAnL2Jvb2svaG90X2xpc3QnXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBzYXZlIHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaG90LWJvb2tzJywgcmVzLmRhdGEpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhIGFzIEJvb2tbXVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICByZXNvbHZlKGJvb2tzRnJvbVN0b3JhZ2UpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZXRhaWwoaWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8Qm9va0RldGFpbD4ge1xyXG4gICAgY29uc3QgYm9va0Zyb21TdG9yYWdlID0gd3guZ2V0U3RvcmFnZVN5bmMoYGJvb2stJHtpZH1gKSBhcyBCb29rRGV0YWlsXHJcblxyXG4gICAgaWYgKCFib29rRnJvbVN0b3JhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYC9ib29rLyR7aWR9L2RldGFpbGBcclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKGBib29rLSR7aWR9YCwgcmVzLmRhdGEpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhIGFzIEJvb2tEZXRhaWxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShib29rRnJvbVN0b3JhZ2UpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb21tZW50cyhpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxDb21tZW50W10+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBwYXRoOiBgL2Jvb2svJHtpZH0vc2hvcnRfY29tbWVudGBcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc3QgcmVzVHlwZXMgPSByZXMuZGF0YSBhcyBDb21tZW50UmVzcG9uc2VcclxuICAgICAgcmV0dXJuIHJlc1R5cGVzLmNvbW1lbnRzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlrZUluZm8oaWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8TGlrZUluZm8+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICBwYXRoOiBgL2Jvb2svJHtpZH0vZmF2b3JgXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuZGF0YSBhcyBMaWtlSW5mb1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHBvc3RDb21tZW50KGlkOiBzdHJpbmcgfCBudW1iZXIsIGNvbW1lbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHBhdGg6ICcvYm9vay9hZGQvc2hvcnRfY29tbWVudCcsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYm9va19pZDogaWQsXHJcbiAgICAgICAgY29udGVudDogY29tbWVudFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0RmF2b3JpdGVCb29rc0NvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgcGF0aDogYC9ib29rL2Zhdm9yL2NvdW50YFxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gKHJlcy5kYXRhIGFzIGFueSkuY291bnRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZWFyY2goc3RhcnQ6IG51bWJlciwgcTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgcGF0aDogJy9ib29rL3NlYXJjaD9zdW1tYXJ5PTEnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcTogcSxcclxuICAgICAgICBzdGFydDogc3RhcnRcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGEgYXMgU2VhcmNoQm9va1Jlc3BvbnNlXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJvb2tTZXJ2aWNlID0gbmV3IEJvb2tTZXJ2aWNlKClcclxuIl19