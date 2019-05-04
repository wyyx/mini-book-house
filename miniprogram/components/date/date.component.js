"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var months_util_1 = require("../../utils/months.util");
Component({
    properties: {
        index: {
            type: String,
            value: '',
            observer: function (newVal, oldVal) {
                if (newVal < 10) {
                    var that = this;
                    that.setData({
                        _index: '0' + newVal
                    });
                }
            },
            optionalTypes: []
        }
    },
    data: {
        year: '',
        month: '',
        _index: ''
    },
    attached: function () {
        var date = new Date();
        this.setData({
            year: date.getFullYear(),
            month: months_util_1.months[date.getMonth()]
        });
    },
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFnRDtBQUVoRCxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLFVBQVMsTUFBTSxFQUFFLE1BQU07Z0JBQy9CLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtvQkFDZixJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7b0JBRXRCLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNO3FCQUNyQixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1lBQ0QsYUFBYSxFQUFFLEVBQUU7U0FDbEI7S0FDRjtJQUtELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsUUFBUTtRQUNOLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFFdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMvQixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFLEVBQUU7Q0FDWixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb250aHMgfSBmcm9tICcuLi8uLi91dGlscy9tb250aHMudXRpbCdcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGluZGV4OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKG5ld1ZhbCA8IDEwKSB7XG4gICAgICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpc1xuXG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgIF9pbmRleDogJzAnICsgbmV3VmFsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB5ZWFyOiAnJyxcbiAgICBtb250aDogJycsXG4gICAgX2luZGV4OiAnJ1xuICB9LFxuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoOiBtb250aHNbZGF0ZS5nZXRNb250aCgpXVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge31cbn0pXG4iXX0=