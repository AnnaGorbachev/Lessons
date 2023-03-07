//'use strict';


import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  // Модальное окно кот вызовется через опр-й промеж времени
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2023-05-11');
  cards();
  calc();
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });




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




  // export let one = 1;

  // let two = 2;
  // export { two };

  // export function sayHi() {
  //   console.log('kjj');
  // }


  // import { one, two } from './..';
  // console.log(`${one} and ${two}`);

  // import { one as first, two } from './..';
  // console.log(first);

  // import * as data from './..';
  // console.log(`${data.one} and ${data.two}`);
  // data.sayHi();


  // export default function sayHi() {
  //   console.log('kjj');
  // }
  // import sayHi from './..';
  // sayHi();






});
