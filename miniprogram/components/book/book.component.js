"use strict";
Component({
    properties: {
        book: {
            type: Object,
            value: {},
            optionalTypes: []
        },
        showLike: {
            type: Boolean,
            value: true,
            optionalTypes: []
        }
    },
    data: {},
    methods: {
        onTap: function (event) {
            var bookId = this.properties.book.id;
            wx.navigateTo({
                url: "/pages/book-detail/book-detail-page?bookId=" + bookId
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFBRTtJQUtSLE9BQU8sRUFBRTtRQUNQLEtBQUssWUFBQyxLQUFLO1lBQ1QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO1lBQ3RDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGdEQUE4QyxNQUFRO2FBQzVELENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDSztDQUNULENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBib29rOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZToge30sXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH0sXG4gICAgc2hvd0xpa2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHt9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvblRhcChldmVudCkge1xuICAgICAgY29uc3QgYm9va0lkID0gdGhpcy5wcm9wZXJ0aWVzLmJvb2suaWRcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwtcGFnZT9ib29rSWQ9JHtib29rSWR9YFxuICAgICAgfSlcbiAgICB9XG4gIH0gYXMgYW55XG59KVxuIl19