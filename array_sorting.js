let arr = [12,5,2,6,1,3,34,32];

// Array Sorting
function increasing(x,y){ // 0 -> 100
   return x - y;
}
function decreasing(x, y){
   return y - x;
}
// javaScript -1, 0, 1
// arr.sort(decreasing);
arr.sort((x,y)=>{
   return x - y;
})
console.log(arr);
//============================================================//
// finding number in Array
let num = arr.find(num => {
   return num > 6;
})
console.log(num)
//==========================================================//
// Array Concatinating 
let arr2 = new Array(333,222,111);
let new_arr = arr.concat(arr2);
console.log(new_arr);