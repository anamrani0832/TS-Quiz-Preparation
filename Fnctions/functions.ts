// let seq = (num: number) => {
//   return num * num;
// };
// let greet = (person: string) => {
//   return `Hello ${person}!`;
// };
// let doSomeThing = (name: string, age: number, isFunny: boolean) => {};
// doSomeThing("Anam", 24, false);
// seq(10);
// greet("Anam");

// // working With default ParaMeters
// let greeting = (name: string = "Anam") => {};
// greeting();
// greeting("Maham");

// // Return Type Annotation
// let add = (x: number, y: number): number => {
//   return x + y;
// };

// // Anonymous function contextual typing

// const colors = ["red", "orange", "green"];
// colors.map((color) => {
//   return color.toUpperCase();
// });

// // the void type of function
// let printTwice = (msg: string): void => {
//   console.log(msg);
// };

// // ******the never type of function *********
// // a function that doesn't finish running
// const neverStop = (): never => {
//   while (true) {
//     console.log("i'm still going");
//   }
// };



let typeChange = (str:string, num:number) : number =>{
  return num * parseInt(str);
}