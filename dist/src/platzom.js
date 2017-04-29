"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
// Lo que van a tener que escribir para acceder a la funcion
//import platzom from 'platzom'

function platzom(str) {
  var translation = str;

  //si la palabra termina en "ar"
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }

  //si la palabra inicia con z
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe";
  }

  //si tiene 10 o mas letras
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + "-" + secondHalf;
  }
  //Separa por cada ,
  //const reverse = str => str.split(",")


  var reverse = function reverse(str) {
    return str.split("").reverse().join("").toLowerCase();
  };

  function minMay(str) {
    var length = str.length;
    var translation = "";
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  //si la palabra original es capicua
  if (str.toLowerCase() == reverse(str)) {
    return minMay(str);
  }

  return translation;
}