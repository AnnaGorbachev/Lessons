

// function test_prime(n) {
//     if ((n === 1) || (n < 1)) {
//         return false;
//     } else if (n === 2) {
//         return true;
//     } else {
//         for (i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };

// console.log(test_prime(51));
// ----------простое ли число----------false----------------


// function solution(str) {
//   let res = '';
//   for (i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }

//   return res;
// }
// console.log(solution('vfzbdfgfdgg'));
// ---aaaaaagggggg---------------------ggdfgfdbzfv------------------

// const arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     return arr.filter(item => (item >= a && item <= b));
// }

// console.log(filterRange(arr, 1, 4));
// console.log(arr);
// -------[3, 1]---[5, 3, 8, 1]--------------

// const arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);

//         }
//     }
//     return arr;
// }

// console.log(filterRangeInPlace(arr, 1, 4));
// console.log(arr);
// ---------[3, 1]----------[3, 1]-------

// const arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);
// console.log(arr);
// ------меняет массив----------[8, 5, 2, 1, -10]-----------------

// const arr = [5, 2, 1, -10, 8];

// let result = copySorted(arr);

// function copySorted(arr) {
//     return arr.slice().sort((a, b) => b - a);
// };
// console.log(result);
// console.log(arr);
// -----не меняет массив---[8, 5, 2, 1, -10]----[5, 2, 1, -10, 8]------






// function combu(str) {
//   let arr = [];
//   let res = [];
//   for (i = 0; i < str.length; i++) {
//     arr = [str[i]];
//     let index = 0;

//     while (res[index]) {
//       arr.push('' + res[index] + str[i]);
//       index++;
//     }
//     res = res.concat(arr);
//   }
//   return res;
// }

// console.log(combu('dog'));
// ---------------['d', 'o', 'do', 'g', 'dg', 'og', 'dog']---------

// function find_longest_word(str) {
//   let arr = str.split(' ');

//   let longest = '';

//   for (i = 0; i < arr.length; i++) {
//     if ((arr[i].length) > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }

// console.log(find_longest_word('Web Development Tutorial'));
// -----Development--------------------

// const str = 'Web Development Tutorial';

// let arr = str.split(' ').sort(function (firstEl, secondEl) {
//   return secondEl.length - firstEl.length;
// });

// console.log(arr[0]);
// -------------------------Development--------------------

// const str = 'Web Development Tutorial';
// let arr = str.split(' ').reduce(function (longestWord, currentWord) {
//   return (currentWord.length > longestWord.length) ? currentWord : longestWord;
// }, '');

// console.log(arr);
// --------------------------Development--------------------

// const str = 'Web Development Tutorial';
// const vowels = 'aeiou';

// let arr = Array.from(str)
//   .filter(letter => vowels.includes(letter)).length;
// console.log(arr);
// -------------------------------9------------------

// const arr = ['qwerttt', 'qwerft43t', 'qwers4', 'qwer.qwer', 'qwerAtAyu'];

// let resReduce = arr.reduce(function (x, y) {
//   let z = [];
//   for (i = 0; i < x.length; i++) {
//     if (x[i] == y[i]) {
//       z[i] = x[i];
//     } else break;
//   }
//   x = z.join("");
//   return x;
// });

// console.log(resReduce);
// ----------------------------------qwer-----------------------

// const strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"];

// function unique(arr) {
//     let res = [];

//     for (let char of arr) {
//         if (!res.includes(char)) {
//             res.push(char);
//         }
//     }
//     return res;
// }

// console.log(unique(strings));
// ------------------------['кришна', 'харе', ':-O']------------------

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// console.log(unique(values));
// ------------------------['кришна', 'харе', ':-O']------------------

// function arrayFilled(len, value) {

//     let arr = [];

//     for (i = 0; i < len; i++) {
//         arr.push(value);
//     }
//     return arr;
// }

// console.log(arrayFilled(5, 1));
// ---------------------------------[1, 1, 1, 1, 1]-------------------

// function generateNumbers(start, len) {

//     let arr = new Array(len);

//     for (i = 0; i < len; i++, start++) {
//         arr[i] = start;
//     }
//     return arr;
// };
// console.log(generateNumbers(0, 5));
// console.log(generateNumbers(-5, 4));

// -------------------------[0, 1, 2, 3, 4]---[-5, -4, -3, -2]-------

// const numbers = [2, 3, 5, 7, 11, 13, 17];

// function currentSums(numbers) {
//     let result = [];

//     numbers.reduce(function (sum, current, i) {
//         return result[i] = sum + current;

//     }, 0)
//     return result;

// };

// console.log(currentSums(numbers));

// -----------------[2, 5, 10, 17, 28, 41, 58]------------

// const str = "Каждый охотник желает знать, где сидит фазан.";

