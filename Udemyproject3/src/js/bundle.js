/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((module) => {

function calc() {
  //-------Калькулятор-----------

  const result = document.querySelector('.calculating__result span');
  let sex,
    height,
    weight,
    age,
    ratio;

  if (localStorage.getItem('sex')) {//проверка естьли что-то в localStorage
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';//для расчета по умолч
    localStorage.setItem('sex', 'female');
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;//для расчета по умолч
    localStorage.setItem('ratio', 1.375);
  }

  function initLocalSettings(selector, activeClass) {// когда зах на стр чт подтягивались данные из localStorage
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.classList.remove(activeClass);//уд класс активности
      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
    //проверка заполнены ли все данные
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____';
      return;
    }
    if (sex === 'female') {
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);//формула из сайта
    } else {
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
  }
  calcTotal();



  function getStaticInformation(selector, activeClass) { //ф-я для двух блоков div
    const elements = document.querySelectorAll(selector);
    //дилегирование событий не подх т к будет нажиматься и между ними?
    //поэт просто перебираем эл-ты и на каж вешаем обработчик
    elements.forEach(elem => {
      elem.addEventListener('click', (e) => {
        //вытаскиваем значение кнопки на кот кликнули
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }
        //классы активности--сначала убираем все классы акт а потом назначаем одному
        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);

        calcTotal();
      });
    });
  }

  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

  function getDynamicInformation(selector) { //ф-я для инпутов
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
      //если поль-ль ввел не число то делаем красным border
      if (input.value.match(/\D/g)) { //если не число
        input.style.border = "1px solid red";
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {// проверяем какой именно инпут нажат

        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;

      }
      calcTotal();
    })

  }

  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');
}

module.exports = calc;


/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((module) => {

function cards() {
  // Исп-ем классы для карточек

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }
  }

  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    };

    return await res.json();
  };


  // getResource('http://localhost:3000/menu')
  //   .then(data => {
  // data.forEach(({ img, altimg, title, descr, price }) => {
  //   new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  // })
  //   });


  axios.get('http://localhost:3000/menu')
    .then(data => {
      data.data.forEach(({ img, altimg, title, descr, price }) => {
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      })
    });


  //2способ-без классов-т е формирование на лету

  // getResource('http://localhost:3000/menu')
  //   .then(data => createCard(data));

  // function createCard(data) {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     const element = document.createElement('div');
  //     //price * на курс доллара т к мы получили цену в долларе
  //     element.classList.add("menu__item");

  //     element.innerHTML = `
  //               <img src=${img} alt=${altimg}>
  //               <h3 class="menu__item-subtitle">${title}</h3>
  //               <div class="menu__item-descr">${descr}</div>
  //               <div class="menu__item-divider"></div>
  //               <div class="menu__item-price">
  //                   <div class="menu__item-cost">Цена:</div>
  //                   <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //               </div>
  //           `;
  //     document.querySelector(".menu .container").append(element);
  //   });
  // }

}

module.exports = cards;


