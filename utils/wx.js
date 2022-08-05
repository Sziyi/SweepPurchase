function wxToPromise(method = 'request', options = {}){
    return new Promise((resolve,reject)=>{
      options.success = resolve
      options.fail = error =>{
        reject(error)
      }
      wx[method](options)//    wx.request(options)
    })
  }
  
  export default wxToPromise
  
  