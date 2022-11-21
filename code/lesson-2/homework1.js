// hostelPerNight = 20;
// tripDuration = 5;

// // accomodationCost = hostelPerNight * tripDuration;


// breakfastCost = 10;
// accomodationCost = (hostelPerNight + breakfastCost) * tripDuration;
// // totalCost = accomodationCost + breakfastCost * tripDuration
// console.log(accomodationCost);

// // discount = 0.1

// // reducedPrice = accomodationCost - accomodationCost * discount
// // discount = 0.1
// // reducedPrice = (1 - discount) * accomodationCost

// // discount = 10
// // reducedPrice = accomodationCost - (discount/100*accomodationCost)

// // discount = 10
// // reducedPrice = ((100 - discount) * accomodationCost) / 100
// console.log(reducedPrice)

// gasPricePerLiter = 1.5;
// consumption = 8; // 8 liters for 100 km
// kmDistance = 300;

// totalGasPrice = ((kmDistance/100) * consumption) * gasPricePerLiter;

// trainTicketPrice = 40;

// gasPricePerKilometer = totalGasPrice / kmDistance

// trainPricePerKilometer = trainTicketPrice / kmDistance

// console.log("total Gas Price: " + totalGasPrice);
// console.log("train Ticket Price: " + trainTicketPrice);
// console.log("gas Price Per Kilometer: " + gasPricePerKilometer.toFixed(2));
// console.log("train Price Per Kilometer: " + trainPricePerKilometer.toFixed(2));


// a = 30; 
// b = 20;

// if (a > b) {
//   console.log(a)
// } else {
//   console.log(b)
// }

// a = 1;
// b = 2;

// c = a;
// a = b;
// b = c;


// console.log(a);
// console.log(b);

a = 300;
b = 100;
c = 25;

if ( a < b && b < c ) {
  console.log(c)
} else if ( a < b && b > c ) {
  console.log(b)
} else if (a > b && a > c) {
  console.log(a)
}