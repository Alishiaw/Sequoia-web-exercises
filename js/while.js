"use strict";



// var i = 2;
//
// while (i <= 65536) {
//     console.log (i);
//     i *= 2;
// }


// This is how you get a random number between 50 and 100

// // This expression will generate a random number between 1 and 5

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("Starting inventory is " + allCones);

do {
    var conesOrdered = Math.floor(Math.random() * 5) + 1;

    if (conesOrdered <= allCones) {
        console.log("the customer ordered " + conesOrdered);
        allCones = allCones - conesOrdered;
        console.log("I sold " + conesOrdered);
        console.log("My inventory is " + allCones);
    } else {
        console.log("next customer please");
    }
} while(allCones > 0);
console.log("cones all sold out.");