// let arr = str.split(' ').map(item => item[0]);

// console.log(arr);

// --------------------['К', 'о', 'ж', 'з', 'г', 'с', 'ф']------------

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumSeven(arr, x) {

//     let obj = {};
//     let result = [];
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] !== x) continue;

//             let item = arr[i] + ':' + arr[j];
//             obj[item] = item;
//         }
//     }

//     for (var key in obj) {
//         result.push(obj[key]);
//     }

//     return result;
// }

// console.log(sumSeven(numbers, 7));
// -------------------------------['0:7', '1:6', '2:5', '3:4']--------------

// function aclean(arr) {
//     let obj = {};

//     for (i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split("").sort().join("");
//         obj[sorted] = arr[i];
//     }
//     return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));
// --------------------['PAN', 'hectares', 'era']--------

// const arr = ['a', 'b', 'c', 'd', 'e'];

// function moveElement(arr, from, to) {


//   arr.splice(to, 0, arr.splice(from, 1)[0]);
//   return arr;
// }

// console.log(moveElement(arr, 3, 1));

// -----------------['a', 'd', 'b', 'c', 'e']-------------------

// const str = "JavaScript";

// for (i = 0; i < str.length; i++) {

//     console.log(str.substring(i, i + 3));
// }
// ---------['Jav', 'ava', 'vaS', 'aSc', 'Scr', 'cri', 'rip', 'ipt', 'pt', 't']
// const word = "JavaScript";

// function getChars(value, index, str) {

//     return str.substring(index - 1, index + 2);
// }

// let res = Array.prototype.map.call(word, getChars);

// console.log(res);
// --['Ja', 'Jav', 'ava', 'vaS', 'aSc', 'Scr', 'cri', 'rip', 'ipt', 'pt']------

// function Animal(name) {
//   this.name = name;
//   this.lags = 4;
//   this.show_name = function () { console.log(this.name); }
// }

// var cat = new Animal("Мурзик");
// console.log(cat.name);       // Мурзик
// cat.color = "Белый";    // добавили свойство

// -----------------------
// let cat = {};
// cat.name = 'Мурка';
// cat.lags = 4;
// cat.color = 'Черепаховый';

// cat['full Name'] = "Мурка Филомена Уси-Пусечка";

// console.log(cat['full Name']);
// ------------------

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person1 = new Person('Вася', 33);
// console.log(person1.name);
// console.log(person1.age);

// Person.prototype.speshiality = "юрист-консультант";
// console.log(person1.speshiality);

// ------------------

// const user = {
//   1: 5000,
//   alex: 4000,
// }

// console.log(typeof (Object.keys(user)[0]));
// ------------

// let testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };

// let x = testObj["an entree"];
// let y = testObj["my side"];
// let z = testObj["the drink"];
// console.log(x);
// console.log(y);
// console.log(z);
// -----------------

// var dogs = {
//   running: "Арабская борзая",
//   hunter: "Лабрадор",
//   guard: "Московская"
// };

// let myDog = 'hunter';
// console.log(dogs[myDog]);

// dogs.hunter = "Ротвейлер";
// console.log(dogs[myDog]);
// ---------------------

// var dogs = {
//   running: "Арабская борзая",
//   hunter: "Лабрадор",
//   guard: "Московская"
// };

// dogs.guard = "Московская-сторожевая";
// console.log(dogs.guard);

// dogs.driving = "Сибирский хаски";

// delete dogs.guard;
// console.log(dogs.guard);
// console.log(dogs.driving);
// --------

// var dog_1 = {
//     breed: "Алабай",
//     "a type": "собака-компаньон",
//     "the weight": "50 кг"
// }

// var dog_2 = {
//     breed: "Бультерьер",
//     "a type": "бойцовская",
//     "the weight": "36 кг"
// }

// for (let key in dog_2) {
//     console.log(dog_2[key]);
// }

// console.log(Object.keys(obj));

// function testBreed() {
//     return alert(`Порода:` + this.breed + ' Тип:' + this["a type"] + ' Вес:' + this["the weight"]);
// }

// dog_1.sayAbout = testBreed;
// dog_2.sayAbout = testBreed;

// dog_1.sayAbout();
// dog_2.sayAbout();
// ---------------------





// ---------------------------------
// var litmir = [
//     { author: 'Хэленка', title: 'Улетела сказка' },
//     { author: 'Коул Кресли', title: 'Восстание Аркан' },
//     { author: 'Райчел Мид', title: 'Золотая лилия' }
// ];

// function propertyValue(array, char) {

//     // let result = [];

//     // for (i = 0; i < array.length; i++) {

//     //     result.push(array[i][char]);

//     // }
//     // return result;

//     return array.map(obj => obj[char]);
// }

