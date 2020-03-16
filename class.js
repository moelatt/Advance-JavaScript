// Ecmas 6 => Babel, Webpack => Ecmas 5

// Class inheritance from super classl
class car{
   constructor(name, speed){
      this.name = name;
      this.speed = speed;
   }
   get_car_info(){
      return `Car name is ${this.name} & Car speed is ${this.speed}`
   }
}
class Toyota extends car{
   constructor(name, speed, price){
      super(name, speed);
      this.price = price;
   }
}
class Nissan extends car{
   constructor(name, speed, Model){
      super(name, speed);
      this.Model = Model;
   }
   get_car_info(){
      return `name of the car is ${this.name} & speed is ${this.speed} & model is ${this.Model}`
   }
}
let toyota = new Toyota("Toyota", 189, 5693);
console.log(toyota.get_car_info());
console.log(`The price is $${toyota.price}`);

let nissan = new Nissan("Nissan", 123, "Altima");
console.log(nissan.get_car_info());

//=====================================================================//
class Person{
   static name = "Aung";
   static age = 21;
   constructor(name, age){
      this.name = name;
      this.age = age;
      console.log(this.name + " : " + this.age)
   }
   getName(){
      return ` Name is ${this.name} `;
   }
   getAge(){
      return `Age is ${this.age}`;
   }
   static get_name_age(){ // static can only call variable that has static data type
      console.log(`Name is ${this.name} & Age is ${this.age}`)
   }
}

// in static does not need instance object
Person.get_name_age();

let p = new Person("Su Su", 32);
console.log(p.getAge());