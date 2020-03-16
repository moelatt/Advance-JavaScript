// constructor name start with capital letter
function Construt_Person(name, age){
   this.name = name;
   this.age = new Date(age);
   this.get_age_year = ()=>{
      let get_date = Date.now() - this.age.getTime();
      let age_date = new Date(get_date);
      console.log(age_date.getUTCFullYear() - 1970);
      return this.age;
   }
}

let person1 = new Construt_Person("mg mg", "7-05-2002");
let person2 = new Construt_Person("aung aung", 21);
let person3 = new Construt_Person("Su Su", 43);
person1.get_age_year();

// built in Constructor
let age = new Number(123);
let age1 = 123;
console.log(typeof age);
console.log(typeof age1);
console.log(age == age1 ? "true" : "false");

let arr = [6,2,7,3,1,8];
arr.sort((x,y)=>{
   return x - y;
})
arr.forEach((val, i)=>{ // for each loop
   // console.log(val + " " + arr[i]);
})

for(i in arr){ // for in loop
   // console.log(arr[i]);
}
for(var i = 0; i < arr.length; i++){ // regular for loop
   // console.log(arr[i]);
}

// Function constructor
let name = new Function('x ', 'y', 'return x + y')
console.log(name(1,2))

// Boolean object constructor
let bool = new Boolean(false);
console.log(bool.valueOf());

// Object Constructor
let obj = new Object({"name": "aung aung", "age" : 20});
console.log(typeof obj)