// console.log(propertyValue(litmir, 'title'));
// console.log(propertyValue(litmir, 'author'));
// --------------['Улетела сказка', 'Восстание Аркан', 'Золотая лилия']-----

// const obj_1 = { name_1: "a", name_2: "b", name_3: 2018, name_4: "js" };
// const obj_2 = { name_5: "ab", name_2: "bc", name_3: 2018 };

// function myFunction(one, two) {
//     for (let key in two) {
//         delete one[key];
//     }
//     return one;
// }
// console.log(myFunction(obj_1, obj_2));
// ---------Удалить св с одинак им----{name_1: 'a', name_4: 'js'}--------------

// const cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "red",
//     convertible: false
// };

// const fiat = {
//     model: "500",
//     year: 1957,
//     color: "tan",
//     mileage: 88000
// };

// function myFunction(one, two) {
//     for (let key in two) {
//         // if (one.hasOwnProperty(key)) continue; //­Кро­ме­ имею­щих­ся­ в­ cady
//         one[key] = two[key];
//     }
//     return one;
// }

// console.log(myFunction(cadi, fiat));

// let obj = myFunction(cadi, fiat);
// for (let key in obj) {
//     console.log((key + ": " + obj[key]));
// }
// -------Замена св-в с один им-------
// make: GM--model: 500--year: 1957-- color: tan--
// ---convertible: false--mileage: 88000--------

// const cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "red",
//     convertible: false
// };

// const fiat = {
//     model: "500",
//     year: 1957,
//     color: "tan",
//     mileage: 88000
// };

// function myFunction(one, two) {
//     for (let key in one) {
//         if (!(key in two)) {
//             delete one[key]; //­ Уда­лить,­ ес­ли­ от­сут­ст­ву­ет­ в­ fiat     
//         }

//     }
//     return one;
// }

// console.log(myFunction(cadi, fiat));

// let obj = myFunction(cadi, fiat);
// for (let key in obj) {
//     console.log((key + ": " + obj[key]));
// }

// -------model: Cadillac---year: 1955---color: red-----

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let result = users.map(item => item.name);

