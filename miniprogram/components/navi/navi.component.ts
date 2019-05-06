// components/navi/navi.component.js
Component({
  /**
   * 组件的属性列表
   */
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

  /**
   * 组件的初始数据
   */
  data: {
    previousIcon: './images/previous@2x.png',
    previousDisIcon: './images/previous_dis@2x.png',
    nextIcon: './images/next@2x.png',
    nextDisIcon: './images/next_dis@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previous() {
      if (this.properties.isFirst) {
        return
      }

      this.triggerEvent('previous', {}, {})
    },
    next() {
      if (this.properties.isLast) {
        return
      }
      this.triggerEvent('next', {}, {})
    }
  }
})
