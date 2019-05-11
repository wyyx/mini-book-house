"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keyword_service_1 = require("../../services/keyword.service");
var book_service_1 = require("../../services/book.service");
Component({
    properties: {},
    data: {
        historyWords: [],
        hotWords: [],
        q: '',
        searching: false,
        loadingCenter: false,
        loadingMore: false,
        books: [],
        noResult: false
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
            this.showResult();
            this.showLoadingCenter();
            var q = event.detail.value || event.detail.text;
            if (!q || !q.trim()) {
                return;
            }
            this.setData({
                q: q
            });
            book_service_1.bookService.search(0, q).then(function (books) {
                console.log('TCL: onConfirm -> books', books);
                if (books.length < 1) {
                    _this.showNoResult();
                }
                _this.setData({
                    books: books
                });
                keyword_service_1.keywordService.addToHistory(q);
                _this.hideLoadingCenter();
            });
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBK0Q7QUFDL0QsNERBQXlEO0FBRXpELFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBRSxFQUFFO0lBQ2QsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLEVBQUU7UUFDaEIsUUFBUSxFQUFFLEVBQUU7UUFDWixDQUFDLEVBQUUsRUFBRTtRQUNMLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxRQUFRO1FBQVIsaUJBVUM7UUFUQyxnQ0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRzthQUNkLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFlBQVksRUFBRSxnQ0FBYyxDQUFDLFVBQVUsRUFBRTtTQUMxQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsUUFBUSxZQUFDLEtBQUs7WUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckMsQ0FBQztRQUNELE9BQU8sWUFBQyxLQUFLO1lBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN0QixDQUFDO1FBQ0QsU0FBUyxZQUFDLEtBQUs7WUFBZixpQkEyQkM7WUExQkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBRXhCLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1lBQ2pELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU07YUFDUDtZQUVELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsQ0FBQyxHQUFBO2FBQ0YsQ0FBQyxDQUFBO1lBRUYsMEJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBRTdDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtpQkFDcEI7Z0JBRUQsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxLQUFLLE9BQUE7aUJBQ04sQ0FBQyxDQUFBO2dCQUVGLGdDQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUM5QixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUMxQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxVQUFVO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsWUFBWTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsYUFBYTtZQUNYLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELFdBQVc7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixDQUFDLEVBQUUsRUFBRTthQUNOLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxpQkFBaUI7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxpQkFBaUI7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDSztDQUNULENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGtleXdvcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMva2V5d29yZC5zZXJ2aWNlJ1xuaW1wb3J0IHsgYm9va1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ib29rLnNlcnZpY2UnXG5cbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHt9LFxuICBkYXRhOiB7XG4gICAgaGlzdG9yeVdvcmRzOiBbXSxcbiAgICBob3RXb3JkczogW10sXG4gICAgcTogJycsXG4gICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICBsb2FkaW5nQ2VudGVyOiBmYWxzZSxcbiAgICBsb2FkaW5nTW9yZTogZmFsc2UsXG4gICAgYm9va3M6IFtdLFxuICAgIG5vUmVzdWx0OiBmYWxzZVxuICB9LFxuICBhdHRhY2hlZCgpIHtcbiAgICBrZXl3b3JkU2VydmljZS5nZXRIb3RLZXl3b3JkcygpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGhvdFdvcmRzOiByZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBoaXN0b3J5V29yZHM6IGtleXdvcmRTZXJ2aWNlLmdldEhpc3RvcnkoKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNhbmNlbChldmVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcsIHt9LCB7fSlcbiAgICB9LFxuICAgIG9uQ2xlYXIoZXZlbnQpIHtcbiAgICAgIHRoaXMuY2xvc2VSZXN1bHQoKVxuICAgICAgdGhpcy5jbG9zZU5vUmVzdWx0KClcbiAgICB9LFxuICAgIG9uQ29uZmlybShldmVudCkge1xuICAgICAgdGhpcy5zaG93UmVzdWx0KClcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmdDZW50ZXIoKVxuXG4gICAgICBjb25zdCBxID0gZXZlbnQuZGV0YWlsLnZhbHVlIHx8IGV2ZW50LmRldGFpbC50ZXh0XG4gICAgICBpZiAoIXEgfHwgIXEudHJpbSgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBxXG4gICAgICB9KVxuXG4gICAgICBib29rU2VydmljZS5zZWFyY2goMCwgcSkudGhlbihib29rcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUQ0w6IG9uQ29uZmlybSAtPiBib29rcycsIGJvb2tzKVxuXG4gICAgICAgIGlmIChib29rcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgdGhpcy5zaG93Tm9SZXN1bHQoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBib29rc1xuICAgICAgICB9KVxuXG4gICAgICAgIGtleXdvcmRTZXJ2aWNlLmFkZFRvSGlzdG9yeShxKVxuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nQ2VudGVyKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzaG93UmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2hvd05vUmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbm9SZXN1bHQ6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjbG9zZU5vUmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbm9SZXN1bHQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xvc2VSZXN1bHQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICBxOiAnJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNob3dMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhpZGVMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9IGFzIGFueVxufSlcbiJdfQ==