let [a,b,c,...r] = [1,2,3,4,5,6];
console.log(a);
console.log(b);
console.log(c);
console.log(r);

function num_arr(){
   return [1, 2, 3, 4, 5];
}
 [e,f,...g] = num_arr();
 console.log('\n');
 console.log(e)
 console.log(f)
 console.log(r)

 // object destruction
 let person = {
    name: "Mg Mg",
    age: 21,
    major: "Computer Science"
 }

//  let name = person.name;
//  let age = person.age;
//  let major = person.major;

// name has to match with person object name
let {name, age, major} = person;
console.log(name);