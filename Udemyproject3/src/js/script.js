'use strict';


window.addEventListener('DOMContentLoaded', () => {

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



  //---Slider---------------

  let slideIndex = 1;
  const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),//общее кол-во
    current = document.querySelector('#current');

  showSlides(slideIndex);//иниц-ем showSlides при открытии страницы

  // подставляем общее кол-во в блок total
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';
    // подставляем номер текущего слайда
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

  }


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  })

  next.addEventListener('click', () => {
    plusSlides(1);
  })









});
