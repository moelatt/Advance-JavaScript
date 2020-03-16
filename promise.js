let url = "https://jsonplaceholder.typicode.com/posts"

function fetch_JSON_with_promise(){
   let xhr = new XMLHttpRequest;
   return new Promise((resolve, reject)=>{
      xhr.onload = function(){
         if(xhr.status == 200){
            let res = xhr.responseText;
            let jsons = JSON.parse(res);
            resolve(jsons);
         }
         else{
            reject("fail");
         }
      }
      xhr.open("Get", url);
      xhr.send();
   })
}
fetch_JSON_with_promise()
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));
// =========================================================================================//

function promise_func(num){
   return new Promise((res, err)=>{
      if(num == 3){
         res("Loading data Successfully!!")
      }
      else{
         err("Fail to load the data")
      }
   })
}
promise_func(3).then((res)=>console.log(res)).catch((err)=>console.log(err));