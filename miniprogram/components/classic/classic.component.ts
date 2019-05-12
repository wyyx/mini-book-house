import { Classic } from '../../models/classic.model'
import { classicService } from '../../services/classic.service'
import { likeService } from '../../services/like.service'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cid: {
      type: Number,
      value: null,
      optionalTypes: [],
      observer: (newVal, oldVal) => {
        // console.log('TCL: newVal', newVal)
      }
    },
    type: {
      type: Number,
      value: null,
      optionalTypes: []
    },
    showNavi: {
      type: Boolean,
      value: true,
      optionalTypes: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentClassic: {} as Classic,
    firstClassic: {} as Classic,
    isFirst: true,
    isLast: false,
    likeStatus: false,
    favNums: 0
  },

  attached() {
    const that: any = this
    setTimeout(() => {
      if (!this.properties.cid) {
        that.getLatest()
      } else {
        that.getById()
      }
    }, 10)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getLatest() {
      classicService.getLatest().then(classic => {
        this.setData({
          currentClassic: classic,
          firstClassic: classic
        })

        this.loadLikeInfo(classic.type, classic.id)
        classicService.setStorageSync(classic.index, classic)
      })
    },

    getById() {
      const that: any = this
      const cid = that.properties.cid
      const type = that.properties.type

      classicService.getById(type, cid).then(classic => {
        this.setData({
          currentClassic: classic,
          firstClassic: classic
        })

        that.loadLikeInfo(classic.type, classic.id)
        classicService.setStorageSync(classic.index, classic)
      })
    },

    onLike: function(event) {
      const artId = this.data.currentClassic.id
      const type = this.data.currentClassic.type
      const like = event.detail.like

      likeService.like({ artId, type, like })
    },

    onPrevious: function(event) {
      this.onPreviousOrNext('next')
    },

    onNext: function(event) {
      this.onPreviousOrNext('previous')
    },

    onPreviousOrNext(previousOrNext: 'previous' | 'next') {
      classicService
        .getPreviousOrNext(this.data.currentClassic.index, previousOrNext)
        .then(classic => {
          this.loadLikeInfo(classic.type, classic.id)

          this.setData({
            currentClassic: classic,
            isFirst: classicService.isFirst(classic, this.data.firstClassic),
            isLast: classicService.isLast(classic)
          })
        })
    },

    loadLikeInfo(type: number, id: number) {
      likeService.getLikeInfo(type, id).then(like => {
        this.setData({
          likeStatus: like.like_status,
          favNums: like.fav_nums
        })
      })
    }
  } as any
})
