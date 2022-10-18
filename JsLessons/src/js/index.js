

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
// -----Development--------------------

// const str = 'Web Development Tutorial';
// let arr = str.split(' ').reduce(function (longestWord, currentWord) {
//   return (currentWord.length > longestWord.length) ? currentWord : longestWord;
// }, '');

// console.log(arr);
// -----Development--------------------

// const str = 'Web Development Tutorial';
// const vowels = 'aeiou';

// let arr = Array.from(str)
//   .filter(letter => vowels.includes(letter)).length;
// console.log(arr);
// ---------------------9------------------


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
// let cat = {
//   legs: 4,
//   name: "Гармония",
//   color: "Черепаховый"
// };

// let kitten = Object.create(cat);

// console.log(kitten.legs);
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
// ------['кришна', 'харе', ':-O']-----

// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;

//     }, {})

// }

// let usersById = groupById(users);

// console.log(usersById);
// ------ann:{ id: 'ann', name: 'Ann Smith', age: 24 }-и т д -----
