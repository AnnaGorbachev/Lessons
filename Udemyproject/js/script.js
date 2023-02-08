
'use strict';

//<p><input type="number" id="ageToCheck" value="18"></p>

// {/* <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// const ages = [32, 33, 12, 40];

// function checkAge(age) {
//   return age > document.getElementById("ageToCheck").value;
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.every(checkAge);
// }
// </script> */}



//UDEMY PROJEKT 1

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?", "").trim();
//       const b = prompt("На сколько оцените его?", "");

//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//       } else {
//         console.log('error');
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     personalMovieDB.count
//     if (personalMovieDB.count < 10) {
//       console.log('Просмотрено мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман');
//     } else {
//       console.log('Ошибка!');
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i < 2; i++) {
//       let genres = prompt(`Введите ваши любимые жанры через запятую`, '').toLowerCase();

//       if (genres == '' || genres == null) {
//         console.log('Вы ввели некорректные данные');
//         i--;
//       } else {
//         personalMovieDB.genres = genres.split(',');
//         personalMovieDB.genres.sort();
//       }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });

//   },

// };



//UDEMY PROJEKT 2

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};



const adv = document.querySelectorAll('.promo__adv img'),
  poster = document.querySelector('.promo__bg'),
  genre = poster.querySelector('.promo__genre'),
  movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
  item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});


let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],
  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],
    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

function getSalaryByRecursion(data) {
  if (Array.isArray(data)) {
    let salaries = 0;

    for (let i = 0; i < data.length; i++) {
      salaries += data[i].salary;
    }
    return [salaries, data.length];
  }
}



function getSalaryByIteration(data) {
  let salaries = 0;
  let departments = 0;

  for (const item of Object.values(data)) {
    if (Array.isArray(item)) {
      departments += item.length;

      for (let i = 0; i < item.length; i++) {
        salaries += item[i].salary;
      }
    } else {
      for (const subitem of Object.values(item)) {

        departments += subitem.length;

        for (let i = 0; i < subitem.length; i++) {
          salaries += subitem[i].salary;
        }
      }
    }
  }

  return salaries / departments;
}

console.log(getSalaryByIteration(company));