"use strict";
Component({
    properties: {
        title: {
            type: String,
            value: '',
            optionalTypes: []
        },
        isFirst: {
            type: Boolean,
            value: true,
            optionalTypes: []
        },
        isLast: {
            type: Boolean,
            value: false,
            optionalTypes: []
        }
    },
    data: {
        previousIcon: './images/previous@2x.png',
        previousDisIcon: './images/previous_dis@2x.png',
        nextIcon: './images/next@2x.png',
        nextDisIcon: './images/next_dis@2x.png'
    },
    methods: {
        previous: function () {
            if (this.properties.isFirst) {
                return;
            }
            this.triggerEvent('previous', {}, {});
        },
        next: function () {
            if (this.properties.isLast) {
                return;
            }
            this.triggerEvent('next', {}, {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsMEJBQTBCO1FBQ3hDLGVBQWUsRUFBRSw4QkFBOEI7UUFDL0MsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxXQUFXLEVBQUUsMEJBQTBCO0tBQ3hDO0lBS0QsT0FBTyxFQUFFO1FBQ1AsUUFBUTtZQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU07YUFDUDtZQUVELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBQ0QsSUFBSTtZQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCLE9BQU07YUFDUDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNuQyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL25hdmkvbmF2aS5jb21wb25lbnQuanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9LFxuICAgIGlzRmlyc3Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfSxcbiAgICBpc0xhc3Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgcHJldmlvdXNJY29uOiAnLi9pbWFnZXMvcHJldmlvdXNAMngucG5nJyxcbiAgICBwcmV2aW91c0Rpc0ljb246ICcuL2ltYWdlcy9wcmV2aW91c19kaXNAMngucG5nJyxcbiAgICBuZXh0SWNvbjogJy4vaW1hZ2VzL25leHRAMngucG5nJyxcbiAgICBuZXh0RGlzSWNvbjogJy4vaW1hZ2VzL25leHRfZGlzQDJ4LnBuZydcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgcHJldmlvdXMoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmlzRmlyc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdwcmV2aW91cycsIHt9LCB7fSlcbiAgICB9LFxuICAgIG5leHQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmlzTGFzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCduZXh0Jywge30sIHt9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==