<<<<<<< HEAD
"use strict";


/*================================= OBJECTS WARM UP
In pairs, solve the following problems...

---- EXERCISE 1
1. Write a function, deactivateMembers()
to take in the following array of objects as an input:*/



var members = [
    {
        joined: 2009,
        name: "John",
        activeMember: true

    },
    {
        joined: 2011,
        name: "Sally",
        activeMember: true
    },
    {
        joined: 2013,
        name: "John",
        activeMember: true

    }
];

function deactivateMembers(arrayOfMemberObjects) {
    arrayOfMemberObjects.forEach(function (memberObject) {
        memberObject.activeMember = false;
        memberObject.dateDeactivated = 2017;

    });

    return arrayOfMemberObjects;
}
console.log(deactivateMembers(members));





/*The function should return an output of the same array of objects with all activeMember properties set to false
and contain an additional property of dateDeactivated set to 2017.




---- EXERCISE 2
1. Define an object, "canOfSoda", using dot syntax to add and assign the following properties:
    - a property of isEmpty assigned a boolean value of false
- a property of isOpen assigned a boolean value of false
- a method of open() which sets the isOpen to true if the property is false when the method is initially called
- a method of pourOut() which sets the isEmpty to true if the isEmpty property is false and the isOpen is true
2. Define the above object again using object literal syntax.
    BONUS
3. Create an array call cansOfSoda containing of 3 canOfSoda objects with the same properties and values as described above.
    The objects should be named, canOfSoda1, canOfSoda2, canOfSoda3.
4. Iterate over the cansOfSoda array and open() and pourOut() each canOfSoda object
5. Console log the cansOfSoda array to check if the methods worked correctly.*/

=======
(function() {
    "use strict";




    /**
    * TODO:
    * Create an object with firstName and lastName properties that are strings
    * with your first and last name. Store this object in a variable named
    * `person`.
    *
    * Example:
    *  > console.log(person.firstName) // "Rick"
    *  > console.log(person.firstName) // "Sanchez"
    */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //
    // var person = {};
    //
    //     person.firstName = " Alishia ";
    //     person.lastName =  " Wilcher ";
    //
    // person.sayHello = function () {
    //     return "Hello from " + person.firstName + person.lastName
    // };
    //
    // console.log(person.sayHello());

    // console.log(person.firstName);
    // console.log(person.lastName);




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    //
    // ];
    // if (shoppers[0].amount >= 200) {
    //     console.log(shoppers[0].name + " Amount before discount " + shoppers[0].amount);
    //
    //
    //     console.log(shoppers[0].name + " Amount after discount" + (shoppers[0].amount - shoppers[0].amount * .12));
    //
    // } else {
    //
    //     console.log(shoppers[0].name + " No discount. Total amount " + (shoppers[0].amount))
    // }
    // if (shoppers[1].amount >= 200) {
    //     console.log(shoppers[1].name + " Amount before discount " + shoppers[1].amount);
    //
    //     console.log(shoppers[1].name + " Amount after discount " + (shoppers[1].amount - shoppers[1].amount * .12));
    //
    // }
    // if (shoppers[2].amount >= 200) {
    //     console.log(shoppers[2].name + " Amount before discount " + shoppers[2].amount);
    //
    //     console.log(shoppers[2].name + " Amount after discount " + (shoppers[2].amount - shoppers[2].amount * .12));
    // }
    //




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
          title: "The Ministry of Utmost Happiness: A novel",
          author: {

              firstName:"Arundhati",
              lastName: "Roy"
          }



        },

        {
            title:"Best New Horror",
            author: {
                firstName:"Joe",
                lastName: "Hill"
            }



        },

        {
            title:"Scary Stories to Tell in the Dark",
            author: {
                firstName: "Alvin",
                lastName:"Schwartz"
            }



        },

        {
            title:"Scary Stories Treasury",
            author: {
                firstName:"Alvin",
                lastName:"Schwartz"
            }



        },

        {
            title:"Papap's Teeth",
            author: {
                firstName:"Danielle",
                lastName:"DeVor"
            }



        },

        {
            title:"The Complete Stories and Poems",
            author: {
                firstName:"Edgar Allan",
                lastName:"Poe"
            }



        }
    ];
    console.log(books[3].title);
    console.log(books[3].author.firstName);
    console.log(books[3].author.lastName);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
    //  */


        books.forEach(function (book, index, array) {
            console.log("Book # " + (index +1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
            console.log("---");
        });







    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */




})();
>>>>>>> study-work
