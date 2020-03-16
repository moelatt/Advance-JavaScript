let form_tag = document.querySelector("form");
let input_name = document.querySelector("#name");
let input_age = document.getElementById("age");
let delete_btn = document.querySelector("#delete")


// array htal ko data tway save tar with one key ("local_data")
let add_data_base = (user_obj)=>{
   let array_obj = get_data();
   if(array_obj == null){
      array_obj = [];
      array_obj.push(user_obj);
      save_data(array_obj);
   }
   else{
      array_obj.push(user_obj);
      save_data(array_obj)
   }
}
let save_data = (user_obj)=>{
   let convert_string = JSON.stringify(user_obj);
   sessionStorage.setItem('local_data', convert_string);
}
let get_data = ()=>{
   let string_data = sessionStorage.getItem('local_data');
   let convert_obj = JSON.parse(string_data);
   return convert_obj;
}
let delete_data = ()=>{
   sessionStorage.removeItem('local_data');
}

form_tag.addEventListener('submit', (e)=>{
   e.preventDefault();
   let user_obj = {
      "name":input_name.value,
      "age" : input_age.value
   }
   add_data_base(user_obj);
   let get_data_with_key = get_data();
   for(var i = 0; i < get_data_with_key.length; i++){
      console.log(get_data_with_key[i].name + "  " + get_data_with_key[i].age);
   }
})
delete_btn.onclick = ()=>{
   delete_data();
}