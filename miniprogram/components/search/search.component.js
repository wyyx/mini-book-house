"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keyword_service_1 = require("../../services/keyword.service");
var book_service_1 = require("../../services/book.service");
Component({
    properties: {
        more: {
            type: String,
            value: '',
            optionalTypes: [],
            observer: 'loadMore'
        }
    },
    data: {
        historyWords: [],
        hotWords: [],
        query: '',
        searching: false,
        loadingCenter: false,
        loadingMore: false,
        books: [],
        noResult: false,
        totalLength: null
    },
    attached: function () {
        var _this = this;
        keyword_service_1.keywordService.getHotKeywords().then(function (res) {
            _this.setData({
                hotWords: res
            });
        });
        this.setData({
            historyWords: keyword_service_1.keywordService.getHistory()
        });
    },
    methods: {
        onCancel: function (event) {
            this.triggerEvent('cancel', {}, {});
        },
        onClear: function (event) {
            this.closeResult();
            this.closeNoResult();
        },
        onConfirm: function (event) {
            var _this = this;
            console.log('onConfirm');
            this.showResult();
            this.showLoadingCenter();
            var query = event.detail.value || event.detail.text;
            if (!query || !query.trim()) {
                return;
            }
            this.setData({
                query: query
            });
            book_service_1.bookService.search(0, query).then(function (res) {
                _this.setData({
                    books: res.books,
                    totalLength: res.total
                });
                if (res.books.length < 1) {
                    _this.showNoResult();
                }
                _this.hideLoadingCenter();
                keyword_service_1.keywordService.addToHistory(query);
            });
        },
        loadMore: function () {
            var _this = this;
            console.log('loadMore');
            var query = this.data.query;
            if (!query || !query.trim()) {
                return;
            }
            if (!this.hasMore()) {
                return;
            }
            if (this.data.loadingMore) {
                return;
            }
            this.showLoadingMore();
            var currentLength = this.data.books.length;
            book_service_1.bookService
                .search(currentLength, query)
                .then(function (res) {
                var sumBooks = _this.data.books.concat(res.books);
                _this.setData({
                    books: sumBooks
                });
                _this.hideLoadingMore();
            })
                .catch(function (err) {
                _this.hideLoadingMore();
            });
        },
        hasMore: function () {
            return this.data.books.length < this.data.totalLength;
        },
        showResult: function () {
            this.setData({
                searching: true
            });
        },
        showNoResult: function () {
            this.setData({
                noResult: true
            });
        },
        closeNoResult: function () {
            this.setData({
                noResult: false
            });
        },
        closeResult: function () {
            this.setData({
                searching: false,
                q: ''
            });
        },
        showLoadingCenter: function () {
            this.setData({
                loadingCenter: true
            });
        },
        hideLoadingCenter: function () {
            this.setData({
                loadingCenter: false
            });
        },
        showLoadingMore: function () {
            this.setData({
                loadingMore: true
            });
        },
        hideLoadingMore: function () {
            this.setData({
                loadingMore: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBK0Q7QUFDL0QsNERBQXlEO0FBRXpELFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxhQUFhLEVBQUUsRUFBRTtZQUNqQixRQUFRLEVBQUUsVUFBaUI7U0FDNUI7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztRQUNoQixhQUFhLEVBQUUsS0FBSztRQUNwQixXQUFXLEVBQUUsS0FBSztRQUNsQixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFDRCxRQUFRO1FBQVIsaUJBVUM7UUFUQyxnQ0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRzthQUNkLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFlBQVksRUFBRSxnQ0FBYyxDQUFDLFVBQVUsRUFBRTtTQUMxQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsUUFBUSxZQUFDLEtBQUs7WUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckMsQ0FBQztRQUNELE9BQU8sWUFBQyxLQUFLO1lBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2xCLElBQUksQ0FBQyxh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QkFDWCxRQUFRLEVBQUUsS0FBSzthQUNoQixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsV0FBVztZQUNULElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLENBQUMsRUFBRSxFQUFFO2FBQ04sQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGlCQUFpQjtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsYUFBYSxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGlCQUFpQjtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGVBQWU7WUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxlQUFlO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxXQUFXLEVBQUUsS0FBSzthQUNuQixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0s7Q0FDVCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZXl3b3JkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2tleXdvcmQuc2VydmljZSdcbmltcG9ydCB7IGJvb2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYm9vay5zZXJ2aWNlJ1xuXG5Db21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbW9yZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgb3B0aW9uYWxUeXBlczogW10sXG4gICAgICBvYnNlcnZlcjogJ2xvYWRNb3JlJyBhcyBhbnlcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBoaXN0b3J5V29yZHM6IFtdLFxuICAgIGhvdFdvcmRzOiBbXSxcbiAgICBxdWVyeTogJycsXG4gICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICBsb2FkaW5nQ2VudGVyOiBmYWxzZSxcbiAgICBsb2FkaW5nTW9yZTogZmFsc2UsXG4gICAgYm9va3M6IFtdLFxuICAgIG5vUmVzdWx0OiBmYWxzZSxcbiAgICB0b3RhbExlbmd0aDogbnVsbFxuICB9LFxuICBhdHRhY2hlZCgpIHtcbiAgICBrZXl3b3JkU2VydmljZS5nZXRIb3RLZXl3b3JkcygpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGhvdFdvcmRzOiByZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBoaXN0b3J5V29yZHM6IGtleXdvcmRTZXJ2aWNlLmdldEhpc3RvcnkoKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNhbmNlbChldmVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcsIHt9LCB7fSlcbiAgICB9LFxuICAgIG9uQ2xlYXIoZXZlbnQpIHtcbiAgICAgIHRoaXMuY2xvc2VSZXN1bHQoKVxuICAgICAgdGhpcy5jbG9zZU5vUmVzdWx0KClcbiAgICB9LFxuICAgIG9uQ29uZmlybShldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ29uQ29uZmlybScpXG4gICAgICB0aGlzLnNob3dSZXN1bHQoKVxuICAgICAgdGhpcy5zaG93TG9hZGluZ0NlbnRlcigpXG5cbiAgICAgIC8vIGdldCBzZWFyY2ggc3RyaW5nIGZyb20gdGFnIG9yIHNlYXJjaCBib3hcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQuZGV0YWlsLnZhbHVlIHx8IGV2ZW50LmRldGFpbC50ZXh0XG5cbiAgICAgIC8vIHJldHVybiB3aGVuIHdoaXRlIHNwYWNlXG4gICAgICBpZiAoIXF1ZXJ5IHx8ICFxdWVyeS50cmltKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBzZWFyY2ggc3RyaW5nXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBxdWVyeVxuICAgICAgfSlcblxuICAgICAgLy8gZmlyc3QgbG9hZGluZ1xuICAgICAgYm9va1NlcnZpY2Uuc2VhcmNoKDAsIHF1ZXJ5KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYm9va3M6IHJlcy5ib29rcyxcbiAgICAgICAgICB0b3RhbExlbmd0aDogcmVzLnRvdGFsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gd2hlbiBubyByZXN1bHRcbiAgICAgICAgaWYgKHJlcy5ib29rcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgdGhpcy5zaG93Tm9SZXN1bHQoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZ0NlbnRlcigpXG5cbiAgICAgICAga2V5d29yZFNlcnZpY2UuYWRkVG9IaXN0b3J5KHF1ZXJ5KVxuICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xvYWRNb3JlJylcblxuICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmRhdGEucXVlcnlcblxuICAgICAgLy8gcmV0dXJuIHdoZW4gd2hpdGUgc3BhY2VcbiAgICAgIGlmICghcXVlcnkgfHwgIXF1ZXJ5LnRyaW0oKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJuIHdoZW4gbm8gbW9yZSBkYXRhXG4gICAgICBpZiAoIXRoaXMuaGFzTW9yZSgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm4gd2hlbiBpcyBsb2FkaW5nIG1vcmVcbiAgICAgIGlmICh0aGlzLmRhdGEubG9hZGluZ01vcmUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGxvYWRpbmcgbW9yZSB3aGVuIHJlYWNoaW5nIHBhZ2UgYm90dG9tXG4gICAgICB0aGlzLnNob3dMb2FkaW5nTW9yZSgpXG4gICAgICBjb25zdCBjdXJyZW50TGVuZ3RoID0gdGhpcy5kYXRhLmJvb2tzLmxlbmd0aFxuXG4gICAgICBib29rU2VydmljZVxuICAgICAgICAuc2VhcmNoKGN1cnJlbnRMZW5ndGgsIHF1ZXJ5KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1bUJvb2tzID0gdGhpcy5kYXRhLmJvb2tzLmNvbmNhdChyZXMuYm9va3MpXG5cbiAgICAgICAgICAvLyB1cGRhdGUgYm9va3NcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgYm9va3M6IHN1bUJvb2tzXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuaGlkZUxvYWRpbmdNb3JlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlTG9hZGluZ01vcmUoKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgaGFzTW9yZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuYm9va3MubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsTGVuZ3RoXG4gICAgfSxcbiAgICBzaG93UmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2hvd05vUmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbm9SZXN1bHQ6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjbG9zZU5vUmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbm9SZXN1bHQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xvc2VSZXN1bHQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICBxOiAnJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNob3dMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhpZGVMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzaG93TG9hZGluZ01vcmUoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsb2FkaW5nTW9yZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhpZGVMb2FkaW5nTW9yZSgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxvYWRpbmdNb3JlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0gYXMgYW55XG59KVxuIl19