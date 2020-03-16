// prototype inheritance 
function Car(name, speed){
   this.name = name;
   this.speed = speed;
}
Car.prototype.get_car_info = function(){
   return `Name of the car is ${this.name} & speed is ${this.speed}`
}
Car.prototype.get_car_speed = function(){
   return `Speed is ${this.speed}`;
}

function Toyota(name, speed){
   Car.call(this, name, speed);
}
Toyota.prototype = Object.create(Car.prototype);

function Honda(name, speed){
   Car.call(this, name, speed);
}
Honda.prototype = Object.create(Car.prototype);
Honda.prototype.get_car_speed = function(){
   return `Speed is upgraded in ${this.speed}`;
}

let toyota = new Toyota("Toyota", "180");
let honda = new Honda("Honda", "230");
console.log(toyota.get_car_info())
console.log(honda.get_car_speed());
//================================================================//

// another style of prototype
const car_proto = {
   get_name: ()=>{
      return this.name;
   },
   get_speed: ()=>{
      return this.speed;
   }
}
let car = Object.create(car_proto);
car.name = "Toyota";
car.speed = "186";
console.log(car.name)

let car_info = Object.create(car_proto, {
   name: {value: "Honda"},
   speed: {value: 198}
})
console.log(car_info.name)

// regular prototype
function Person(name, age){
   this.name = name;
   this.age = age;
}

Person.prototype.getName = function(){
   return this.name;
}
Person.prototype.get_current_date = function(){
   let date = new Date();
   return date;
}

let obj1 = new Person("mg mg", 30);
console.log(obj1.get_current_date())