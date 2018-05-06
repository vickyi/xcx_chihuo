//index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
  data: {
    focus: false,
    inputValue: '一心一意',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: '比喻人的心思流荡散乱，如猿马之难以控制。思维好像猴子在跳、意识像马在奔跑一样的控制不住。形容心里东想西想，安静不下来。一颗浮躁不定、不平静的心。'
      }]
    }]
  },

  tap() {
    console.log('tap')
  },

  bindButtonTap: function () {
    this.setData({
      focus: false
    })
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos)
      //计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    //或者直接返回字符串,光标在最后边
    //return value.replace(/11/g,'2'),
  }
})