/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((module) => {

function forms() {
  //Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'icons/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);//собрала все данные с формы
      // превращ в массив массивов(formData.entries()),потом в обьект(Object.fromEntries), и в json

      const json = JSON.stringify(Object.fromEntries(formData.entries()));


      postData('http://localhost:3000/requests', json)

        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch(() => {
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset();
        });

    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }



  //-----------Vova-------------------
  // function sendRequest({
  //   url,
  //   method,
  //   data,
  //   onSuccess,
  //   onError
  // }) {
  //   const request = new XMLHttpRequest();
  //   try {
  //     request.open(method, url);
  //   } catch (error) {
  //     console.log('open error')
  //     onError(error);
  //     return;
  //   }

  //   request.send(data);

  //   request.addEventListener('load', () => {
  //     if (request.status === 200) {
  //       onSuccess();
  //     } else {
  //       console.log('not 200 error')
  //       onError();
  //     }
  //   });
  //   request.addEventListener('error', () => {
  //     console.log('error')
  //     onError()
  //   })

  // }

  // const forms = document.querySelectorAll('form');
  // const message = {
  //   loading: 'icons/spinner.svg',
  //   success: 'Спасибо! Скоро мы с вами свяжемся',
  //   failure: 'Что-то пошло не так...'
  // };

  // forms.forEach(item => {
  //   postData(item);
  // });

  // function postData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     let statusMessage = document.createElement('img');
  //     statusMessage.src = message.loading;
  //     statusMessage.style.cssText = `
  //               display: block;
  //               margin: 0 auto;
  //           `;
  //     form.insertAdjacentElement('afterend', statusMessage);//для вставки спиннера в конец

  //     const formData = new FormData(form);

  //     const object = {};
  //     formData.forEach(function (value, key) {
  //       object[key] = value;
  //     });
  //     const json = JSON.stringify(object);

  //     sendRequest({
  //       url: 'http://localhost:8080',
  //       method: 'POST',
  //       data: json,
  //       onSuccess: () => {
  //         showThanksModal(message.success);
  //         statusMessage.remove();
  //         form.reset();
  //       },
  //       onError: () => {
  //         statusMessage.remove();
  //         showThanksModal(message.failure);
  //       }
  //     })

  //   });
  // }

  // function showThanksModal(message) {
  //   const prevModalDialog = document.querySelector('.modal__dialog');

  //   prevModalDialog.classList.add('hide');
  //   openModal();

  //   const thanksModal = document.createElement('div');
  //   thanksModal.classList.add('modal__dialog');
  //   thanksModal.innerHTML = `
  //           <div class="modal__content">
  //               <div class="modal__close" data-close>×</div>
  //               <div class="modal__title">${message}</div>
  //           </div>
  //       `;
  //   document.querySelector('.modal').append(thanksModal);
  //   setTimeout(() => {
  //     thanksModal.remove();
  //     prevModalDialog.classList.add('show');
  //     prevModalDialog.classList.remove('hide');
  //     closeModal();
  //   }, 4000);
  // }
}

module.exports = forms;


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((module) => {

function modal() {
  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  //const modalClosedBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });


  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';//чт стр не прокруч при открытом modal
    //если польз-ль уже открывал сам мод окно то не откр его через время автом-ки
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');//
    document.body.style.overflow = '';//восстан-ем скролл страницы
  }

  //modalClosedBtn.addEventListener('click', closeModal);

  //если клик на подложку или крестик то мод окно закрывается
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  })

  document.addEventListener('keydown', (e) => {// чт закрывалось при Esc
    if (e.code === 'Escape' && modal.classList.contains('show')) {//если наж Esc и открыто мод окно
      closeModal();
    }
  });

  // Модальное окно кот вызовется через опр-й промеж времени
  const modalTimerId = setTimeout(openModal, 50000);

  // показать мод окно есть польз-ль долистал до конца стр   scrollY
  window.addEventListener('scroll', showModalByScroll)// чт событие вып-сь 1 раз { once: true } не подх


  function showModalByScroll() {
    const scrollY = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollY + clientHeight >= scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
}

module.exports = modal;


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

function slider() {

  //---Slider---------------
  // offer__slider-inner--обернули слайдер в этот блок чт это было окошко через кот б.видеть текущий слайд

  //---------Точки для слайдера
  //-Алгоритм:
  //1.получаем как элемент весь слайдер а не только враппер
  //2.устан ему position relative если у него такого нет т к точки будут абсол спозиц-ны и б прикрепл к низу слайдера
  //3.создаем обертку для этих точек
  //4.с пом цикла создаем кол-во точек == кол-ву слайдов
  //5.причем каждой точке надо присв атрибут для связи (первая точка-это первый сл-р и тд)
  //6.сделать класс активности для активной точки
  //7.сделать чтобы класс активности менялся на точках при передв слайдера

  const slides = document.querySelectorAll('.offer__slide'),
    slider = document.querySelector('.offer__slider'),//1.точки
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),//общее кол-во
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    width = window.getComputedStyle(slidesWrapper).width,//получаем ширину враппера
    slidesField = document.querySelector('.offer__slider-inner');//строка для всей карусели

  let slideIndex = 1;
  let offset = 0;//отступ


  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;//общее кол-во
    current.textContent = `0${slideIndex}`;//номер текущего слайда
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';//ширина для иннера
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';//стили для слайдов-чт они выстроились в ряд

  slidesWrapper.style.overflow = 'hidden';//скрываем все слайды вне враппера

  slides.forEach(slide => {//т к слайды м б разной шир--устан для них одну ширину
    slide.style.width = width;
  });
  //

  slider.style.position = 'relative';//2.точки

  const indicators = document.createElement('ol'),//3.точки
    dots = [];//7.точки
  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {//4.точки
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);//5.точки
    dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
    if (i == 0) {//6.точки
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);//7 точки
  }


  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }

  next.addEventListener('click', () => {

    if (offset == deleteNotDigits(width) * (slides.length - 1)) { //slice(0, width.length - 2)заменила на replace(/\D/g, '')
      offset = 0;//значит мы долистали до конца и надо вернуться в самое начало
      // (+width.slice(0, width.length - 2)--'500px'переделываем в 500
    } else {
      offset += deleteNotDigits(width);//добавляем смещение
    }

    //сдвигаем слайд
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {//если мы на последнем-то перемещ-ся на первый
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = ".5"); //изначально ставим точкам
    dots[slideIndex - 1].style.opacity = 1;//.6

  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = ".5");//.6
    dots[slideIndex - 1].style.opacity = 1;

  });


  dots.forEach(dot => { //.7
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex - 1].style.opacity = 1;
    });
  });

  //-------простой слайдер-----------
  // let slideIndex = 1;
  // const slides = document.querySelectorAll('.offer__slide'),
  //   prev = document.querySelector('.offer__slider-prev'),
  //   next = document.querySelector('.offer__slider-next'),
  //   total = document.querySelector('#total'),//общее кол-во
  //   current = document.querySelector('#current');

  // showSlides(slideIndex);//иниц-ем showSlides при открытии страницы

  // // подставляем общее кол-во в блок total
  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides(n) {

  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }

  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => item.style.display = 'none');

  //   slides[slideIndex - 1].style.display = 'block';
  //   // подставляем номер текущего слайда
  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }

  // }


  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', () => {
  //   plusSlides(-1);
  // })

  // next.addEventListener('click', () => {
  //   plusSlides(1);
  // })


  //--------------Слайдер-карусель без точек------------------------

  // const slides = document.querySelectorAll('.offer__slide'),
  //   prev = document.querySelector('.offer__slider-prev'),
  //   next = document.querySelector('.offer__slider-next'),
  //   total = document.querySelector('#total'),//общее кол-во
  //   current = document.querySelector('#current'),
  //   slidesWrapper = document.querySelector('.offer__slider-wrapper'),
  //   width = window.getComputedStyle(slidesWrapper).width,//получаем ширину враппера
  //   slidesField = document.querySelector('.offer__slider-inner');//строка для всей карусели

  // let slideIndex = 1;
  // let offset = 0;//отступ


  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;//общее кол-во
  //   current.textContent = `0${slideIndex}`;//номер текущего слайда
  // } else {
  //   total.textContent = slides.length;
  //   current.textContent = slideIndex;
  // }

  // slidesField.style.width = 100 * slides.length + '%';//ширина для иннера
  // slidesField.style.display = 'flex';
  // slidesField.style.transition = '0.5s all';//стили для слайдов-чт они выстроились в ряд

  // slidesWrapper.style.overflow = 'hidden';//скрываем все слайды вне враппера

  // slides.forEach(slide => {//т к слайды м б разной шир--устан для них одну ширину
  //   slide.style.width = width;
  // });

  // next.addEventListener('click', () => {

  //   if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
  //     offset = 0;//значит мы долистали до конца и надо вернуться в самое начало
  //     // (+width.slice(0, width.length - 2)--'500px'переделываем в 500
  //   } else {
  //     offset += +width.slice(0, width.length - 2);//добавляем смещение
  //   }

  //   //сдвигаем слайд
  //   slidesField.style.transform = `translateX(-${offset}px)`;

  //   if (slideIndex == slides.length) {//если мы на последнем-то перемещ-ся на первый
  //     slideIndex = 1;
  //   } else {
  //     slideIndex++;
  //   }

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // })

  // prev.addEventListener('click', () => {
  //   if (offset == 0) {
  //     offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  //   } else {
  //     offset -= +width.slice(0, width.length - 2);
  //   }

  //   slidesField.style.transform = `translateX(-${offset}px)`;

  //   if (slideIndex == 1) {
  //     slideIndex = slides.length;
  //   } else {
  //     slideIndex--;
  //   }

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // });

}

