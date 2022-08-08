// component/i-code-button/i-code-button.js
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleScanCode(){
            wx.scanCode({
              onlyFromCamera: true,
              success:(res)=>{
                // console.log('res',res.result);
                this.triggerEvent('getResult',res.result)

              },
              fail:(err)=>{
                  console.log('已取消扫码');
              }
            })
        }
    }
})
