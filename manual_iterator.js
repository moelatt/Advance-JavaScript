let person_names = ["Mg Mg", "Aung Aung", "Su Su"];

function manual_iterator(person_arr){
   person_index = 0;
   return {
      next: ()=>{
         return person_arr.length > person_index ?
         {
            value: person_arr[person_index++], done:false
         } : {done : true}
      }
   }
}
let person = manual_iterator(person_names);

let result = person.next();
result = person.next();
result = person.next();
result = person.next();
if(!result.done){
   console.log(result.value);
}
else{
   console.log("No more value in array, Loop is done!")
}