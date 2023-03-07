function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {

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

  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container), //1.точки
    next = document.querySelector(nextArrow),
    prev = document.querySelector(prevArrow),
    total = document.querySelector(totalCounter),//общее кол-во
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    width = window.getComputedStyle(slidesWrapper).width,//получаем ширину враппера
    slidesField = document.querySelector(field);//строка для всей карусели

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

export default slider;
