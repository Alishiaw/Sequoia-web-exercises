
(function(){




    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     *  > sayHello("codeup") // returns "Hello, codeup!"
     */

    // function sayHello(name) {
    //
    //     return "Hello " + name + "!";
    // }


    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    // var helloMessage = sayHello("Alishia");
    //
    // console.log(helloMessage);


    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */
    //
    // var myName = ("Alishia");
    //
    // sayHello(myName);
    //
    // console.log(myName);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     *  > isTwo(1) // returns false
     *  > isTwo(2) // returns true
     *  > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
// defining function
//     function isTwo(number) {
//         return number === 2;
//     }
//
// // running function and getting result.
//     var output = isTwo(random);
//     console.log(output);
//     console.log("the random number is " + random);

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Example:
     * > calculateTip(0.20, 20) // returns 4
     */
    // function calculateTip(tip, total) {
    //     return tip * total;
    // }
    //
    // var tip = calculateTip(0.20, 20);
    // console.log(tip);


    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */


    // var total = prompt("Total");
    // var percentage = prompt("Percentage of Tip");
    //
    // alert("The amount to tip is: " + calculateTip(percentage, total));



/* ===============================================RYAN FUNCTIONS DRILLS===============================================*/
//
//
// Write a function called `identity(input)` that takes in an argument called input and returns that input.

// function identity(input){
//     return input;
// }
//
// console.log(identity(324));


// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.
// function getRandomNumber(min,max){
//     return
//
// }




// Write a function called `first(input)` that returns the first character in the provided string.

// function first(input) {
//     return input
// }

// Write a fuction called `last(input)` that returns the last character of a string

    // function last(input) {
    //
    //     return input.charAt(0);
    // }
    // console.log(last("Alishia"));


// Write a function called `rest(input)` that returns everything but the first character of a string.

    // function rest(input) {
    //     return input.substring(1);
    // }
    // console.log(rest("Alishia"));


//
// Write a function called `reverse(input)` that takes a string and returns it reversed.
//

    // function reverse(input) {
    //     if (input === "")
    //         return "";
    //     else
    //         return reverse (input.substring(1)) + input.charAt(0);
    // }
    // console.log(reverse("Alishia"))


// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
//
//     function isNumberic(input) {
//         if input.isInteger();
//
//         else
//
//     }


// Write a function called `count(input)` that takes in a string and returns the number of characters.
//

  // function count(input)
  //       return
// Write a function called `add(a, b)` that returns the sum of a and b
//

    // function add(a,b) {
    //     return
    // }
// Write a function called `subtract(a, b)` that return the difference between the two inputs.
//

    //
    // function subtract(a,b)
    //     return

// Write `multiply(a, b)` function that returns the product
//     function multiply(a,b) {
//         return
// }

//
// Write a divide(numerator, denominator) function that returns a divided by b
//


// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
//



// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
//
// # Super Duper Gold-Star Bonus
//
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//
})();


// ================================= CONDITIONALS BONUSES
//
// Bonus 1
//
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

// function favor(day) {
//
//     var favorite = prompt("What is your Favorite day of the week?");
//
//     if (favorite = (day)) {
//          =
//             " " + favorite + "! How are you today?";
//     }}


    var favDay = prompt("What's your favorite day of the week?");
    switch(favDay) {
        case "Monday":
            alert("First day of the week!");
            break;
        case "Tuesday":
            alert("Second day of the week!");
            break;
        case "Wednesday":
            alert("Third day of the week!");
            break;
        case "Thursday":
            alert("Forth day of the week!");
            break;
        case "Friday":
            alert("Fifth day of the week!");
            break;
        case "Saturday":
            alert("first day weekend!");
            break;
        case "Sunday":
            alert("Time to get ready for work");
            break;
        default:
            alert("Not a day of the week!");
            break;
    }

//
// Bonus 2
//
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
// - refactor to use a ternary operator
//





// Bonus 3
//
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

var season = prompt("Input a season.");
switch(season) {
    case "Spring":
        alert("Choose a Month: March, April, May");
        break;
    case "Summer":
        alert("Choose a Month: June, july, August");
        break;
    case "Fall(Autumn)":
        alert("Choose a Month: September, October, November");
        break;
    case "Winter":
        alert("Choose a Month:December, January ,February");
        break;
    case "Friday":
        alert("Fifth day of the week!");
        break;
    default:
        alert("Invalid User Iput");
        break;
}