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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFnRDtBQUloRCxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLFVBQVMsTUFBTSxFQUFFLE1BQU07Z0JBQy9CLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtvQkFDZixJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7b0JBRXRCLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNO3FCQUNyQixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1lBQ0QsYUFBYSxFQUFFLEVBQUU7U0FDbEI7S0FDRjtJQUtELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsUUFBUTtRQUNOLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFFdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMvQixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFLEVBQUU7Q0FDWixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb250aHMgfSBmcm9tICcuLi8uLi91dGlscy9tb250aHMudXRpbCdcblxuLy8gY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50LmpzXG5cbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpbmRleDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGlmIChuZXdWYWwgPCAxMCkge1xuICAgICAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXNcblxuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBfaW5kZXg6ICcwJyArIG5ld1ZhbFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgeWVhcjogJycsXG4gICAgbW9udGg6ICcnLFxuICAgIF9pbmRleDogJydcbiAgfSxcbiAgYXR0YWNoZWQoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aDogbW9udGhzW2RhdGUuZ2V0TW9udGgoKV1cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHt9XG59KVxuIl19