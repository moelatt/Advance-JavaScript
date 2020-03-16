let array = ["mg mg", "aung aung", "kaung kaung"];

let students= [
   {
      name : "mg",
      age: 28,
      major: "computer science"
   },
   {
      name : "Su",
      age: 29,
      major: "engineering major"
   }
]
// map is looping the array
array.map(function(arr){
   console.log(arr);
})
// no need function bracket if output is only one sentence
students.map((student)=>console.log(student.major))

students.map((student)=>{
   console.log(student.age);
   console.log(student.name);
})