"use strict";

var car = {
    make: "Honda",
    model: "Civic",
    honk: function (honkRealLoudLike){
        if (honkRealLoudLike){
            alert("HOOOOOOOOOOOK!");
        }else {
            alert("beep, beep!");
        }
    },
    getInfo: function() {
       return "make:" + this.make + " | model:" + this.model

    }
};