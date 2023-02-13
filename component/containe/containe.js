// component/containe/containe.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    // 使用全局Css
    "styleIsolation": 'apply-shared',
  },
  /**
   * 组件的初始数据
   */
  data: {
    containe: [{
        src: "3",
        name: "功能A"
      },
      {
        src: "2",
        name: "功能B"
      },
      {
        src: "3",
        name: "功能C"
      },
      {
        src: "3",
        name: "功能D"
      },
      {
        src: "3",
        name: "功能E"
      },
      {
        src: "3",
        name: "功能F"
      },
      {
        src: "3",
        name: "功能G"
      },
      {
        src: "3",
        name: "功能H"
      },
      {
        src: "3",
        name: "功能I"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
      {
        src: "3",
        name: "功能J"
      },
    ],
    funalardata:[
      {
        src: "10",
        name: "功能1"
      },
      {
        src: "10",
        name: "功能2"
      },
      {
        src: "10",
        name: "功能3"
      },
      {
        src: "10",
        name: "功能4"
      },
      {
        src: "10",
        name: "功能5"
      },
      {
        src: "10",
        name: "功能6"
      },
      {
        src: "10",
        name: "功能7"
      },
      {
        src: "10",
        name: "功能8"
      },
      {
        src: "10",
        name: "功能9"
      },
      {
        src: "10",
        name: "功能10"
      },
    ], 
    ejectboolean:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 功能点击
    ejectonclick(ent) {
      const dt = this;
      const index=ent.currentTarget.dataset.indexs;
      if (index == 1) {
        dt.setData({ejectboolean:false});
      }
    },
    // 点击遮罩
    ejectOnclick(){
      const dt = this;
      dt.setData({ejectboolean:true});
    },

  }
})