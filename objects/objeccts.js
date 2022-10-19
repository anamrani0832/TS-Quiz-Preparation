// Working with object types
// let printName = (person: { first: string; second: string }) => {
//     console.log(`${person.first} and ${person.second}`);
//   };
//   printName({ first: "anam", second: "Rani" });
var randomCoord = function () {
    return { x: Math.random(), y: Math.random() };
};
var printName = function (person) {
    return "hey, ".concat(person.name, " and ").concat(person.age);
};
var triangle = { x: 2, y: 4 };
var user = {
    id: 123,
    name: "anam"
};
console.log(user.id);
// user.id= 34;
