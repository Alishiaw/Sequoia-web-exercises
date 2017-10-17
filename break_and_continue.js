"use strict";



var skip = 27;

 for (var i = 1; i < 50; i++) {
    if (i % 2 !== 0){


      if (i === skip){
         console.log( "skipped this number:" + skip);
          continue
        }

        console.log(i);
     }
 }
