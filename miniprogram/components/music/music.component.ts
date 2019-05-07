import { episodeBehavior } from '../behaviors/episode.behavior'

Component({
  /**
   * 组件的属性列表
   */

  behaviors: [episodeBehavior],
  properties: {
    isPlaying: {
      type: Boolean,
      value: false,
      optionalTypes: []
    },
    playImg: {
      type: String,
      value: './images/player@play.png',
      optionalTypes: []
    },
    pauseImg: {
      type: String,
      value: './images/player@pause.png',
      optionalTypes: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    togglePlay() {
      const that: any = this
      this.setData({
        isPlaying: that.data.isPlaying ? false : true
      })
    }
  }
})
