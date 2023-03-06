'use strict';


window.addEventListener('DOMContentLoaded', () => {

  const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc'),
    forms = require('./modules/forms'),
    slider = require('./modules/slider');

  tabs();
  modal();
  timer();
  cards();
  calc();
  forms();
  slider();




  // (function () {

  // }());


  // const user = (function () {
  //   const privat = function () {
  //     console.log('I am a privat!');
  //   }
  //   return {
  //     sayHello: privat
  //   }

  // }());

  // user.sayHello();


  //module.exports = myModule;
  //const myModule = require('.main');

});
