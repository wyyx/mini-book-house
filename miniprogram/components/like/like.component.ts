// components/like/like.component.js
Component({
  /**
   * 组件的属性列表
   */
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

  /**
   * 组件的初始数据
   */
  data: {
    likeImage: './images/like@2x.png',
    nolikeImage: './images/nolike@2x.png'
  },

  /**
   * 组件的方法列表
   */

  methods: {
    onTap(event) {
      if (this.data.readOnly) {
        return
      }

      const like = this.properties.like ? false : true
      const count = this.properties.like ? this.properties.count - 1 : this.properties.count + 1
      this.setData({
        like,
        count
      })

      this.triggerEvent('like', { like }, {})
    }
  } as any
})
