"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_service_1 = require("../../services/book.service");
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vay1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQXlEO0FBRXpELElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsU0FBUyxFQUFFLEtBQUs7UUFDaEIsSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUtELE1BQU0sRUFBRSxVQUFTLE1BQU07UUFBZixpQkFPUDtRQU5DLDBCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsV0FBVyxZQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVEsWUFBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29rU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Jvb2suc2VydmljZSdcblxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBib29rczogW10sXG4gICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICBtb3JlOiAnJ1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoFxuICAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpbnMpIHtcbiAgICBib29rU2VydmljZS5nZXRIb3RCb29rcygpLnRoZW4oYm9va3MgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYm9va3M6IGJvb2tzXG4gICAgICB9KVxuICAgIH0pXG4gICAgLy8gaWRcbiAgfSxcblxuICBvblNlYXJjaGluZyhldmVudCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzZWFyY2hpbmc6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIG9uQ2FuY2VsKGV2ZW50KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlYXJjaGluZzogZmFsc2VcbiAgICB9KVxuICB9XG59KVxuIl19