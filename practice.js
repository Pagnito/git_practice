let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Hello Mars')
  },5000)
})
promise.then((word)=>{
  console.log(word)
})
function loop(num, fruta){
  if(fruta.length!==num){
    console.log('Number and number of words dont match')
    return;
  } else {
    for(let i = 0; i < num; i++){
      console.log(fruta[i])
    }
  } 
}
loop(3,['apple', 'orange', 'cherry']);