// console.log(result);
// --------------['Вася', 'Петя', 'Маша']------------

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(item => ({
//     fullName: `${item.name} ${item.surname}`, id: item.id
// }))

// console.log(usersMapped);
// -------------{fullName: 'Вася Пупкин', id: 1}---и т д------

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// console.log(arr.sort((a, b) => a.age > b.age ? 1 : -1));
// --сорт по возрасту--{ name: "Вася", age: 25 }--{ name: "Маша", age: 28 }


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// console.log(getAverageAge(arr));
// --средний возраст--28----------------

// let users = [
//   { id: 'john', name: "John Smith", age: 20 },
//   { id: 'ann', name: "Ann Smith", age: 24 },
//   { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;

//   }, {})

// }

// let usersById = groupById(users);

// console.log(usersById);
// ------ann:{ id: 'ann', name: 'Ann Smith', age: 24 }-и т д -----

// function removeItem(arr, num) {

//   let res = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== num) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }
// console.log(removeItem([3, 5, 7, 8, 5], 5));
// -------[3, 7, 8]-----------


// function aclean(arr) {
//     let map = new Map();

//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//         map.set(sorted, word);
//     }

//     return Array.from(map.values());
// }
// ----

// ---------------
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   console.log((`${key}: ${count[key]}`));
// }
// -----------------




// let user = {
//     name: "John",
//     years: 30
// };

// let { name, years: age, isAdmin = false } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);
// -----
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {

//     let max = 0;
//     let maxName = null;
//     for (let [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }
//     return maxName;

// };

// console.log(topSalary(salaries));
// -------------------------Pete--------------------
// ===============================================================

// -------------------------DOM----------------

//------------------НАВИГАЦИЯ ПО ДОКУМЕНТУ-----------------

//-----Самые верхние элементы дерева доступны как св-ва обьекта document
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

//------Первый и последний дочерние элементы------
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

//-----КОЛЛЕКЦИЯ childNodes -это список всех детей 
// включая текст узлы  комментарии и т д
const childNodes = bodyElement.childNodes;
//--- Перебор коллекции childNodes
for (let node of document.body.childNodes) {
  // без проверки выведет все узлы вместе с текстовыми
  if (node.nodeName == "#text") { //отбрасываем узлы text,выводим только элементы
    continue;
  }
  console.log(node);
}

//---Для проверки наличия дочерних узлов hasChildNodes()---
console.log(bodyElement.hasChildNodes());

// Предыдущий  следующий узлы  и непоср родитель
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

//Если нам хочется использовать именно методы массива, 
//то мы можем создать настоящий массив из коллекции, используя Array.from:
alert(Array.from(document.body.childNodes).filter); // сделали массив

//----------НАВИГАЦИЯ ТОЛЬКО ПО ЭЛЕМЕНТАМ-------------

const bodyElement = document.body;//получаем обьект body

// Получ-е кол-ции всех дочерних эл-в
// как childNodes но только эл-в(тегов)
const bodyChildren = bodyElement.children;
const bodyChildren1 = bodyElement.children[1];//-напр второй эл

// -----Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;

// Предыдущий  следующий узлы  и непоср родитель
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

//-----------ПОИСК ПРОИЗВОЛЬНОГО ЭЛ_ТА-------------

//Универс метод - часто исп - ся
//Рез - т поиска будет собран в коллекцию
//Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson_list');

// Поиск по cелектору тега
const elemsTwo = document.querySelectorAll('.li');

// Поиск по смешанному селектору тега и класса
const elemsThree = document.querySelectorAll('.li.lesson_item-list');

// Поиск по тегу первого уровня влож-ти
const elemsFour = document.querySelectorAll('.lesson_list>li');

// Поиск по нескольким классам
const elemsFive = document.querySelectorAll('.lesson_list, .lesson_text');

// Поиск по вложенным классам
const elemsSix = document.querySelectorAll('.lesson_list .lesson_text');

// Поиск по ID
const elemsSeven = document.querySelectorAll('#listItem');

// Поиск по атрибутуr
const elemsEight = document.querySelectorAll('[data-item]');

// Поиск по атрибуту со значением
const elemsNine = document.querySelectorAll('[data-item ="85"]');

// --------------ПОЛУЧЕНИЕ КОНКРЕТНОГО ЭЛ_ТА----------
// -----1cп
const elems = document.querySelectorAll('.li');// получаем все li
console.log(elems[2]);// выводим конкретный(третий эл-т)

// Далее можно перебрать кол-ю li
for (const item of elems) {
  console.log(item);
}
// или так
elems.forEach(item => {
  console.log(item);
})

// Искать можно не только в document
const sublist = document.querySelectorAll('.lesson_sub-list');
const subItems = sublist[0].querySelectorAll('li');

// 2cп--ищет первый попавшийся обьект
const lessonList = document.querySelector('.lesson_list');
console.log(lessonList);//-тут будет один обьект

// По ID
const elemId = document.getElementById('listItem');
// По тегу -возвр-ет кол-ю.Можно искать не только в document
// Передав '*' вместо тега-получим всехпотомков
const elemTag = document.getElementsByTagName('li');
// По классу
const elemKlass = document.getElementsByClassName('lesson_item-list');
// По name-редко
const elemName = document.getElementsByName('list');

// elem.closest(css)-ищет ближайшего предка по css.-поднимается вверх от эл-та
const elem = document.querySelector('.lesson_item-sub-list');
const parentList = elem.closest('.lesson_list');

// closest -ищет указ-й селектор по цепочке родителей если нет-null
elemM[0].closest('.wrapper');


//Метод matches--проверяет есть ли эл-т css -true  false 
const elemM = document.querySelectorAll('.lesson_item-list');
elemM.forEach(el => {
  if (elem.matches('[class$="item-red"]')) console.log('red');
})
// или
for (let elem of elemM) {
  if (elem.matches('[class$="item-red"]')) {
    console.log('red');
  } else if (elem.matches('[class$="item-blue"]')) {
    console.log('blue');
  }
};

// Получив обьект мы можем применять св-ва навигации
const text = document.querySelector('.lesson_text');
const list = text.nextElementSibling;
console.log(list);

// -----------------ИЗМЕНЕНИЕ ДОКУМЕНТА--------------

// Содержимое эл-та innerHTML
const textElement = document.querySelector('.lesson_text');//Получаем обьект

//Получаем содержимое обьекта вместе с HTML
const textElementContent = textElement.innerHTML;
//Перезаписываем содержимое обьекта
textElement.innerHTML = 'jkhhhkgjhgkdj';
//Можно дописать содержимое
textElement.innerHTML = `<p>${textElementContent}</p> <p>'jhgjhgjhgm'</p>`;

//outerHTML-кроме содержимого получаем и сам обьект


//Управление текстом эл-та с пом textContent-получаем только текст без тегов
// или с тегами если они есть в самлм тексте
const textElementContent2 = textElement.textContent;
console.log(textElementContent2);

// data  Содержимое текст узла, комментария
const textElement = document.querySelector('.lesson_text');//Получаем обьект
const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);// получаем сам текст комментария

// Изменение текста узла, комментария
getComment.data = 'bjhjhlhjn';
console.log(getComment.data);

// -----------СОЗДАНИЕ ЭЛ-В И УЗЛОВ---------
// ----------Создание нового эл-та--тега------

const newElement = document.createElement('div');
console.log(newElement);
// Наполняем новый эл-т
newElement.innerHTML = 'gsjg <span class="yellow">hgvjgmhh</span>fdfsdfgsf';
console.log(newElement);

// Создание нового узла
const newText = document.createTextNode('Hello!');
console.log(newText);
// Созд-е об-ты нах-ся в константах но не явл частью документа

// --------Вставляем новый элемент----
// Строки вст-ся безоп способом как это делает textContent.

const textElement = document.querySelector('.lesson_text');//Получаем обьект
const newElement = document.createElement('div');
newElement.textContent = '<h1>vxfvfx</h1>';
newElement.innerHTML = 'gsjg <span class="yellow">hgvjgmhh</span>fdfsdfgsf';
//  перед обьектом
textElement.before(newElement);
// после обьекта
textElement.after(newElement);
// внутрь и в начало обьекта
textElement.prepend(newElement);
// внутрь и в конец обьекта
textElement.append(newElement);

// Вставка нескольких обьектов сразу
textElement.append(newElement, 'gjhgjhmg');
// Можно вставлять строку
textElement.append('gjhgjчап<span class="yellow">hgvjgmhh</span>птhmg');

// Если надо вставить HTML с тегми и прочим как это делает innerHTML----insertAdjacentHTML

const textElement = document.querySelector('.lesson_text');//Получаем обьект

// Вставляем текст,HTML, элемент
textElement.insertAdjacentHTML(
  "afterend",//-куда вставляем
  '<span class="yellow">hgvjgmhh</span>'
)
// "beforebegin"--вставить html непоср-но перед textElement
// "afterbegin"--в начало
// "beforeend"---в конец
// "afterend"---непоср-но после textElement

// Есть еще методы insertAdjacentText    insertAdjacentElement
textElement.insertAdjacentText(
  "beforeend",//-куда вставляем
  '<span class="yellow">hgvjgmhh</span>'
)
textElement.insertAdjacentElement(
  "beforeend",//-куда вставляем
  newElement
)

// Добавляет новый атрибут или изменяет значение существующего атрибута
element.setAttribute(name, value);
// getAttribute   hasAttribute  removeAttribute
// name - имя атрибута(строка).
// value - значение атрибута.

// ------------ПЕРЕНОС ЭЛЕМЕНТА

const lessonBlock = document.querySelector('.lesson');//Получаем обьект
const title = document.querySelector('h3')//Получаем обьект
// Переосим title в конец блока lessonBlock
lessonBlock.append(title);

// -------------КОПИЯ ОБЬЕКТА__

const textElement = document.querySelector('.lesson_text');//Получаем обьект

// Клонирование без дочерних эл-в
const cloneTextElement = textElement.cloneNode();// если(true) то это кл-е с содержимым
// Клонир-е вместе с содержимым
const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);;

// ----УДАЛЕНИЕ ОБЬЕКТА----------------
textElement.remove();

// ---СТИЛИ И КЛАССЫ-------------
// ---УПРАВЛЕНИЕ КЛАССАМИ------
// ----className---

const еlement = document.querySelector('.lesson_item_list_red');//Получаем обьект
// Получаем имена классов
const elementClassNames = еlement.className;
// Перезаписываем имя класса-перезап-ся все эл-ты с таким классом
еlement.className = "red";

// - -----------ClassList- спец обьект ------
//методы ClassList

// item() получ-е класса кот распол-ся под опр-м индексом
const btns = document.querySelectorAll('buttons');
console.log(btns[0].classList.item(0));// blue

//сколько классов есть у первой кнопки
console.log(btns[0].classList.length);//2

// Добавить класс можно несколько
const еlement = document.querySelector('.lesson_item_list_red');//П-ем эл-т
еlement.classList.add('active', 'bgfbfgb');
// Удалить класс можно несколько
еlement.classList.remove('active', 'fg');
//  Добавить класс если его нет   а если есть-удалить
еlement.classList.toggle('active');
// Проверка наличия класса true false
if (btns[1].classList.contains('active')) { }
// например  -получ типа toggle вручную
btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
})
// --ClassList-перебираемый
// Можно перечислить все классы
for (let clName of еlement.classList) {
  console.log(clName);
}
// ClassName -устаревшее-выводит классы в виде строки

