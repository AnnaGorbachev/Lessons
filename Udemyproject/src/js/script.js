
'use strict';

// const user = {
//   1: 5000,
//   alex: 4000,
// }

// console.log(typeof (Object.keys(user)[0]));







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

document.addEventListener('DOMContentLoaded', () => {

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ]
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;


    if (newFilm) {

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (favorite) {
        console.log('добавляем любимый фильм');
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  })


  const deleteAdv = (arr) => {
    arr.forEach(item => {
      item.remove();
    });
  };
  deleteAdv(adv);


  const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };
  makeChanges();

  const sortArr = (arr) => {
    arr.sort();
  }


  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);//чт нумерация перестраивалась
      })
    });
  }
  createMovieList(movieDB.movies, movieList);


})

