(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["billy", "ashley","trina", "jose"];




    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("There are " + names.length + " names in the array");


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("the first name is " +  names[0]);
    console.log("the second name is " +  names[1]);
    console.log("the third name is " +  names[2]);
    console.log("the forth name is " +  names[3]);




    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */


    for (var i = 0; i < names.length; i++) {
        console.log("The name a index " + i + " is " + names[i]);
    }



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (names) {
        console.log("Here is a lovely name " + names + " . ")
    });



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(names) {
        first = names.length;
        if (names = 0)
            return [0];

        else if (names === 1)
            return ["ashley"];

        else if (names === 2)
            return ["trina"];

        else if (names === 3)
            return [ "jose"];

    }
console.log(first([1, 2, 3, 4, 5]))




})();
