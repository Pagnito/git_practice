let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Hello World')
  },5000)
})
promise.then((word)=>{
  console.log(word)
})
function loop(num, words){
  if(words.length!==num){
    console.log('number and number of words dont match')
    return;
  } else {
    for(let i = 0; i < num; i++){
      console.log(words[i])
    }
  } 
}
loop(3,['apple', 'orange', 'cherry']);