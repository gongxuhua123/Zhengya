// head.js
Component({
  data: {
    heights: 0,
    tops:0
  },
  // 接收参数
  properties: {
    headstxt: {
      type: String,
      value: ''
    },
    displas: {
      type: String,
      value: ''
    }
  },
  // 生命周期函数 组件未渲染前
  ready(e) {
    var dt = this;
    dt.head = dt.selectComponent("#head");
    var dt = this;
    const systinfo = wx.getSystemInfoSync();
    let hightsobj = {};
    if (systinfo.platform === "android") {
      hightsobj = wx.getMenuButtonBoundingClientRect();
      hightsobj.gpa=8;
    } else if (systinfo.platform === "ios") {
      hightsobj = {
        width: 87,
        height: 32,
        left: systinfo.screenWidth - 7 - 87,
        right: systinfo.screenWidth - 7,
        top: systinfo.statusBarHeight + 4,
        bottom: systinfo.statusBarHeight + 4 + 32
      };
      hightsobj.gpa=4;
    } else if (systinfo.platform === 'devtools') {
      hightsobj = {
        width: 87,
        height: 32,
        left: systinfo.screenWidth - 7 - 87,
        right: systinfo.screenWidth - 7,
        top: systinfo.statusBarHeight + 4,
        bottom: systinfo.statusBarHeight + 4 + 32
      };
      hightsobj.gpa=8;
    } else {
      hightsobj = wx.getMenuButtonBoundingClientRect();
      hightsobj.gpa=8;
    }
    dt.setData({
      heights: (systinfo.statusBarHeight-0)+(hightsobj.height-0)+hightsobj.gpa,
      tops:(systinfo.statusBarHeight-0)+hightsobj.gpa,
    });
  },
  methods: {
    // 返回
    returns() {
      wx.navigateBack({
        delta: 1
      })
    },
    // 返回
    returntwo() {
      wx.redirectTo({
        url: '/pages/Me/Orderm/Orderm'
      })
    },
  }
})