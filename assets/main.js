
//JavaScript if, else, and else if

// 1
let HavaYagislidir= true ;
let HavaKulekdir =false ;
 if (HavaYagislidir) {
    console.log ("Don't forget your umbrella! ");
 } else {
    console.log ("No need for an umbrella today.");

 } if (HavaKulekdir) {
    console.log("Hold onto your hat!");
 }

//2 
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20 && temperature <= 30) {
  console.log("The weather is pleasant today.");
} else {
  console.log("It's a bit chilly outside.");
}


//3 
let age = prompt("Please enter your age:");
if (age >= 18) {
  console.log("You are allowed to enter.");
} else {
  console.log("You are not allowed to enter.");
}