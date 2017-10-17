"use strict";


// var text = "";
// var i = 0;
//
//  // The first for loop
//     for ( i < 10; i++) {
//         text +=  i;
//
//          // The second for loop
//             for (j = 10; j < 10; j++) {
//                 if (j === 12) {
//                 }
//             }
//     }

//
// for (var i = 1; i < 10; ++i) {
//     var output ="";
//     for (var j = 0; j < i ;++j) {
//
//         output += i;
//     }
//     console.log(output);
// }

var i, j, mulTot;

for (i = 1; i <= 12; i++)

{
var output = "";

    for (j = 1; j <= 12; j++) {

        mulTot = i * j ;

        if (mulTot < 145) {


            if (mulTot < 10) mulTot =  mulTot + "   ";
            else if (mulTot < 100) mulTot = mulTot + "  ";
            else if (mulTot < 145) mulTot = mulTot + " " ;

        }



        else {

            mulTot = "" + mulTot;


        }

        output = output + mulTot;


    }
    console.log(output);


}

