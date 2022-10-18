
// String Data type And type Annotation
let movieTitle : string = "Three Idiots";
movieTitle = "My own Story";
// ERROR
movieTitle = 7;
console.log(movieTitle.toUpperCase());

// number type annotation
let noOfCatLives = 9;
noOfCatLives += 1;
// ERROR
noOfCatLives = "Zero";   

// Booleans
let gameOver: boolean = false;
gameOver = true;
gameOver = "true";


// Type Inference
let movie = "This is fvrt movie";
movie = "Change to other";
movie = 3;

// The Any Type
let anyType: any = "Hello";
anyType();
anyType = false;
anyType = 2;
anyType.toUpperCase();