module.exports = slider;


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {



function tabs() {
  // --------------Tabs-----------------
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  // 1.ф-я кот будет скрывать ненужные нам табы
  // 2.ф-я кот показывает нужный таб
  // 3.назначить обр-ки событий на меню фитнесс и т д

  function hideTabContent() {
    tabsContent.forEach(item => { //скрываем .tabcontent 
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active'); // скрываем .tabheader__item_active пропис-й в html
    })
  }

  function showTabContent(i = 0) { //показ-ем i-й эл с  .tabheader__item_active
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      // опр-ем номер куда кликнул польз-ль чт по этому номеру вызвать showTabContent();
      // перебираем все tabs и сравниваем
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })

}

module.exports = tabs;


/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((module) => {

function timer() {
  // ---------------таймер-------------------------
  // 1. ф-я опр-я разницу между временем польз-ля и временем акции,получение дней,часов,и тд-getTimeRemaining
  // 2. ф-я устан-я таймер на стр
  // 3. ф-я обновления таймера

  const deadline = '2023-05-11';//сюда данные м прих из input

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;

    const t = Date.parse(endtime) - Date.parse(new Date());//кол-во мллсек в конечном времени - время сейчас:

    if (t <= 0) {//если время истекло то пишем нули.Тут можно вставить блок с надписью -акция оконч ,другое
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));//разница в млсек / кол-во млсек в 1 дне(1000 * 60 * 60 * 24) и округляем
      hours = Math.floor((t / (1000 * 60 * 60) % 24));
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) { // 2. ф-я устан-я таймер на стр

    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {//будет обновлять таймер каждую секунду
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

}

module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/



window.addEventListener('DOMContentLoaded', () => {

  const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
    modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
    timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js"),
    cards = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js"),
    calc = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js"),
    forms = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js"),
    slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");

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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map