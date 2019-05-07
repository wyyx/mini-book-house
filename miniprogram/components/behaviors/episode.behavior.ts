declare const Behavior

export const episodeBehavior = Behavior({
  properties: {
    hidden: {
      type: Boolean,
      value: false,
      optionalTypes: []
    },
    coverImgUrl: {
      type: String,
      value: '',
      optionalTypes: []
    },
    tagImgUrl: {
      type: String,
      value: '',
      optionalTypes: []
    },
    content: {
      type: String,
      value: '',
      optionalTypes: []
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached() {},
  methods: {}
})
