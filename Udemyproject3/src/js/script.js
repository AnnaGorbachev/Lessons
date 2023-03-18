//'use strict';
require('es6-promise').polyfill();

//import('jquery');
import $ from "jquery";


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

  //--------------------import----------------------

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



  //--------------------example-jquery--------------------------------

  console.log($);

  // if (window.jQuery) {
  //   console.log('yes');
  // } else {
  //   console.log('no');
  // }


  // (function ($) {

  //   })
  // })

  $(document).ready(function () {

    console.log('jljhj');
    $('.example-jquery .list-item:first').hover(function () {
      $(this).toggleClass('jquery-active');
    })

    $('.example-jquery .list-item:eq(2)').on('click', function () {
      $('.example-jquery .image:even').fadeToggle('slow');
    });

    $('.example-jquery .list-item:eq(4)').on('click', function () {
      $('.image:odd').animate({
        opacity: 'toggle',
        height: 'toggle'
      }, 2000);
    });

  })

  //------------------------example   animation-----------------
  const btnPhone = document.querySelector('.animation #iphone'),
    btnMacbook = document.querySelector('.animation #macbook'),
    imagePhone = document.querySelector('#animation-img-phone');

  let phoneAnimation;

  btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
      phoneAnimation = imagePhone.animate([
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: 'translateY(100px) rotate(180deg)' },
        { transform: 'translateY(-100px) rotate(270deg)' },
        { transform: 'translateY(0) rotate(360deg)' }
      ], {
        duration: 3000,
        iterations: Infinity
      });
    } else if (phoneAnimation.playState === 'paused') {
      phoneAnimation.play();
    } else {
      phoneAnimation.pause();
    }
  })



  // const promisify = (item, delay) =>
  //   new Promise(resolve => setTimeout(() => resolve(item), delay));

  // const a = () => promisify('a', 100);
  // const b = () => promisify('b', 5000);
  // const c = () => promisify('c', 3000);

  // async function one() {
  //   const promises = [a(), b(), c()];
  //   const [outpu1, outpu2, outpu3] = await Promise.all(promises);
  //   return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
  // }

  // async function two() {
  //   const promises = [a(), b(), c()];
  //   const outpu1 = await Promise.race(promises);
  //   return `two is done: ${outpu1}`;
  // }

  // async function three() {
  //   const outpu1 = await a();
  //   const outpu2 = await b();
  //   const outpu3 = await c();
  //   return `three is done: ${outpu1} ${outpu2} ${outpu3}`
  // }

  // one().then(console.log);
  // two().then(console.log);
  // three().then(console.log);



  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('foo');
  //   }, 1000);
  //   setTimeout(() => {
  //     reject('bar');
  //   }, 900);
  // });

  // promise.then((value) => {
  //   console.log(value);
  // }).catch((e) => console.log(e))




  // function getSum(a, b) {
  //   function sum() {
  //     console.log(this.a);
  //     return a + b;
  //   }

  //   console.log(sum());
  // }

  // getSum(4, 5);

  // 



  const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));

  const a = () => promisify('a', 1000);
  const b = () => promisify('b', 2000);
  const c = () => promisify('c', 3000);

  // function fn() {
  //   const res = [];
  //  return a().then((resA) => {
  //     res.push(resA);
  //     return b();
  //   }).then((resB) => {
  //     res.push(resB);
  //     return c();
  //   }).then ((resC)=> {
  //     res.push(resC);
  //     return res;
  //   })
  // }
  // async function fn() {
  //   const resA = await a();
  //   const resB = await b();
  //   const resC = await c();
  //   return [resA, resB, resC];
  // }

  // async function fn() {
  //   const arr = [a, b, c];
  //   const res = [];

  //   for (const func of arr) {
  //     res.push(await func());
  //   }

  //   return res;
  // }
  function fn() {
    const arr = [a, b, c];
    const res = [];

    let promise = Promise.resolve();

    for (const func of arr) {
      promise = promise.then(() => {
        return func().then((r) => res.push(r))
      });
    }

    return promise.then(() => res);
  }

  fn().then(console.log);
})
