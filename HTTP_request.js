
let url = "https://jsonplaceholder.typicode.com/posts"
let post_column = document.querySelector("#post-column");

// fetching the JSON
fetch(url)
   .then((res)=>{return(res.text())})
   .then((res)=>{
   let jsons = JSON.parse(res.text())
   let input_string = "";
   jsons.forEach((post)=>{
      input_string += `
         <div class="col-sm-6">
            <div class="card">
               <div class="card-body">
               <h5 class="card-title">${post.title}</h5>
               <p class="card-text">${post.body}</p>
               <a href="#" class="btn btn-primary">Learn More</a>
               </div>
            </div>
         </div>
      `
   })
   post_column.innerHTML = input_string;
})
   .catch((err)=>console.log(err));
//=====================================================================//
// old style fetching the http request.
function make_card_column(result){
   let jsons = JSON.parse(result);
   let input_string = "";
   jsons.forEach((post) => {
      input_string += `
      <div class="col-sm-6">
         <div class="card">
            <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
            <a href="#" class="btn btn-primary">Learn More</a>
            </div>
         </div>
      </div>
      `
   });
   post_column.innerHTML = input_string
}
function fetch_JSON_data(call_back_func){
   let xhr = new XMLHttpRequest();
   xhr.open("Get", url);
   xhr.onload = function(){
      if(this.status == 200){
         call_back_func(this.responseText);
      }
   }
   xhr.send();
}
fetch_JSON_data(make_card_column);
//===============================================================//
// fetching JSON using onreadystatechange
let xhr = new XMLHttpRequest();

xhr.open("Get", url);
xhr.onreadystatechange = function(){
   if(this.status == 200 && this.readyState == 4){
      let res = this.responseText;
      let jsons = JSON.parse(res);
      let input_string = "";
      jsons.forEach((post)=>{
         input_string += `
            <div class="col-sm-6">
               <div class="card">
                  <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
                  <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
               </div>
            </div>
         `
      });
      post_column.innerHTML = input_string;
   }
}

xhr.send(); // important to print all the output

xhr.onprogress = function(){
   console.log("processing ....");
}
xhr.onerror = function(error){
   console.log(error);
}