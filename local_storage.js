let formtag = document.querySelector("form");
let inputName = document.querySelector("#name");
let inputAge = document.querySelector("#age");
let delete_btn = document.querySelector("#delete");

console.log(document.URL + " " + document.characterSet);
console.log(document.title + " " + document.forms);

let add_data_base = (obj) => {
   let convert_string = JSON.stringify(obj);
   localStorage.setItem('local_data_key',convert_string);
}

let get_data = ()=>{
   let string = localStorage.getItem( 'local_data_key');
   let convert_obj = JSON.parse(string);
   return convert_obj;
}
let delete_data = () =>{
   localStorage.removeItem('local_data_key');
}
formtag.addEventListener('submit', (e) => {
   e.preventDefault();
   let name = inputName.value;
   let age = inputAge.value;
   console.log(name + ":" + age);
   let obj = {
      "name": name,
      "age" : age
   }
   add_data_base(obj);
   let user_obj = get_data();
   console.log(user_obj);
})
delete_btn.addEventListener('click', ()=>{
   delete_data();
})