// ------УПРАВЛЕНИЕ СТИЛЯМИ------
// --element.style---

const еlement = document.querySelector('.lesson_item_list_red');
// Задаем стиль с пом Css свойства
element.style.color = 'red';
// Для св-в из нескольких св-в исп-ся camelCase
element.style.marginBottom = '30px';
element.style.zIndez = '10';

// Чт получит зн того или иного св-ва  можно просто к нему обратиться
// только если оно записано в style
console.log(element.style.marginBottom);

// Сброс стиля
element.style.marginBottom = "";

// ---ПОЛНАЯ ПЕРЕЗАПИСЬ СТИЛЕЙ---style.cssText--минус--перезаписывает все св-ва в style
const еlement = document.querySelector('.lesson_item_list_red');//Получаем элемент
еlement.style.cssText = `
  margin-bottom: 30px;
  color:red;
`;

// Вычисленные стили  getComputedStyle(element, [pseudo])--только для чтения

const еlement = document.querySelector('.lesson_item_list_red');//Получаем элемент

// Получение значения св-ва
// только если оно записано в style
console.log(element.style.fontSize);

// Стиль эл-та
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Стиль псевдоэл-та
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);

// Лайфхак
console.log(elementStyle.paddingLeft);
// Получаем число
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);

//Стандартные Атрибуты и св-ва DOM-эл - в---
console.dir(Link);//-список всех 
//доступных св - в


