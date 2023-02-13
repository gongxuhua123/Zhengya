// component/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    datat:[
      {
        src:"1" 
      },
      {
        src:"1" 
      },
      {
        src:"1" 
      },
      {
        src:"1" 
      },
      {
        src:"1" 
      }
    ],
    indicatorIndex:0,
    autoplay:true,
    interval:5000,
    duration:500
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // swiper 下表改变触发事件
    swiperonchanger(ent){
      const dt=this;
      const {current,source}={...ent.detail};
      if(source === 'autoplay'){
        dt.setData({
          indicatorIndex:current-0
        })
      }else{
        dt.setData({
          indicatorIndex:current-0
        })
      }
    },
  }
})
