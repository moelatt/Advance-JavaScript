let url = "https://jsonplaceholder.typicode.com/posts"

async function load_data(){
   let xhr = new XMLHttpRequest();
   let ret = new Promise((resolve, reject)=>{
      xhr.onload = function(){
         if(xhr.status == 200){
            resolve(this.responseText);
         }
         else{
            reject("Fail to load data!");
         }
      }
      xhr.open("Get", url);
      xhr.send();
   })
   let condition = await ret;
   return condition;
}

load_data()
   .then((res)=>console.log(res))
   .catch((err)=> console.log(err));