"use strict";
Component({
    properties: {
        classic: {
            type: Object,
            value: null,
            optionalTypes: [],
            observer: function (newVal) {
                var that = this;
                if (newVal) {
                    var typeText = {
                        100: '电影',
                        200: '音乐',
                        300: '句子'
                    }[newVal.type];
                }
                that.setData({
                    typeText: typeText
                });
            }
        }
    },
    data: {
        typeText: ''
    },
    methods: {
        onTap: function (event) {
            this.triggerEvent('tapping', {
                cid: this.properties.classic.id,
                type: this.properties.classic.type
            }, {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxVQUFTLE1BQU07Z0JBQ3ZCLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtnQkFFdEIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxRQUFRLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLElBQUk7d0JBQ1QsR0FBRyxFQUFFLElBQUk7d0JBQ1QsR0FBRyxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ2Y7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLFVBQUE7aUJBQ1QsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLFVBQVMsS0FBSztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUNmLFNBQVMsRUFDVDtnQkFDRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUk7YUFDbkMsRUFDRCxFQUFFLENBQ0gsQ0FBQTtRQUNILENBQUM7S0FDSztDQUNULENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBjbGFzc2ljOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdLFxuICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uKG5ld1ZhbCkge1xuICAgICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG5cbiAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgIHZhciB0eXBlVGV4dCA9IHtcbiAgICAgICAgICAgIDEwMDogJ+eUteW9sScsXG4gICAgICAgICAgICAyMDA6ICfpn7PkuZAnLFxuICAgICAgICAgICAgMzAwOiAn5Y+l5a2QJ1xuICAgICAgICAgIH1bbmV3VmFsLnR5cGVdXG4gICAgICAgIH1cblxuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIHR5cGVUZXh0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB0eXBlVGV4dDogJydcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb25UYXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcbiAgICAgICAgJ3RhcHBpbmcnLFxuICAgICAgICB7XG4gICAgICAgICAgY2lkOiB0aGlzLnByb3BlcnRpZXMuY2xhc3NpYy5pZCxcbiAgICAgICAgICB0eXBlOiB0aGlzLnByb3BlcnRpZXMuY2xhc3NpYy50eXBlXG4gICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfVxuICB9IGFzIGFueVxufSlcbiJdfQ==