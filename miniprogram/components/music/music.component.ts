import { episodeBehavior } from '../behaviors/episode.behavior'
import { audioContext } from '../../utils/audio.util'

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
    that.monitorPlayer()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    recoverPlayingStatus() {
      const that: any = this

      if (audioContext.src === that.data.musicAudioSrc) {
        this.setData({
          isPlaying: !audioContext.paused
        })
      }
    },

    monitorPlayer() {
      const that: any = this

      audioContext.onPlay(() => {
        that.recoverPlayingStatus()
      })
      audioContext.onPause(() => {
        that.recoverPlayingStatus()
      })
      audioContext.onStop(() => {
        that.recoverPlayingStatus()
      })
      audioContext.onEnded(() => {
        that.recoverPlayingStatus()
      })
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
    }
  }
})
