"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_service_1 = require("../../services/http.service");
Page({
    data: {},
    onLoad: function (options) {
        http_service_1.httpService.setHeader('aaa', 'bbb');
        http_service_1.httpService.request({
            url: 'classic/latest',
            success: function (res) {
                console.log('TCL: res', res);
            },
            fail: function (err) {
                console.log('TCL: err', err);
            }
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBeUQ7QUFHekQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFLEVBQUU7SUFNUixNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQ3RCLDBCQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNuQywwQkFBVyxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzlCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM5QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRSxjQUFZLENBQUM7SUFLdEIsTUFBTSxFQUFFLGNBQVksQ0FBQztJQUtyQixNQUFNLEVBQUUsY0FBWSxDQUFDO0lBS3JCLFFBQVEsRUFBRSxjQUFZLENBQUM7SUFLdkIsaUJBQWlCLEVBQUUsY0FBWSxDQUFDO0lBS2hDLGFBQWEsRUFBRSxjQUFZLENBQUM7Q0FNN0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHR0cFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UnXHJcblxyXG4vLyBtaW5pcHJvZ3JhbS9wYWdlcy9jbGFzc2ljL2NsYXNzaWMuanNcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICogUGFnZSBpbml0aWFsIGRhdGFcclxuICAgKi9cclxuICBkYXRhOiB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGxvYWRcclxuICAgKi9cclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBodHRwU2VydmljZS5zZXRIZWFkZXIoJ2FhYScsICdiYmInKVxyXG4gICAgaHR0cFNlcnZpY2UucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2NsYXNzaWMvbGF0ZXN0JyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVENMOiByZXMnLCByZXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RDTDogZXJyJywgZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBpcyBpbml0aWFsbHkgcmVuZGVyZWRcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2Ugc2hvd1xyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGhpZGVcclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSB1bmxvYWRcclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiB1c2VyIGRyb3AgZG93blxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBwYWdlIHJlYWNoIGJvdHRvbVxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCkge31cclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQ2FsbGVkIHdoZW4gdXNlciBjbGljayBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciB0byBzaGFyZVxyXG4gIC8vICAqL1xyXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHt9XHJcbn0pXHJcbiJdfQ==