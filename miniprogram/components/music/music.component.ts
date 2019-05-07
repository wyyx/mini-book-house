import { episodeBehavior } from '../behaviors/episode.behavior'

const audioContext = wx.createInnerAudioContext()

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
    },
    musicAudioSrc: {
      type: String,
      value: '',
      optionalTypes: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  attached() {
    const that: any = this

    that.recoverPlayingStatus()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    recoverPlayingStatus() {
      const that: any = this

      if (audioContext.src === that.data.musicAudioSrc) {
        this.setData({
          isPlaying: true
        })
      }
    },

    togglePlay() {
      const that: any = this

      // seting audio src
      audioContext.src = that.data.musicAudioSrc

      if (that.data.isPlaying) {
        audioContext.pause()
      } else {
        audioContext.play()
      }

      this.setData({
        isPlaying: that.data.isPlaying ? false : true
      })
    }
  }
})