// ---СОБЫТИЯ---------
// ----Назначение событию обработчика----
// ----Исп-е атрибута HTML
//<button onclick= "console.log('Клик!')"

// _----Исп-е DOM---
// ----НО тут невозм повесить неск обр-в на одно событие
const button = document.querySelector('.button');
button.onclick = function () {
  console.log('Клик!');
}
//или
function showConsole() {
  console.log('Клик!');
};
button.onclick = showConsole;

//--Обр-к с-й  element.addEventListener/removeEventListener(event,handler[, options])
const button = document.querySelector('.button');

button.addEventListener("click", showConsole, options);//или
button.addEventListener("click", showConsole, { "capture": false });
button.removeEventListener("click", showConsole);
// опции addEventListener
const options = {
  "capture": false,//-фаза на кот д ср-ть обр-к
  "once": false,// true-обр-к б удален после вып-я т.е вместо removeEventListener
  "passive": false,//true-ук-ет что обр-к никогда не вызовет preventDefault()
}

//  Обьект события--

const button = document.querySelector('.button');

function showConsole(event) {

  console.log(event.type);// тип события
  console.log(event.target);// обьект на кот сработал обр-к
  console.log(event.currentTarget);// об к кот назн-н обр-к
  console.log(event.clientX);//полож курсора по осиX
  console.log(event.clientY);//полож курсора по осиY......есть и другие

  console.log(event);//все детали события
};

button.removeEventListener("click", showConsole);
button.removeEventListener("mouseenter", showConsole);

//-ВСПЛЫТИЕ И ПОГРУЖЕНИЕ
//Чтобы остановыть всплытие
event.stopPropagation()

"capture": false,//-фаза на кот д ср-ть обр-к--чт отловить погружение

//Делигирование событий
//Напр есть много кнопок-при наж на каж -console.log('vdfv');
//Циклом:неправ.тк если появ еще одна кн после этого цикла, на ней не будет срабат
const buttons = document.querySelectorAll('.button');

buttons.forEach(buttonItem => {
  buttonItem.addEventListener("click", () => {.......})
})
//Правильный подход
//Назначим обр-к для их родителя

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn__block');



wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == "BUTTON") { console.log('hello'); }
  //или так
  if (event.target && event.target.classList.closest('blue')) { console.log('hello'); }
  //matches()  -какой-то эл совпадает с чем-то
  if (event.target && event.target.matches('button.red')) { console.log('hello'); }
})


// Действия бр-ра по ум и их отмена

const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
  console.log('Наши действия');
  event.preventDefault();//отменяем д-е бр-ра-(тут--переход по ссылке)
})
//если мы исп-ем onclik тогда
link.onclick = function () {
  console.log('Наши действия');
  return false//отменяем д-е бр-ра-(тут--переход по ссылке)
}

// ----СОБЫТИЯ МЫШИ----
//Типы событий мыши--простые и комплексные
//--простые
//mousedoun / mouseup-Кн мыши нажата-отпущ над эл-м
//mouseover / mouseout-Курсор мыши появл над эл-м/уходит с него
//mousesome-Каждое движ мыши генер-ет это событие
//contextmenu-Вызывается при попытк откр-я контекс-го меню

//--комплексные
//click--выз-ся при mousedoun а затем mouseup над одним и тем же эл-м,если исп-сь основная кн мыши
//dblclick--двойной клик на эл-те
// event.which = 1-нажата осн-я кн(левая)
// event.which = 2-средняя
// event.which = 3-неосновная(правая)

const button = document.querySelector('.button');

button.addEventListener("mousedoun", function (event) {
  console.log(`Нажата кнопка ${event.which}`);
})

