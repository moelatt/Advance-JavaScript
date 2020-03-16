// Ecmascript 6 ==> Generator vs Iterator

let person_arr = ["mg mg", "Aung Aung", "Su Su"];
function num_iterator(count){
   let index = 0;
   return {
      next: function(){
         return index < count ? 
            { value : index++, done: false} : 
            {done: true};
      }
   }
}

function* num_generator(){ // generator looping
   let index = 0;
   while(true){
      yield person_arr[index++];
   }
}

let num_iter = num_iterator(2);
let num_genera = num_generator();

console.log(num_iter.next());
console.log(num_iter.next());
console.log('\n');

console.log(num_genera.next());
console.log(num_genera.next()); 

//====================================================================//
/* Generator example */

let person_info = [
   {
      name: "Mg Mg",
      Age: 29,
      Major: "Computer Science",
      Education: "Graduate",
      Married: true,
      image: "https://randomuser.me/api/portraits/men/74.jpg"
   },
   {
      name: "Aung Aung",
      Age: 33,
      Major: "Phsyic",
      Education: "Graduate",
      Married: true,
      image: "https://randomuser.me/api/portraits/men/73.jpg"
   },
   {
      name: "Su Su",
      Age: 24,
      Major: "Chemistry",
      Education: "Graduate",
      Married: false,
      image: "https://randomuser.me/api/portraits/women/72.jpg"
   },
   {
      name: "Tun Tun",
      Age: 28,
      Major: "Biology",
      Education: "Graduate",
      Married: false,
      image: "https://randomuser.me/api/portraits/men/70.jpg"
   },
   {
      name: "Jenny",
      Age: 21,
      Major: "Political",
      Education: "under-graduate",
      Married: false,
      image: "https://randomuser.me/api/portraits/women/83.jpg"
   }
];

function person_iterator(person_arr){
   person_index = 0
   return {
      next : function(){
         return  person_index < person_arr.length ? 
            {
               value: person_arr[person_index++], done:false
            } : {done: true}
      }
   }
}
let user = person_iterator(person_info);
let next_btn = document.querySelector("#btn");
let image_display = document.querySelector("#image_display");
let info_display = document.querySelector("#info_display");

next_btn.addEventListener('click', change_next_user);

function change_next_user(){
   let person = user.next();
   if(!person.done){
      image_display.innerHTML = `<img src="${person.value.image}" alt="check internet" class="d-block mx-auto">`
      info_display.innerHTML = `
                  <ul class="list-group">
                     <li class="list-group-item">Name: ${person.value.name}</li>
                     <li class="list-group-item">Age: ${person.value.Age}</li>
                     <li class="list-group-item">Major: ${person.value.Major}</li>
                     <li class="list-group-item">Education : ${person.value.Education}</li>
                     <li class="list-group-item">Married: ${person.value.Married}</li>
                  </ul>`
   }
   else{
      window.location.reload();
   }
}
change_next_user();
