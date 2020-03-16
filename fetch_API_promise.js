let url = "https://jsonplaceholder.typicode.com/posts"

async function fetch_JSON_Data(){
   let ret = new Promise((resolve, reject)=>{
      fetch(url)
         .then((data)=> {return data.text()})
         .then((res)=>resolve(res))
         .catch((err)=>reject("Fail to load data!"))
   })
   let condition = await ret;
   return condition;
}

fetch_JSON_Data()
   .then(res =>console.log(res))
   .catch(err => console.log(err));