//Движения мыши-----mousemove-дв-е мыши над опр-м эл-м
//--Коорд курсора относит окна бр-ра--clientX/Y---
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mousemove", function (event) {
  blockForMouse.innerHTML =
    `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;//-строка с записью координат
})

//----------Наведение мыши-----
// --------mouseover / mouseout--------relatedTarget----недостаток-всплытие
//--mouseover-момент когда курсор оказ над эл-м
// --mouseout-курсор уходит с эл-та
// --relatedTarget--когда мыши перех с одн об на другой-один из них будет target,др-relatedTarget
// для mouseover---event.target-эл на кот курсор перешел---relatedTarget--с которого ушел
// для mouseout-----наоборот

// --------mouseenter / mouseleave---не всплывают-+++--не можем прим дилегирование-минус
// --это ниже не будет работать с   mouseenter / mouseleave
// -Пример делегирования наведения мыши----
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
  let target = event.target.closest('span');
  //переход не на span-игнорировать
  if (!target) return;
  target.style.cssText = `backgroundColor: #343434;`;
})
blockForMouse.addEventListener("mouseout", function (event) {
  let target = event.target.closest('span');
  //переход не на <span>-игнорировать
  if (!target) return;
  target.style.cssText = '';
})

// Клавиатура
// keydown – происходит при нажатии клавиши
// keyup – при отпускании клавиши

// event.code и event.key

/*
document.addEventListener("keydown", function (event) {
  console.log(`Нажата клавиша ${event.code} (${event.key})`);
});//--выведет-Нажата клавиша KeyG (g)
document.addEventListener("keyup", function (event) {
  console.log(`Отжата клавиша ${event.code} (${event.key})`);
});//--выведет-Отжата клавиша KeyG (g)
*/
/*
Если пользователь работает с разными языками, то при переключении
на другой язык символ изменится с "G" на совершенно другой.
Получившееся станет новым значением event.key,
тогда как event.code останется тем же: "KeyG".
*/
// ниже проверяется что зажата клавиша Z на любом яз  
// и  что зажата кл Ctrl(или metaKey для appl)
/*
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        console.log('Отмена действия!');
    }
});
*/

/*
-------Автоповтор-----
При долгом нажатии клавиши возникает автоповтор: keydown срабатывает
снова и снова, и когда клавишу отпускают, то отрабатывает keyup.
Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.
Для событий, вызванных автоповтором, у объекта события
свойство event.repeat равно true.
*/
/*
document.addEventListener("keydown", function (event) {
    console.log(`Нажата клавиша ${event.code} (${event.key})`);
    console.log(event.repeat);
});
*/

// Прокрутка (скролл)
/*
window.addEventListener('scroll', function (event) {
  //кол-во прокрученных пикселей по вертикали
  // scrollY или pageYOffset (устарел)
  // кол-во прокрученных пикселей по горизонтали
  // scrollX или pageXOffset (устарел)

  console.log(`${scrollY}px`);
});
*/
/*
Нельзя предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll,  потому что он срабатывает после того,
как прокрутка уже произошла.

Но можно предотвратить прокрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например,
на событии keydown для клавиш pageUp и pageDown.

Способов инициировать прокрутку много, более надёжный
способ – использовать CSS, свойство overflow: hidden;.
*/

/*
Использование

Событие прокрутки scroll позволяет реагировать на прокрутку страницы
или элемента. Есть много хороших вещей, которые при этом можно сделать.

- Показать / скрыть дополнительные элементы управления или информацию,
основываясь на том, в какой части документа находится пользователь.
Например анимация при скроле или ленивая подгрузка
- Подгрузить данные, когда пользователь прокручивает страницу вниз
до конца. Бесконечный скрол.

По ссылкам в описании есть видео с примерами реализации этого
функционала с помощью события scroll. Но, более интересным решением
данных задач будет использование IntersectionObserver, который позволяет
веб-приложениям асинхронно следить за изменением пересечения
элемента с его родителем или областью видимости документа.

Подробно об IntersectionObserver я расскажу в отдельном видео

*/

// События загрузки страницы
/*
1) DOMContentLoaded – браузер полностью загрузил HTML,
  было построено DOM - дерево, но внешние ресурсы,
  такие как картинки <img> и стили, могут быть ещё не загружены.
2) load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
3) beforeunload / unload – пользователь покидает страницу.
*/

document.readyState - состояние загрузки

// Есть три возможных значения:
// "loading" – документ загружается.
// "interactive" – документ был полностью прочитан.
// "complete" – документ был полностью прочитан
// и все ресурсы(такие как изображения) были тоже загружены.



// Событие DOMContentLoaded срабатывает на объекте document!!!!
document.addEventListener("DOMContentLoaded", readyDom);

// Событие load срабатывает на объекте window!!!
window.addEventListener("load", readyLoad);

function readyDom() {
  const image = document.querySelector('.image');
  console.log(document.readyState);
  console.log('DOM загружен!');
  console.log(image.offsetWidth);
}
function readyLoad() {
  console.log(document.readyState);
  const image = document.querySelector('.image');
  console.log('Страница загружена!');
  console.log(image.offsetWidth);
}



