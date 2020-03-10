// components/address/index.js
Component({
  relations:{
    '../friends':{
      type: 'child',
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    listMain: {
      type: Array,
      value: ''
    }
  },

  lifetimes:{
    ready: function () {
      this.getBrands();
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive: null,
    fixedTitle: null,
    toView: 'inTo0',
    oHeight: [],
    scroolHeight: 0,
    fixedTop: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {   //点击右侧字母导航定位触发
    scrollToViewFn: function(e) {
      var that = this;
      var _id = e.target.dataset.id;
      for (var i = 0; i < that.data.listMain.length; ++i) {   
        if (that.data.listMain[i].id === _id) {    
          that.setData({             
            isActive: _id,
            toView: 'inTo' + _id,
            fixedTitle: that.data.listMain[i].region     
          })   
          break;
        }
      }
    },

    // 页面滑动时触发
    onPageScroll: function(e) {
      this.setData({
        scroolHeight: e.detail.scrollTop
      });
      for (let i in this.data.oHeight) {
        if (e.detail.scrollTop < this.data.oHeight[i].height) {  
          this.setData({
            isActive: this.data.oHeight[i].key,
            fixedTitle: this.data.oHeight[i].name
          });
          return false;
        }
      }
    },

    // 处理数据格式，及获取分组高度
    getBrands: function() {
      var that = this;
      var number = 0
      const query = wx.createSelectorQuery().in(this)
      //计算分组高度,wx.createSelectotQuery()获取节点信息
      for (let i = 0; i < that.data.listMain.length; ++i) {
        query.select('#inTo' + that.properties.listMain[i].id).boundingClientRect(function(rect) {
          number = rect.height + number;
          var newArry = [{
            'height': number,
            'key': rect.dataset.id,
            "name": that.data.listMain[i].region
          }]
          that.setData({
            oHeight: that.data.oHeight.concat(newArry)
          })
        }).exec();
      };
    }

  }
})