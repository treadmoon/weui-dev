// components/friends/index.js
Component({
  relations:{
    '../address/index':{
      type: 'parent',
      linked: function (target) {
        console.log("======linked======")
        console.log(target)
      },
      linkChanged: function (target) {
        console.log("======linkChanged======")
        console.log(target)
      },
      unlinked: function (target) {
        console.log("======unlinked======")
        console.log(target)
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    friendItem:{
      type:Object,
      value: {
        id: '',
        select: {
          show: false,
          checked: false,
          value: '',
        },
        name: '',
        imgsrc: '',
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    item: {
      id: 'i1',
      select: {
        show: false,
        checked: false,
        value: 'd',
      },
      txt: '我是你的die',
      imgsrc: 'https://cdn.v2ex.com/avatar/9939/3c1b/369507_normal.png?m=1545193425',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
