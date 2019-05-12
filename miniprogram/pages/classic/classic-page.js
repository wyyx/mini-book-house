"use strict";
Page({
    data: {
        cid: null,
        type: null
    },
    onLoad: function (options) {
        if (options.cid) {
            this.setData({
                cid: options.cid,
                type: options.type
            });
        }
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3NpYy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsSUFBSTtRQUNULElBQUksRUFBRSxJQUFJO0tBQ1g7SUFFRCxNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQ3RCLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO2dCQUNoQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7YUFDbkIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBS0QsT0FBTyxFQUFFLGNBQVksQ0FBQztJQUt0QixNQUFNLEVBQUUsY0FBWSxDQUFDO0lBS3JCLE1BQU0sRUFBRSxjQUFZLENBQUM7SUFLckIsUUFBUSxFQUFFLGNBQVksQ0FBQztJQUt2QixpQkFBaUIsRUFBRSxjQUFZLENBQUM7SUFLaEMsYUFBYSxFQUFFLGNBQVksQ0FBQztDQU03QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBjaWQ6IG51bGwsXHJcbiAgICB0eXBlOiBudWxsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucy5jaWQpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjaWQ6IG9wdGlvbnMuY2lkLFxyXG4gICAgICAgIHR5cGU6IG9wdGlvbnMudHlwZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBpcyBpbml0aWFsbHkgcmVuZGVyZWRcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2Ugc2hvd1xyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGhpZGVcclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSB1bmxvYWRcclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiB1c2VyIGRyb3AgZG93blxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBwYWdlIHJlYWNoIGJvdHRvbVxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCkge31cclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQ2FsbGVkIHdoZW4gdXNlciBjbGljayBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciB0byBzaGFyZVxyXG4gIC8vICAqL1xyXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHt9XHJcbn0pXHJcbiJdfQ==