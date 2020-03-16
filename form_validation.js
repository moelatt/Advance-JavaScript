let name = document.querySelector("#name_id");
let email = document.querySelector("#email_id");
let pass = document.querySelector("#password_id");
let button = document.querySelector('#btn')

name.addEventListener('keyup', name_input);
email.addEventListener('keyup', email_input);
pass.addEventListener('keyup', pass_input);

let name_bool = false, email_bool = false, pass_bool = false;
function name_input(){
   let input = name.value;
   let reg = /^[A-Za-z0-9\s]+$/; // start A-Z a-z 0-9 and follow char
   if(!reg.test(input)){
      name.classList.add("is-invalid");
      name_bool = false;
   }
   else{
      name.classList.remove("is-invalid")
      name_bool = true;
   }
   btn_enable();
}

function email_input(){
   let input = email.value;
   let reg = /^([A-Za-z0-9_\-\.]+)@([a-z]+)\.([a-z]{2,5})$/ // check valid email
   if(!reg.test(input)){
      email.classList.add("is-invalid");
      email_bool = false;
   }
   else{
      email.classList.remove("is-invalid");
      email_bool = true;
   }
   btn_enable();
}

function pass_input(){
   let input = pass.value;
   let reg = /^[A-Za-z0-9\W]{6,20}$/;
   if(!reg.test(input)){
      pass.classList.add("is-invalid");
      pass_bool = false;
   }
   else{
      pass.classList.remove("is-invalid");
      pass_bool = true;
   }
   btn_enable();
}

function btn_enable(){
   if(name_bool && email_bool && pass_bool){
      button.classList.remove("disabled");
   }
   else{
      button.classList.add("disabled");
   }
}