// Событие в момент когда польз-ль собирается покинуть страницу


// ---beforeunload----
// Событие beforeunload срабатывает на объекте window
window.addEventListener("beforeunload", beforeUnLoad);

function beforeUnLoad(event) {
  // Отмените событие, как указано в стандарте.
  event.preventDefault();
  // Chrome требует установки возвратного значения.
  event.returnValue = '';
}

// ------unload-----
// Событие unload срабатывает на объекте window
window.addEventListener("unload", function (e) {
  // Отправка статистики в фоновом режиме и т.д.
  // navigator.sendBeacon(url, data)
  // https://w3c.github.io/beacon/.
});

//-----События на моб устройствах---
// http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
// https://habr.com/ru/company/sibirix/blog/227175/

// touchstart
// touchmove
// touchhend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {

  const box = document.querySelector('.box');
  box.addEventListener('touchstart', (e) => {
    e.preventDefault()//рек-ся чт отменить станд повед браузера

    let t = e.targetTouches[0].pageX;// координаты пальца

    console.log(t);
  });


})

  // свойства
  // touches -все пальцы на странице
  // targetTouches  -пальцы кот взаим-ют имно с этим эл
  // changedTouches  -список пальцев кот уч-ют в текущем событии





  < script defer src = "js/script.js" ></script >
    <script async src="js/script.js" ></script>//для скр кот не зав от других или DOM

window.addEventListener('DOMContentLoaded', () => { }

// поместить скрипт на страницу
const script = document.createElement('script');
script.src = "js/script.js";
script.async = false;
document.body.append(script);






// --------------Таблица- Dom--------------
// ---http://htmlbook.ru/content/maket-iz-dvukh-kolonok--
function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}
generateTable();




// Пример с меню-----
/*
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
  if (event.target.closest('.menu__button')) {
    menuBody.classList.toggle('_active');
  }
  if (!event.target.closest('.menu')) {
    menuBody.classList.remove('_active');
  }
}
*/
/*
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    menuBody.classList.remove('_active');
  }  //--если нажимаем Esc то отбираем класс _active--меню закрывается
});
*/





// Перетаскивание Drag`n`Drop
/*
const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

    let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
    let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

    let gragItemSizes = {
        width: gragItem.offsetWidth,
        height: gragItem.offsetHeight
    }
    let gragFieldSizes = {
        left: gragField.getBoundingClientRect().left + scrollX,
        top: gragField.getBoundingClientRect().top + scrollY,
        right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
        bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
    }

    gragItem.style.position = 'absolute';
    gragItem.style.zIndex = 1000;
    document.body.append(gragItem);

    moveItem(event.pageX, event.pageY);

    function moveItem(pageX, pageY) {
        let currentX = pageX - coordsItemX;
        let currentY = pageY - coordsItemY;

        if (
            currentX + gragItemSizes.width <= gragFieldSizes.right &&
            currentX >= gragFieldSizes.left
        ) {
            gragItem.style.left = `${currentX}px`;
        } else {
            if (currentX + gragItemSizes.width > gragFieldSizes.right) {
                gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
            }
            if (currentX < gragFieldSizes.left) {
                gragItem.style.left = `${gragFieldSizes.left}px`;
            }
        }
        if (
            currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
            currentY >= gragFieldSizes.top
        ) {
            gragItem.style.top = `${currentY}px`;
        } else {
            if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
                gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
            }
            if (currentY < gragFieldSizes.top) {
                gragItem.style.top = `${gragFieldSizes.top}px`;
            }
        }
    }

    let currentDroppable = null;

    function onDragItem(event) {
        moveItem(event.pageX, event.pageY);

        gragItem.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        gragItem.hidden = false;

        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.drag-field__point');

        if (currentDroppable !== droppableBelow) {
            if (currentDroppable) {
                currentDroppable.classList.remove('_active');
                gragItem.classList.remove('_active');
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                currentDroppable.classList.add('_active');
                gragItem.classList.add('_active');
            }
        }
    }
    document.addEventListener('mousemove', onDragItem);

    document.addEventListener("mouseup", function (event) {
        document.removeEventListener('mousemove', onDragItem);
    }, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
    event.preventDefault();
});
*/





// ----Textarea  со счетчиком ск осталось символов ввести---
/*
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);

txtItem.addEventListener("keydown", function (event) {
  if (event.repeat) txtSetCounter();
});   //если есть автоповтор то вып-ся эта ф-я

function txtSetCounter() {
  const txtCounterResult = txtItemLimit - txtItem.value.length;
  txtCounter.innerHTML = txtCounterResult;
}
*/





