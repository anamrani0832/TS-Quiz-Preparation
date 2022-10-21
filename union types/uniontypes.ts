// ***The Union Types****

let sequ: string | number = 34;
sequ = "34";

type Points = {
  x: number;
  y: number;
};
type Coord = {
  lat: number;
  long: number;
};
let trin: Coord | Points = { x: 2, y: 6 };
trin = { lat: 56, long: 66 };

// Narrowing the type w union types
const isTeenager = (age: number | string) => {
  if (typeof age === "string") {
    console.log(age.charAt(0) === 1);
  }
  if (typeof age === "number") {
    console.log(age > 12 && age < 20);
  }
};
isTeenager("20");
isTeenager(13);

// Union Types and Arrays
const staff: (string | number)[] = [1, 2, "2", "3", 3];

// literal types
let zero: 0 = 0;
const hi: "hi" = "hi";
// zero = 8;

type dayOfWeek = "mon" | "tues" | "wed" | "thurs" | "fri" | "satur" | "sun";
let today: dayOfWeek = "satur";
