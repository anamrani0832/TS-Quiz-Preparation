// Working with object types

// let printName = (person: { first: string; second: string }) => {
//     console.log(`${person.first} and ${person.second}`);
//   };
  
//   printName({ first: "anam", second: "Rani" });
  
  const randomCoord = (): { x: number; y: number } => {
    return { x: Math.random(), y: Math.random() };
  };
// *********Excess Properties***********
//   printName({ first: "anam", second: "Rani", age:45 });

type Person = {
    name: string,
    age: number
}

let printName = (person:Person) => {
    return `hey, ${person.name} and ${person.age}`
}

// Optional properties
 type Dots = {
    x: number,
    y: number,
    z?: string
 }
 const triangle: Dots = {x: 2, y:4}

//  *******The readOnly Modifier

type User = {
    readonly id : number,
    name: string
}
 
const user: User = {
    id: 123,
    name: "anam"
}
console.log(user.id);
user.id= 34;
