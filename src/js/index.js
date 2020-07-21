/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  var num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  var suite = ["&#9824", "&#9829", "&#9827", "&#9830"];
  var ret = num[Math.floor(Math.random() * num.length)];
  var pic = suite[Math.floor(Math.random() * suite.length)];

  if (pic == "&#9829" || pic == "&#9830") {
    document.querySelector("#card").style.color = "red";
  }

  document.querySelector(".firImg").innerHTML = pic;
  document.querySelector(".secImg").innerHTML = pic;
  document.querySelector(".number").innerHTML = ret;
};
