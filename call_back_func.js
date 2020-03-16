// call back function ka fuction ta khu htal ka nay another
// function ko khaw tar

function final(answer){
   console.log(answer);
}
function result(x, y, call_back_func){
   call_back_func(x+y)
}
result(2,5, final)
//==============================================================//

function print_string(str){
   console.log(str);
}
function input_str(str, print_string){
   print_string(str);
}

input_str("live suck!! You have to live with.", print_string)