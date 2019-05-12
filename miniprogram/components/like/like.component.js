"use strict";
Component({
    properties: {
        like: {
            type: Boolean,
            value: false,
            optionalTypes: []
        },
        count: {
            type: Number,
            value: 0,
            optionalTypes: []
        },
        readOnly: {
            type: Boolean,
            value: false,
            optionalTypes: []
        }
    },
    data: {
        likeImage: './images/like@2x.png',
        nolikeImage: './images/nolike@2x.png'
    },
    methods: {
        onTap: function (event) {
            if (this.data.readOnly) {
                return;
            }
            var like = this.properties.like ? false : true;
            var count = this.properties.like ? this.properties.count - 1 : this.properties.count + 1;
            this.setData({
                like: like,
                count: count
            });
            this.triggerEvent('like', { like: like }, {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWtlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFdBQVcsRUFBRSx3QkFBd0I7S0FDdEM7SUFNRCxPQUFPLEVBQUU7UUFDUCxLQUFLLFlBQUMsS0FBSztZQUNULElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLE9BQU07YUFDUDtZQUVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtZQUNoRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7WUFDMUYsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLE1BQUE7Z0JBQ0osS0FBSyxPQUFBO2FBQ04sQ0FBQyxDQUFBO1lBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3pDLENBQUM7S0FDSztDQUNULENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbGlrZS9saWtlLmNvbXBvbmVudC5qc1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGxpa2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH0sXG4gICAgY291bnQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9LFxuICAgIHJlYWRPbmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGxpa2VJbWFnZTogJy4vaW1hZ2VzL2xpa2VAMngucG5nJyxcbiAgICBub2xpa2VJbWFnZTogJy4vaW1hZ2VzL25vbGlrZUAyeC5wbmcnXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cblxuICBtZXRob2RzOiB7XG4gICAgb25UYXAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxpa2UgPSB0aGlzLnByb3BlcnRpZXMubGlrZSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgY29uc3QgY291bnQgPSB0aGlzLnByb3BlcnRpZXMubGlrZSA/IHRoaXMucHJvcGVydGllcy5jb3VudCAtIDEgOiB0aGlzLnByb3BlcnRpZXMuY291bnQgKyAxXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaWtlLFxuICAgICAgICBjb3VudFxuICAgICAgfSlcblxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2xpa2UnLCB7IGxpa2UgfSwge30pXG4gICAgfVxuICB9IGFzIGFueVxufSlcbiJdfQ==