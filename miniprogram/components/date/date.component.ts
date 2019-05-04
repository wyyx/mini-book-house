import { months } from '../../utils/months.util'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        if (newVal < 10) {
          const that: any = this

          that.setData({
            _index: '0' + newVal
          })
        }
      },
      optionalTypes: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: '',
    month: '',
    _index: ''
  },
  attached() {
    const date = new Date()

    this.setData({
      year: date.getFullYear(),
      month: months[date.getMonth()]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {}
})
