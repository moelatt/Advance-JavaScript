let student_obj = {
   name : "",
   age : 12
}

try{
   if(student_obj.email == null){
      throw new ReferenceError("Name error");
   }
}
catch(err){
   console.log("Error " + err);
}
finally{
   console.log("final output " + student_obj.age);
}