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

  // 1. ф-я кот б получать цифры таймера и что-то с ними делать
  // 2. и вывод
  // 3. ф-я обновления таймера

  const deadline = '2020-05-11';//сюда данные м прих из input

  function getTimeRemaining(endtime) {
    //кол-во мллсек в конечном времени - время сейчас:
    const t = Date.parse(endtime) - Date.parse(new Date());
    //разница в млсек / кол-во млсек в 1 дне(1000 * 60 * 60 * 24) и округляем
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60));

  }



});
