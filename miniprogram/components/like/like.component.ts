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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImage: '../../images/like@2x.png',
    nolikeImage: '../../images/nolike@2x.png'
  },

  /**
   * 组件的方法列表
   */

  methods: {
    onTap(event) {
      const that: any = this

      const like = that.properties.like ? false : true
      const count = that.properties.like ? that.properties.count - 1 : that.properties.count + 1

      that.setData({
        like,
        count
      })
    }
  } as any
})
