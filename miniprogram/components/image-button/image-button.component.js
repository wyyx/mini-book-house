"use strict";
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        openType: {
            type: String,
            value: '',
            optionalTypes: []
        }
    },
    data: {},
    methods: {
        onGetUserInfo: function (event) {
            this.triggerEvent('getuserinfo', event.detail, {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUlSLE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULGFBQWEsRUFBRSxFQUFFO1NBQ2xCO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFBRTtJQUtSLE9BQU8sRUFBRTtRQUNQLGFBQWEsWUFBQyxLQUFLO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDcEQsQ0FBQztLQUNLO0NBQ1QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIG11bHRpcGxlU2xvdHM6IHRydWVcbiAgfSxcbiAgcHJvcGVydGllczoge1xuICAgIG9wZW5UeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7fSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb25HZXRVc2VySW5mbyhldmVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2dldHVzZXJpbmZvJywgZXZlbnQuZGV0YWlsLCB7fSlcbiAgICB9XG4gIH0gYXMgYW55XG59KVxuIl19