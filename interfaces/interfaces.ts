// Type Aliases
type point = {
  x: number;
  y: number;
};
// Type Interfaces
// interface Person {
//   // readonly interface property
//   readonly id: number;
//   name: string;
//   //   optional interface property
//   nickname?: string;
//   age: number;
//   //   interface methods
//   sayHi: () => string;
// }
// const person1: Person = {
//   id: 123,
//   name: "Anam",
//   age: 24,
//   sayHi:() => {
//     return "hello"
// }
// };
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}
const shoes: Product = {
  name: "adidas",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// Extending interface
interface Person {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string;
}
interface Egnieer extends Person, Employee {
  level: string;
  languages: string[];
}
const anam: Egnieer = {
  name: "Anam",
  id: 123,
  email: "anamrani17arid529@gmail.com",
  level: "inter",
  languages: ["undr", "english"],
};
console.log(anam);
