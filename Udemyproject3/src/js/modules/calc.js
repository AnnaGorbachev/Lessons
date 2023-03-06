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
