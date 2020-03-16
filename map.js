// if you want to implement map you need key and value 
let map_arr = new Map();

map_arr.set("key1", "aung aung");
map_arr.set("key2", "Kaung Kaung");
map_arr.set("key3", "Su Su");
map_arr.set("key4", "Su Su");

for(let [key, value] of map_arr){
   console.log(`key is ${key} and value is ${value}`);
}
console.log(map_arr.get("key1"));
console.log(map_arr.size)

for(let v of map_arr.keys()){
   console.log(v);
}
for (let key of map_arr.values()){
   console.log(key);
}

// implement map key and values into array

let arr = Array.from(map_arr);
for(let i in arr){
   console.log(arr[i])
}