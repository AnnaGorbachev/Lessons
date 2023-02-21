
"use strict";

const wordByInput = document.querySelector('#words__text');
const wordToOutput = document.querySelector('#output');
const buttonStart = document.querySelector('#start');
const trainingText = document.querySelector('#training__text');

wordByInput.addEventListener('keydown', setWords);
buttonStart.addEventListener('click', setArrOfWords);

let arrWords = [];

function setWords() {
  if (event.code == 'Enter') {

    let val = wordByInput.value;
    if (val) {
      wordToOutput.innerHTML += `${val}<div class="delete"></div><br>`;
      arrWords.push(val);
    }


    // const trash = document.createElement('div');
    // trash.classList.add('delete');


    wordByInput.value = '';
  }
}

function setArrOfWords() {
  let result = [];
  for (let i = 0; i < 3; i++) {
    let randomElement = getrandomElement(arrWords);
    result.push(randomElement);
  }
  trainingText.innerHTML = result;
}

function getrandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}













// const options = {
//   names: 'test',
//   width: 1024,
//   height: 1000,
//   colors: {
//     border: 'black',
//     bg: 'red',
//   },
//   makeTest: function () {
//     console.log('Test');
//   },
// };

// console.log(options.makeTest());
// console.log(Object.keys(options).length);

// console.log(options['colors']['bg']);
// const { border, bg } = options.colors;
// console.log(bg);


// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Св-во ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Св-во ${key} имеет значение ${options[key]}`);
//   }
// }

// --копирование-----
// function copy(mainObj) {
//   let copyObj = {};
//   for (let key in mainObj) {
//     copyObj[key] = mainObj[key];
//   }
//   return copyObj;
// }
// console.log(copy(options));


// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[0] = 'jhvmhhhhg';
// console.log(newArr);
// console.log(oldArr);


// const num = {
//   d: 17,
//   e: 20,
// };
// const clone = Object.assign({}, num);
// console.log(clone);
// num.d = 22;
// console.log(clone.d);

// console.log(Object.assign(options, num));

// let copyObj = JSON.parse(JSON.stringify(options));
// console.log(copyObj);



// const arr1 = ['a', 'b', 'c'],
//   arr2 = ['av', 'bv', 'cv'];
// const res = [...arr1, ...arr2, 'dzg', 'zsf'];
// console.log(res);




// function fn(a, b, c) {
//   console.log(a + '---');
//   console.log(b + '---');
//   console.log(c + '---');
// }
// const n = [2, 5, 7];
// fn(...n);



// const arr3 = ['a', 'b', 'c'];
// const newArr3 = [...arr3];
// console.log(newArr3);

// const q = {
//   one: 1,
//   two: 2,
// };

// const newQ = { ...q };
// console.log(newQ);






// ------------------
// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%'
//     },
//     exp: '1 month',
//   },
//   showAgeAndLangs: function (plan) {
//     const { age } = plan;
//     const { languages } = plan.skills;

//     let res = `Мне ${age} и я владею языками: `;

//     languages.forEach(l => res += `${l.toUpperCase()} `)

//     // for (let key of languages) {
//     //   res += `${key.toUpperCase()} `;
//     // }

//     // languages.forEach(function (lang) {
//     //   str += `${lang.toUpperCase()} `;
//     // });
//     return res;
//   }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



// function showProgrammingLangs(plan) {
//   let res = '';
//   const { programmingLangs } = plan.skills;

//   for (let key in programmingLangs) {
//     res += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }
//   return res;
// }
// console.log(showProgrammingLangs(personalPlanPeter));


// function showExperience(plan) {
//   return plan.skills.exp;
// }
// console.log(showExperience(personalPlanPeter));



// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// function showFamily(arr) {
//   let res = '';
//   if (arr.length === 0) {
//     res = 'Семья пуста';
//   } else {
//     res = 'Семья состоит из: ';
//   }
//   arr.forEach(i => { res += `${i} ` });
//   return res;
// }
// console.log(showFamily(family));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const arr = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//   let res = '';
//   (arr.length === 0) ? res = 'Нет доступных валют' : res = 'Доступные валюты:\n';

//   arr.forEach(function (item) {
//     if (item !== missingCurr) {
//       res += `${item}\n`;
//     }
//   })
//   return res;
// }
// console.log(availableCurr(arr, 'EUR'));


// Object.setPrototypeOf(john, soldier);
// const john = Object.create(soldier);
// hello();

// function hello() {
//   console.log('kvhbfgbgf');
// }


// hi();

// function hi() {
//   console.log('1111234');
// }

// const a = [5, 6, 23, 0, 88, 867, 11],
//   sorted = a.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// }


// function max(arr) {
//   if (arr.length == 2) {
//     return (arr[0] > arr[1]) ? arr[0] : arr[1];
//   }
//   let subMax = max(arr.slice(1));
//   return (arr[0] > subMax) ? arr[0] : subMax;
// };
// console.log(max([5, 6, 23, 0, 88, 867, 11]));





