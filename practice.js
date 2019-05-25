let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Hello World')
  },5000)
})
promise.then((word)=>{
  console.log(word)
})
