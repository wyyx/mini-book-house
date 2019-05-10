"use strict";
Component({
    options: {
        multipleSlots: true
    },
    externalClasses: ['tag-class'],
    properties: {
        text: {
            type: String,
            value: '',
            optionalTypes: []
        }
    },
    data: {},
    methods: {
        onTap: function (event) {
            this.triggerEvent('tapping', {
                text: this.properties.text
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUlSLE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBQ0QsZUFBZSxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQzlCLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxhQUFhLEVBQUUsRUFBRTtTQUNsQjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFLUixPQUFPLEVBQUU7UUFDUCxLQUFLLFlBQUMsS0FBSztZQUNULElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO2dCQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO2FBQzNCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDSztDQUNULENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXG4gIH0sXG4gIGV4dGVybmFsQ2xhc3NlczogWyd0YWctY2xhc3MnXSxcbiAgcHJvcGVydGllczoge1xuICAgIHRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHt9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvblRhcChldmVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3RhcHBpbmcnLCB7XG4gICAgICAgIHRleHQ6IHRoaXMucHJvcGVydGllcy50ZXh0XG4gICAgICB9KVxuICAgIH1cbiAgfSBhcyBhbnlcbn0pXG4iXX0=